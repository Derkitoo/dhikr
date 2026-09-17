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
          <i class="ph ph-magnifying-glass text-3xl mb-2 block text-textmuted/60"></i>
          Aucun Nom d'Allah ne correspond à votre recherche.
        </div>
      `;
      return;
    }

    for (const name of names) {
      const card = document.createElement('div');
      card.className =
        'name-card p-3.5 rounded-2xl bg-surface/50 border border-bordercolor/70 hover:border-amber-500/50 hover:bg-surface/80 flex items-center justify-between gap-3 tap-effect transition-all cursor-pointer group shadow-sm';
      card.setAttribute('data-name-num', name.n.toString());

      card.innerHTML = `
        <!-- Partie Gauche : Numéro, Translittération & Signification -->
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center font-bold text-xs border border-amber-500/20 shrink-0 transition-colors">
            ${name.n}
          </div>
          <div class="min-w-0">
            <div class="flex items-baseline gap-1.5 flex-wrap">
              <span class="font-bold text-sm text-textmain group-hover:text-amber-400 transition-colors">${escapeHtml(name.p)}</span>
              <span class="text-xs text-textmuted font-medium">· ${escapeHtml(name.f)}</span>
            </div>
            <p class="text-[11px] text-textmuted mt-0.5 leading-relaxed line-clamp-2">${escapeHtml(name.m)}</p>
          </div>
        </div>

        <!-- Partie Droite : Calligraphie Arabe Pure & Aérée (Sans bouton répétitif) -->
        <div class="text-right shrink-0 pl-2">
          <span class="font-arabic text-2xl sm:text-3xl text-amber-400 font-bold leading-none select-none block drop-shadow-sm" dir="rtl">${escapeHtml(name.a)}</span>
          <span class="text-[10px] text-textmuted/70 group-hover:text-amber-400/80 transition-colors flex items-center justify-end gap-0.5 mt-1">
            <span>Méditer</span>
            <i class="ph ph-caret-right text-[10px]"></i>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        this.meditateName(name);
      });

      container.appendChild(card);
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
