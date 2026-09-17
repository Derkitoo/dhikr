import confetti from 'canvas-confetti';

/**
 * Service de célébration visuelle lors de l'atteinte d'un objectif de dhikr.
 */
export class CelebrationService {
  public static triggerGoalCelebration(): void {
    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#10b981', '#fbbf24', '#34d399', '#ffffff']
      });
    } catch (error) {
      console.warn('[CelebrationService] Échec du déclenchement confetti:', error);
    }
  }
}
