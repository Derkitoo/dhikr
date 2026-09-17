import { dhikrInputSchema } from '../schemas/dhikr.schema';
import { AppStore } from '../state/store';
import type { DhikrItem } from '../types/dhikr.types';
import { getRequiredElement, openModal, closeModal } from '../utils/dom.utils';
import { Toast } from './Toast';

export class AddDhikrModal {
  private store: AppStore;
  private editingId: string | null = null;

  constructor(store: AppStore) {
    this.store = store;
  }

  public init(): void {
    const btnOpen = getRequiredElement('btn-open-add-modal');
    btnOpen.addEventListener('click', () => {
      this.open();
    });

    const btnClose = getRequiredElement('add-close-btn');
    btnClose.addEventListener('click', () => {
      this.close();
    });

    const btnSave = getRequiredElement('add-save-btn');
    btnSave.addEventListener('click', () => {
      this.save();
    });
  }

  public open(editId?: string): void {
    this.editingId = editId || null;
    const titleEl = getRequiredElement('add-modal-title');
    const inputTitle = getRequiredElement<HTMLInputElement>('add-title');
    const inputArabic = getRequiredElement<HTMLInputElement>('add-arabic');
    const inputPhonetic = getRequiredElement<HTMLInputElement>('add-phonetic');
    const inputTranslation = getRequiredElement<HTMLInputElement>('add-translation');
    const inputTarget = getRequiredElement<HTMLInputElement>('add-target');
    const selectCategory = getRequiredElement<HTMLSelectElement>('add-category');

    if (editId) {
      const dhikr = this.store.adhkars.find((d) => d.id === editId);
      if (dhikr) {
        titleEl.textContent = "Modifier l'invocation";
        inputTitle.value = dhikr.french;
        inputArabic.value = dhikr.arabic || '';
        inputPhonetic.value = dhikr.phonetic || '';
        inputTranslation.value = dhikr.translation || '';
        inputTarget.value = dhikr.target.toString();
        selectCategory.value = dhikr.category;
      }
    } else {
      titleEl.textContent = 'Nouvelle Invocation';
      inputTitle.value = '';
      inputArabic.value = '';
      inputPhonetic.value = '';
      inputTranslation.value = '';
      inputTarget.value = '100';
      selectCategory.value = 'daily';
    }

    openModal('add-modal', 'add-box');
  }

  public close(): void {
    closeModal('add-modal', 'add-box');
    this.editingId = null;
  }

  private save(): void {
    const inputTitle = getRequiredElement<HTMLInputElement>('add-title');
    const inputArabic = getRequiredElement<HTMLInputElement>('add-arabic');
    const inputPhonetic = getRequiredElement<HTMLInputElement>('add-phonetic');
    const inputTranslation = getRequiredElement<HTMLInputElement>('add-translation');
    const inputTarget = getRequiredElement<HTMLInputElement>('add-target');
    const selectCategory = getRequiredElement<HTMLSelectElement>('add-category');

    const rawData = {
      french: inputTitle.value,
      arabic: inputArabic.value,
      phonetic: inputPhonetic.value,
      translation: inputTranslation.value,
      target: parseInt(inputTarget.value, 10),
      category: selectCategory.value
    };

    const validation = dhikrInputSchema.safeParse(rawData);
    if (!validation.success) {
      const firstError = validation.error.errors[0]?.message || 'Données invalides.';
      alert(`Erreur de validation : ${firstError}`);
      return;
    }

    const validData = validation.data;
    const id = this.editingId || `custom_${Date.now()}`;

    const dhikrItem: DhikrItem = {
      id,
      french: validData.french,
      arabic: validData.arabic || undefined,
      phonetic: validData.phonetic || undefined,
      translation: validData.translation || undefined,
      target: validData.target,
      targetLabel: `Boucle de ${validData.target}`,
      category: validData.category
    };

    this.store.addOrUpdateCustomDhikr(dhikrItem);
    this.close();
    Toast.show(this.editingId ? 'Invocation mise à jour !' : 'Nouvelle invocation ajoutée !');
  }
}
