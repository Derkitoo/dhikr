import { AppStore } from '../state/store';
import { AudioService } from '../services/audio.service';
import { getRequiredElement, openModal, closeModal } from '../utils/dom.utils';
import { Toast } from './Toast';

export class FocusModal {
  private store: AppStore;
  private currentId: string | null = null;
  private isAutoPlaying: boolean = false;
  private autoPlayTimer: number | null = null;
  private arabicFontSize: number = 32;
  private detailsVisible: boolean = true;

  constructor(store: AppStore) {
    this.store = store;
  }

  public init(): void {
    this.initFocusBeads();
    this.bindEvents();
  }

  private bindEvents(): void {
    const btnClose = getRequiredElement('focus-close-btn');
    btnClose.addEventListener('click', () => {
      this.close();
    });

    const tapArea = getRequiredElement('focus-tap-zone');
    tapArea.addEventListener('click', () => {
      if (this.currentId) {
        this.store.increment(this.currentId);
        this.renderCurrentFocus();
      }
    });

    const autoBtn = getRequiredElement('focus-autoplay-btn');
    autoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleAutoPlay();
    });

    const speakBtn = getRequiredElement('focus-speaker-btn');
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.speakCurrent();
    });

    const fontMinusBtn = getRequiredElement('focus-font-minus');
    fontMinusBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.changeFontSize(-2);
    });

    const fontPlusBtn = getRequiredElement('focus-font-plus');
    fontPlusBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.changeFontSize(2);
    });

    const detailsBtn = getRequiredElement('focus-details-btn');
    detailsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleDetails();
    });

    // Raccourcis clavier
    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('focus-modal');
      if (modal && !modal.classList.contains('hidden')) {
        if (e.code === 'Space' || e.key === 'Enter') {
          e.preventDefault();
          if (this.currentId) {
            this.store.increment(this.currentId);
            this.renderCurrentFocus();
          }
        } else if (e.key === 'Escape') {
          this.close();
        }
      }
    });
  }

  public open(id: string): void {
    this.currentId = id;
    this.renderCurrentFocus();
    openModal('focus-modal', 'focus-box');
  }

  public close(): void {
    this.stopAutoPlay();
    AudioService.stopSpeech();
    closeModal('focus-modal', 'focus-box');
    this.currentId = null;
  }

  public renderCurrentFocus(): void {
    if (!this.currentId) return;

    const dhikr = this.store.adhkars.find((d) => d.id === this.currentId);
    if (!dhikr) return;

    const count = this.store.dailyCounts[dhikr.id] || 0;
    const target = dhikr.target || 100;
    const roundNumber = Math.floor(count / target) + 1;
    const currentRoundCount = count % target;
    const progressRatio =
      count > 0 && currentRoundCount === 0 ? 1 : currentRoundCount / target;

    const titleEl = getRequiredElement('focus-title');
    const arabicEl = getRequiredElement('focus-arabic');
    const phoneticEl = getRequiredElement('focus-phonetic');
    const translationEl = getRequiredElement('focus-translation');
    const counterEl = getRequiredElement('focus-counter');
    const progressTextEl = getRequiredElement('focus-progress-text');
    const roundBadgeEl = getRequiredElement('focus-round-badge');
    const ringEl = document.getElementById('focus-ring');

    titleEl.textContent = dhikr.french;
    arabicEl.textContent = dhikr.arabic || '';
    arabicEl.style.fontSize = `${this.arabicFontSize}px`;
    phoneticEl.textContent = dhikr.phonetic || '';
    translationEl.textContent = dhikr.translation || '';
    counterEl.textContent = count.toString();
    progressTextEl.textContent = `${currentRoundCount} / ${target}`;
    roundBadgeEl.textContent = `Tour ${roundNumber}`;

    if (ringEl) {
      // Périmètre du cercle r=44 : 2 * PI * 44 ≈ 276.46
      const circumference = 276.46;
      const offset = circumference - progressRatio * circumference;
      ringEl.style.strokeDashoffset = offset.toFixed(1);
    }

    this.updateFocusBeads(count);
  }

  private changeFontSize(delta: number): void {
    this.arabicFontSize = Math.min(52, Math.max(22, this.arabicFontSize + delta));
    const arabicEl = getRequiredElement('focus-arabic');
    arabicEl.style.fontSize = `${this.arabicFontSize}px`;
  }

  private toggleDetails(): void {
    this.detailsVisible = !this.detailsVisible;
    const extraContent = getRequiredElement('focus-extra-content');
    const detailsLabel = getRequiredElement('focus-details-label');

    if (this.detailsVisible) {
      extraContent.classList.remove('hidden');
      detailsLabel.textContent = 'Détails';
    } else {
      extraContent.classList.add('hidden');
      detailsLabel.textContent = 'Masqué';
    }
  }

  private initFocusBeads(): void {
    const group = document.getElementById('focus-beads-group');
    if (!group) return;
    group.innerHTML = '';

    const totalBeads = 33;
    const radius = 44;

    for (let i = 0; i < totalBeads; i++) {
      const angle = (i / totalBeads) * 2 * Math.PI;
      const cx = 50 + radius * Math.cos(angle);
      const cy = 50 + radius * Math.sin(angle);

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', cx.toFixed(2));
      circle.setAttribute('cy', cy.toFixed(2));
      circle.setAttribute('r', '2.2');
      circle.setAttribute('class', 'bead fill-bordercolor transition-all duration-200');
      circle.setAttribute('id', `bead-${i}`);

      group.appendChild(circle);
    }
  }

  private updateFocusBeads(count: number): void {
    const totalBeads = 33;
    const activeIndex = (count - 1) % totalBeads;

    for (let i = 0; i < totalBeads; i++) {
      const bead = document.getElementById(`bead-${i}`);
      if (!bead) continue;

      if (count === 0) {
        bead.setAttribute('class', 'bead fill-bordercolor transition-all duration-200');
        bead.setAttribute('r', '2.2');
      } else if (i === activeIndex) {
        bead.setAttribute(
          'class',
          'bead fill-amber-400 transition-all duration-200 filter drop-shadow-[0_0_4px_#fbbf24]'
        );
        bead.setAttribute('r', '3.8');
      } else if (i < activeIndex) {
        bead.setAttribute('class', 'bead fill-primary-400 transition-all duration-200');
        bead.setAttribute('r', '2.5');
      } else {
        bead.setAttribute('class', 'bead fill-bordercolor transition-all duration-200');
        bead.setAttribute('r', '2.2');
      }
    }
  }

  private speakCurrent(): void {
    if (!this.currentId) return;
    const dhikr = this.store.adhkars.find((d) => d.id === this.currentId);
    if (!dhikr) return;

    const textToSpeak = dhikr.arabic || dhikr.phonetic || dhikr.french;
    AudioService.speakText(textToSpeak);
  }

  private toggleAutoPlay(): void {
    if (this.isAutoPlaying) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  private startAutoPlay(): void {
    if (!this.currentId) return;
    this.isAutoPlaying = true;
    this.updateAutoPlayUI(true);
    Toast.show('Mode Mains-Libres activé ▶️');
    this.runAutoPlayStep();
  }

  private stopAutoPlay(): void {
    this.isAutoPlaying = false;
    if (this.autoPlayTimer !== null) {
      window.clearTimeout(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
    AudioService.stopSpeech();
    this.updateAutoPlayUI(false);
  }

  private updateAutoPlayUI(active: boolean): void {
    const btn = getRequiredElement('focus-autoplay-btn');
    const icon = getRequiredElement('focus-autoplay-icon');
    const label = getRequiredElement('focus-autoplay-label');

    if (active) {
      btn.className =
        'px-3 py-2 rounded-2xl bg-amber-500 text-black text-xs font-bold border border-amber-400 tap-effect flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse';
      icon.className = 'ph-bold ph-pause text-sm';
      label.textContent = 'Pause';
    } else {
      btn.className =
        'px-3 py-2 rounded-2xl bg-card text-textmuted hover:text-amber-400 text-xs font-semibold border border-bordercolor tap-effect flex items-center gap-1.5';
      icon.className = 'ph-bold ph-play text-sm';
      label.textContent = 'Auto';
    }
  }

  private runAutoPlayStep(): void {
    if (!this.isAutoPlaying || !this.currentId) return;

    const dhikr = this.store.adhkars.find((d) => d.id === this.currentId);
    if (!dhikr) {
      this.stopAutoPlay();
      return;
    }

    const currentCount = this.store.dailyCounts[dhikr.id] || 0;
    const target = dhikr.target || 100;

    if (currentCount >= target) {
      this.stopAutoPlay();
      Toast.show(`Objectif atteint pour "${dhikr.french}" ! 🎉`);
      return;
    }

    const res = this.store.increment(dhikr.id);
    this.renderCurrentFocus();

    if (res.isMilestone) {
      this.stopAutoPlay();
      Toast.show(`Objectif de ${target} atteint ! 🎉`);
      return;
    }

    const textToSpeak = dhikr.arabic || dhikr.phonetic || dhikr.french;
    AudioService.speakText(textToSpeak).then(() => {
      if (!this.isAutoPlaying) return;
      this.autoPlayTimer = window.setTimeout(() => {
        this.runAutoPlayStep();
      }, this.store.autoDelayMs);
    });
  }
}
