import type { AllahDivineName } from '../types/name.types';
import type { DhikrItem } from '../types/dhikr.types';
import { AppStore } from '../state/store';
import { getRequiredElement, openModal, closeModal } from '../utils/dom.utils';

export class NameDetailModal {
  private store: AppStore;
  private onStartTasbih: (dhikrId: string) => void;
  private onBackToCatalog: () => void;
  private currentName: AllahDivineName | null = null;

  constructor(
    store: AppStore,
    onStartTasbih: (dhikrId: string) => void,
    onBackToCatalog: () => void
  ) {
    this.store = store;
    this.onStartTasbih = onStartTasbih;
    this.onBackToCatalog = onBackToCatalog;
  }

  public init(): void {
    const btnClose = getRequiredElement('name-detail-close-btn');
    btnClose.addEventListener('click', () => {
      this.close();
    });

    const btnBack = getRequiredElement('name-detail-back-btn');
    btnBack.addEventListener('click', () => {
      this.close();
      this.onBackToCatalog();
    });

    const btnTasbih = getRequiredElement('name-detail-tasbih-btn');
    btnTasbih.addEventListener('click', () => {
      if (this.currentName) {
        this.meditateName(this.currentName);
      }
    });
  }

  public open(name: AllahDivineName): void {
    this.currentName = name;
    this.render(name);
    openModal('name-detail-modal', 'name-detail-box');
  }

  public close(): void {
    closeModal('name-detail-modal', 'name-detail-box');
  }

  private render(name: AllahDivineName): void {
    getRequiredElement('name-detail-badge').textContent = `Nom n° ${name.n} sur 99`;
    getRequiredElement('name-detail-arabic').textContent = name.a;
    getRequiredElement('name-detail-phonetic').textContent = name.p;
    getRequiredElement('name-detail-french').textContent = name.f;
    getRequiredElement('name-detail-meaning').textContent = name.detailedMeaning || name.m;

    // Preuve Coranique
    getRequiredElement('name-detail-quran-surah').textContent = name.quran.surah;
    getRequiredElement('name-detail-quran-arabic').textContent = name.quran.arabic;
    getRequiredElement('name-detail-quran-translation').textContent = `« ${name.quran.translation} »`;

    // Mention Sunnah Prophétique
    getRequiredElement('name-detail-hadith-text').textContent = name.hadith.text;
    getRequiredElement('name-detail-hadith-source').textContent = name.hadith.source;
  }

  private meditateName(name: AllahDivineName): void {
    this.close();

    const nameId = `name_${name.n}`;
    let dhikr: DhikrItem | undefined = this.store.adhkars.find((d) => d.id === nameId);

    if (!dhikr) {
      const cleanArabicName = name.a.replace(/^ال/, '');
      dhikr = {
        id: nameId,
        category: 'daily',
        arabic: `يَا ${cleanArabicName}`,
        french: `Nom d'Allah : ${name.p}`,
        phonetic: `Yā ${name.p}`,
        translation: `${name.f} - ${name.m}`,
        merit: `« C'est à Allah qu'appartiennent les plus beaux Noms. Invoquez-Le par ces Noms. » (${name.quran.surah})`,
        target: 33,
        targetLabel: 'Boucle de 33'
      };
      this.store.addOrUpdateCustomDhikr(dhikr);
    }

    this.onStartTasbih(dhikr.id);
  }
}
