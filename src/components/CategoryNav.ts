import type { DhikrCategory } from '../types/dhikr.types';
import { AppStore } from '../state/store';
import { getRequiredElement } from '../utils/dom.utils';

const CATEGORY_SUMMARIES: Record<DhikrCategory, string> = {
  all: 'Toutes les invocations',
  daily: 'Invocations quotidiennes',
  morning_evening: 'Adhkars du matin et du soir',
  prayer: 'Invocations après la prière',
  sleep: 'Invocations avant de dormir',
  favorites: 'Vos invocations favorites',
  custom: 'Vos invocations personnalisées'
};

export class CategoryNav {
  private store: AppStore;

  constructor(store: AppStore) {
    this.store = store;
  }

  public init(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.cat-pill');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat') as DhikrCategory;
        if (cat) {
          this.store.setCategory(cat);
        }
      });
    });

    this.render();
  }

  public render(): void {
    const activeCat = this.store.currentCategory;
    const counts = this.store.getCategoryCounts();

    // Mettre à jour le résumé contextuel
    const summaryEl = getRequiredElement('category-summary');
    summaryEl.textContent = CATEGORY_SUMMARIES[activeCat] || 'Invocations';

    // Mettre à jour les badges et états visuels des puces
    const buttons = document.querySelectorAll<HTMLButtonElement>('.cat-pill');
    buttons.forEach((btn) => {
      const cat = btn.getAttribute('data-cat') as DhikrCategory;
      const isSelected = cat === activeCat;
      const badge = btn.querySelector<HTMLElement>('.cat-badge');

      if (badge && cat) {
        badge.textContent = (counts[cat] || 0).toString();
      }

      if (isSelected) {
        btn.className =
          'cat-pill px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 bg-primary-500 text-white border-primary-400 shadow-neon tap-effect';
        if (badge) {
          badge.className =
            'cat-badge px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-white/25 text-white tabular-nums';
        }
      } else {
        btn.className =
          'cat-pill px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 bg-surface/70 text-textmuted border-bordercolor hover:text-textmain hover:bg-surface hover:border-primary-500/30 tap-effect';
        if (badge) {
          badge.className =
            'cat-badge px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-bordercolor/60 text-textmuted tabular-nums';
        }
      }
    });
  }
}
