import { AppStore } from '../state/store';
import { getRequiredElement } from '../utils/dom.utils';
import { DhikrCard, type DhikrCardCallbacks } from './DhikrCard';

export class DhikrGrid {
  private store: AppStore;
  private callbacks: DhikrCardCallbacks;

  constructor(store: AppStore, callbacks: DhikrCardCallbacks) {
    this.store = store;
    this.callbacks = callbacks;
  }

  public render(): void {
    const container = getRequiredElement('app-container');
    container.innerHTML = '';

    const filtered = this.store.getFilteredDhikrs();

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-card rounded-3xl p-8 text-center flex flex-col items-center justify-center my-6">
          <i class="ph ph-magnifying-glass text-4xl text-textmuted mb-2"></i>
          <h3 class="text-sm font-bold text-textmain mb-1">Aucune invocation trouvée</h3>
          <p class="text-xs text-textmuted">Essayez un autre mot-clé ou ajoutez un nouveau Dhikr.</p>
        </div>
      `;
      return;
    }

    for (const dhikr of filtered) {
      const cardEl = DhikrCard.render(dhikr, this.store, this.callbacks);
      container.appendChild(cardEl);
    }
  }
}
