import type { AsyncState } from '../types/state.types';
import {
  createIdleState,
  createLoadingState,
  createSuccessState,
  createErrorState
} from '../types/state.types';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

/**
 * Service de gestion de la PWA et de son cycle de vie (Service Worker, installation).
 */
export class PwaService {
  private static deferredPrompt: BeforeInstallPromptEvent | null = null;
  private static swState: AsyncState<ServiceWorkerRegistration> = createIdleState();
  private static installableListeners: Array<(canInstall: boolean) => void> = [];

  public static init(): void {
    if (typeof window === 'undefined') return;

    if ('serviceWorker' in navigator) {
      this.swState = createLoadingState();
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('./sw.js')
          .then((registration) => {
            this.swState = createSuccessState(registration);
            console.log('[PwaService] Service Worker actif:', registration.scope);
          })
          .catch((error) => {
            const err = error instanceof Error ? error : new Error('Erreur Service Worker');
            this.swState = createErrorState(err);
            console.warn('[PwaService] Service Worker non disponible :', err);
          });
      });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      this.notifyInstallable(true);
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
      this.notifyInstallable(false);
      console.log('[PwaService] Application installée avec succès.');
    });
  }

  public static canInstall(): boolean {
    return this.deferredPrompt !== null;
  }

  public static promptInstall(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return Promise.resolve(false);
    }
    const promptEvent = this.deferredPrompt;
    return promptEvent
      .prompt()
      .then(() => promptEvent.userChoice)
      .then((choice) => {
        this.deferredPrompt = null;
        this.notifyInstallable(false);
        return choice.outcome === 'accepted';
      })
      .catch((err) => {
        console.error('[PwaService] Erreur lors du prompt PWA:', err);
        return false;
      });
  }

  public static onInstallableChange(listener: (canInstall: boolean) => void): () => void {
    this.installableListeners.push(listener);
    listener(this.canInstall());
    return () => {
      this.installableListeners = this.installableListeners.filter((l) => l !== listener);
    };
  }

  private static notifyInstallable(canInstall: boolean): void {
    for (const listener of this.installableListeners) {
      try {
        listener(canInstall);
      } catch (err) {
        console.error('[PwaService] Erreur dans un auditeur installable:', err);
      }
    }
  }

  public static getRegistrationState(): AsyncState<ServiceWorkerRegistration> {
    return this.swState;
  }
}
