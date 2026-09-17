import { HijriService } from '../services/hijri.service';
import { AppStore } from '../state/store';
import { getRequiredElement } from '../utils/dom.utils';

export class Header {
  private store: AppStore;

  constructor(store: AppStore) {
    this.store = store;
  }

  public init(): void {
    this.renderHijriInfo();
    this.bindEvents();
    this.updateSoundIcon();
  }

  private renderHijriInfo(): void {
    const hijriInfo = HijriService.getTodayHijri();
    const dateBadgeEl = getRequiredElement('hijri-date-badge');
    const fastBadgeEl = getRequiredElement('hijri-fast-badge');

    dateBadgeEl.textContent = hijriInfo.formattedString;

    if (hijriInfo.isWhiteDay) {
      fastBadgeEl.innerHTML = '<i class="ph-fill ph-moon-stars text-amber-400"></i> Jours Blancs (Jeûne conseillé)';
      fastBadgeEl.classList.remove('hidden');
    } else if (hijriInfo.isSunnahFastDay) {
      fastBadgeEl.innerHTML = '<i class="ph-fill ph-sun text-amber-400"></i> Jeûne prophétique (Lundi/Jeudi)';
      fastBadgeEl.classList.remove('hidden');
    } else {
      fastBadgeEl.classList.add('hidden');
    }
  }

  private bindEvents(): void {
    // Bouton bascule recherche
    const searchBtn = getRequiredElement('btn-toggle-search');
    const searchContainer = getRequiredElement('search-bar-container');
    const searchInput = getRequiredElement<HTMLInputElement>('search-input');
    const searchClear = getRequiredElement('btn-search-clear');

    searchBtn.addEventListener('click', () => {
      searchContainer.classList.toggle('hidden');
      if (!searchContainer.classList.contains('hidden')) {
        searchInput.focus();
      }
    });

    searchInput.addEventListener('input', (e) => {
      const val = (e.target as HTMLInputElement).value;
      this.store.setSearchQuery(val);
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      this.store.setSearchQuery('');
    });

    // Bouton son
    const soundBtn = getRequiredElement('btn-toggle-sound');
    soundBtn.addEventListener('click', () => {
      this.store.toggleSound();
      this.updateSoundIcon();
    });
  }

  public updateSoundIcon(): void {
    const soundBtn = getRequiredElement('btn-toggle-sound');
    const isEnabled = this.store.soundEnabled;
    soundBtn.innerHTML = isEnabled
      ? '<i class="ph ph-speaker-high text-lg"></i>'
      : '<i class="ph ph-speaker-slash text-lg text-rose-400"></i>';
    soundBtn.title = isEnabled ? 'Son activé' : 'Son coupé';
  }
}
