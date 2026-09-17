/**
 * Service de retour haptique (Vibrations smartphone).
 * Gère de manière sécurisée la présence de la Vibration API.
 */
export class HapticService {
  private static isSupported(): boolean {
    return typeof navigator !== 'undefined' && 'vibrate' in navigator;
  }

  public static vibrateTick(enabled: boolean): void {
    if (!enabled || !this.isSupported()) return;
    try {
      navigator.vibrate(18);
    } catch (error) {
      console.warn('[HapticService] Erreur vibration tick:', error);
    }
  }

  public static vibrateMilestone(enabled: boolean): void {
    if (!enabled || !this.isSupported()) return;
    try {
      navigator.vibrate([40, 60, 40, 60, 100]);
    } catch (error) {
      console.warn('[HapticService] Erreur vibration milestone:', error);
    }
  }
}
