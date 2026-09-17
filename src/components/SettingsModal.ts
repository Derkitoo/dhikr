import type { AppTheme } from '../types/theme.types';
import { AppStore } from '../state/store';
import { StorageService } from '../services/storage.service';
import { PwaService } from '../services/pwa.service';
import { getRequiredElement, openModal, closeModal } from '../utils/dom.utils';
import { Toast } from './Toast';

export class SettingsModal {
  private store: AppStore;

  constructor(store: AppStore) {
    this.store = store;
  }

  public init(): void {
    const btnOpen = getRequiredElement('btn-open-settings');
    btnOpen.addEventListener('click', () => {
      this.open();
    });

    const btnClose = getRequiredElement('settings-close-btn');
    btnClose.addEventListener('click', () => {
      this.close();
    });

    // Sélection des thèmes
    const themeCards = document.querySelectorAll<HTMLElement>('.theme-card');
    themeCards.forEach((card) => {
      card.addEventListener('click', () => {
        const theme = card.getAttribute('data-theme') as AppTheme;
        if (theme) {
          this.store.setTheme(theme);
          this.applyThemeDOM(theme);
          this.updateThemeCards(theme);
          Toast.show(`Thème ${theme} appliqué`);
        }
      });
    });

    // Bascules Son / Vibration
    const soundToggle = getRequiredElement<HTMLInputElement>('sound-toggle');
    soundToggle.checked = this.store.soundEnabled;
    soundToggle.addEventListener('change', () => {
      this.store.toggleSound();
    });

    const hapticToggle = getRequiredElement<HTMLInputElement>('haptic-toggle');
    hapticToggle.checked = this.store.hapticEnabled;
    hapticToggle.addEventListener('change', () => {
      this.store.setHaptic(hapticToggle.checked);
    });

    // Délai auto
    const autoDelaySelect = getRequiredElement<HTMLSelectElement>('auto-delay-select');
    autoDelaySelect.value = this.store.autoDelayMs.toString();
    autoDelaySelect.addEventListener('change', () => {
      const ms = parseInt(autoDelaySelect.value, 10) || 2000;
      this.store.setAutoDelay(ms);
      Toast.show(`Délai réglé à ${ms / 1000}s`);
    });

    // Réinitialiser tout
    const resetDailyBtn = getRequiredElement('btn-reset-all-daily');
    resetDailyBtn.addEventListener('click', () => {
      if (confirm('Voulez-vous réinitialiser tous les compteurs du jour à zéro ?')) {
        this.store.resetAllDaily();
        this.close();
        Toast.show('Tous les compteurs du jour ont été remis à zéro');
      }
    });

    // Exportation JSON
    const exportBtn = getRequiredElement('btn-export-backup');
    exportBtn.addEventListener('click', () => {
      this.exportBackup();
    });

    // Importation JSON
    const importInput = getRequiredElement<HTMLInputElement>('import-file-input');
    importInput.addEventListener('change', (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        this.importBackup(file);
      }
    });

    // PWA Install
    const pwaBox = getRequiredElement('pwa-install-container');
    const pwaBtn = getRequiredElement('btn-pwa-install');
    PwaService.onInstallableChange((canInstall) => {
      if (canInstall) {
        pwaBox.classList.remove('hidden');
      } else {
        pwaBox.classList.add('hidden');
      }
    });
    pwaBtn.addEventListener('click', () => {
      PwaService.promptInstall();
    });

    // Application initiale du thème
    this.applyThemeDOM(this.store.theme);
    this.updateThemeCards(this.store.theme);
  }

  public open(): void {
    openModal('settings-modal', 'settings-box');
  }

  public close(): void {
    closeModal('settings-modal', 'settings-box');
  }

  public applyThemeDOM(theme: AppTheme): void {
    const root = document.documentElement;
    root.classList.remove('theme-emerald', 'theme-medina', 'theme-kaaba', 'theme-oled');
    root.classList.add(`theme-${theme}`);
  }

  private updateThemeCards(activeTheme: AppTheme): void {
    const themeCards = document.querySelectorAll<HTMLElement>('.theme-card');
    themeCards.forEach((card) => {
      const t = card.getAttribute('data-theme');
      if (t === activeTheme) {
        card.classList.add('border-primary-500', 'ring-2', 'ring-primary-500/30');
      } else {
        card.classList.remove('border-primary-500', 'ring-2', 'ring-primary-500/30');
      }
    });
  }

  private exportBackup(): void {
    const data = this.store.exportBackup();
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dhikr-pro-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    Toast.show('Sauvegarde exportée avec succès ! 💾');
  }

  private importBackup(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const validated = StorageService.validateAndParseBackup(text);
        if (confirm('Importer cette sauvegarde ? Vos données actuelles seront mises à jour.')) {
          this.store.importBackup(validated);
          this.applyThemeDOM(this.store.theme);
          this.updateThemeCards(this.store.theme);
          this.close();
          Toast.show('Données restaurées avec succès ! 🎉');
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Fichier invalide.';
        alert(`Erreur d'importation : ${message}`);
      }
    };
    reader.readAsText(file);
  }
}
