import { AppStore } from '../state/store';
import { getRequiredElement } from '../utils/dom.utils';

export class DailySummaryBanner {
  private store: AppStore;

  constructor(store: AppStore) {
    this.store = store;
  }

  public render(): void {
    const todayTotal = this.store.getTodayTotal();
    const lifetimeTotal = this.store.getLifetimeTotal();
    const streak = this.store.streak;

    const todayCounterEl = getRequiredElement('daily-total-counter');
    const lifetimeEl = getRequiredElement('lifetime-counter-banner');
    const streakEl = getRequiredElement('streak-counter');

    todayCounterEl.textContent = `${todayTotal.toLocaleString('fr-FR')} invocation${todayTotal > 1 ? 's' : ''}`;
    lifetimeEl.textContent = lifetimeTotal.toLocaleString('fr-FR');
    streakEl.textContent = streak.toString();
  }
}
