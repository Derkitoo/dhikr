import type { AllahDivineName } from '../types/name.types';
import { ALLAH_NAMES } from '../data/allah-names';
import { AppStore } from '../state/store';
import { getRequiredElement, escapeHtml, openModal, closeModal } from '../utils/dom.utils';

export class NamesModal {
  private store: AppStore;
  private onSelectNameForFocus: (id: string) => void;

  constructor(store: AppStore, onSelectNameForFocus: (id: string) => void) {
    this.store = store;
    this.onSelectNameForFocus = onSelectNameForFocus;
  }

  public init(): void {
    const btnClose = getRequiredElement('names-close-btn');
    btnClose.addEventListener('click', () => {
      this.close();
    });

    const searchInput = getRequiredElement<HTMLInputElement>('names-search-input');
    searchInput.addEventListener('input', (e) => {
      const val = (e.target as HTMLInputElement).value;
      this.filter(val);
    });
  }

  public open(): void {
    const searchInput = getRequiredElement<HTMLInputElement>('names-search-input');
    searchInput.value = '';
    this.renderList(ALLAH_NAMES);
    openModal('names-modal', 'names-box');
  }

  public close(): void {
    closeModal('names-modal', 'names-box');
  }

  private filter(query: string): void {
    const q = query.trim().toLowerCase();
    if (!q) {
      this.renderList(ALLAH_NAMES);
      return;
    }

    const filtered = ALLAH_NAMES.filter(
      (item) =>
        item.p.toLowerCase().includes(q) ||
        item.f.toLowerCase().includes(q) ||
        item.m.toLowerCase().includes(q) ||
        item.a.includes(q) ||
        item.n.toString() === q
    );
    this.renderList(filtered);
  }

  private renderList(names: ReadonlyArray<AllahDivineName>): void {
    const container = getRequiredElement('names-list-container');
    container.innerHTML = '';

    if (names.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 text-textmuted text-xs">
          <i class="ph ph-magnifying-glass text-3xl mb-2 block"></i>
          Aucun Nom d'Allah ne correspond à votre recherche.
        </div>
      `;
      return;
    }

    for (const name of names) {
      const row = document.createElement('div');
      row.className =
        'p-3.5 rounded-2xl bg-surface/40 border border-bordercolor/60 flex items-center justify-between gap-3 hover:border-amber-500/30 transition-all';
      row.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/20 shrink-0">
            ${name.n}
          </div>
          <div>
            <div class="flex items-baseline gap-2">
              <span class="font-bold text-sm text-textmain">${escapeHtml(name.p)}</span>
              <span class="text-xs text-textmuted">· ${escapeHtml(name.f)}</span>
            </div>
            <p class="text-[11px] text-textmuted mt-0.5 leading-relaxed">${escapeHtml(name.m)}</p>
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <span class="font-arabic text-xl text-amber-400 font-bold px-1">${escapeHtml(name.a)}</span>
          <button class="btn-meditate-name px-2.5 py-1.5 rounded-xl bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/30 text-xs font-semibold flex items-center gap-1 tap-effect" title="Méditer et répéter en Tasbih">
            <i class="ph-fill ph-hands-praying text-xs"></i>
            <span>Tasbih</span>
          </button>
        </div>
      `;

      const btnMeditate = row.querySelector<HTMLButtonElement>('.btn-meditate-name');
      btnMeditate?.addEventListener('click', () => {
        this.meditateName(name);
      });

      container.appendChild(row);
    }
  }

  private meditateName(name: AllahDivineName): void {
    this.close();

    const nameId = `name_${name.n}`;
    let dhikr = this.store.adhkars.find((d) => d.id === nameId);

    if (!dhikr) {
      dhikr = {
        id: nameId,
        category: 'daily',
        arabic: `يَا ${name.a.replace(/^ال/, '')}`,
        french: `Nom d'Allah : ${name.p}`,
        phonetic: `Yā ${name.p}`,
        translation: `${name.f} - ${name.m}`,
        merit: `« C'est à Allah qu'appartiennent les plus beaux Noms. Invoquez-Le par ces Noms. » (Sourate Al-A'raf, 180)`,
        target: 33,
        targetLabel: 'Boucle de 33'
      };
      this.store.addOrUpdateCustomDhikr(dhikr);
    }

    this.onSelectNameForFocus(dhikr.id);
  }
}
