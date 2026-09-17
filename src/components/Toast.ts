import { getRequiredElement } from '../utils/dom.utils';

/**
 * Gestionnaire de notifications Toast temporaires.
 */
export class Toast {
  private static timeoutId: number | null = null;

  public static show(message: string, durationMs: number = 3200): void {
    const toast = getRequiredElement('toast');
    const msgEl = getRequiredElement('toast-msg');

    msgEl.textContent = message;
    toast.classList.remove('hidden');

    // Force reflow pour l'animation d'apparition
    void toast.offsetWidth;
    toast.classList.add('toast-show');

    if (this.timeoutId !== null) {
      window.clearTimeout(this.timeoutId);
    }

    this.timeoutId = window.setTimeout(() => {
      toast.classList.remove('toast-show');
      toast.classList.add('hidden');
      this.timeoutId = null;
    }, durationMs);
  }
}
