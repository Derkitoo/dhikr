import { AppStore } from '../state/store';
import { getRequiredElement, openModal, closeModal } from '../utils/dom.utils';

export class StatsModal {
  private store: AppStore;

  constructor(store: AppStore) {
    this.store = store;
  }

  public init(): void {
    const btnOpen = getRequiredElement('btn-open-stats');
    btnOpen.addEventListener('click', () => {
      this.open();
    });

    const btnClose = getRequiredElement('stats-close-btn');
    btnClose.addEventListener('click', () => {
      this.close();
    });
  }

  public open(): void {
    this.renderStats();
    openModal('stats-modal', 'stats-box');
  }

  public close(): void {
    closeModal('stats-modal', 'stats-box');
  }

  private renderStats(): void {
    const streakEl = getRequiredElement('stats-streak');
    const lifetimeEl = getRequiredElement('stats-lifetime');
    const chartContainer = getRequiredElement('stats-chart');

    streakEl.textContent = this.store.streak.toString();
    lifetimeEl.textContent = this.store.getLifetimeTotal().toLocaleString('fr-FR');
    chartContainer.innerHTML = '';

    // Calcul des 7 derniers jours
    const days: string[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push(d.toISOString().slice(0, 10));
    }

    const values = days.map((dateStr) => {
      if (dateStr === new Date().toISOString().slice(0, 10)) {
        return this.store.getTodayTotal();
      }
      return this.store.historyDays[dateStr] || 0;
    });

    const maxVal = Math.max(...values, 10);
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    days.forEach((dateStr, idx) => {
      const val = values[idx] || 0;
      const heightPercent = Math.min(100, Math.max(8, (val / maxVal) * 100));
      const dateObj = new Date(dateStr);
      const dayLabel = dayNames[dateObj.getDay()] || '';
      const isToday = idx === 6;

      const col = document.createElement('div');
      col.className = 'flex-1 flex flex-col items-center gap-1.5 h-full justify-end';
      col.innerHTML = `
        <span class="text-[9px] font-bold text-textmuted tabular-nums">${val > 0 ? (val > 999 ? (val / 1000).toFixed(1) + 'k' : val) : ''}</span>
        <div class="w-full max-w-[28px] rounded-t-lg transition-all duration-500 ${isToday ? 'bg-primary-500 shadow-neon' : 'bg-surface border border-bordercolor'}" style="height: ${heightPercent}%;"></div>
        <span class="text-[10px] font-bold ${isToday ? 'text-primary-400' : 'text-textmuted'} uppercase">${dayLabel}</span>
      `;
      chartContainer.appendChild(col);
    });
  }
}
