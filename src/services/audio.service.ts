import type { AsyncState } from '../types/state.types';
import {
  createIdleState,
  createLoadingState,
  createSuccessState,
  createErrorState
} from '../types/state.types';

/**
 * Service audio complet pour :
 * 1. Le retour sonore (beeps Web Audio API lors du clic)
 * 2. La récitation vocale arabe/phonétique (Web Speech API)
 * 3. La gestion formelle des 3 états (loading, success, error)
 */
export class AudioService {
  private static audioCtx: AudioContext | null = null;
  private static speechState: AsyncState<string> = createIdleState();
  private static stateListeners: Array<(state: AsyncState<string>) => void> = [];

  private static getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        try {
          this.audioCtx = new AudioCtxClass();
        } catch (error) {
          console.warn('[AudioService] Impossible d’initialiser AudioContext:', error);
          this.audioCtx = null;
        }
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch((err) => {
        console.warn('[AudioService] Erreur lors de la reprise de AudioContext:', err);
      });
    }
    return this.audioCtx;
  }

  /**
   * Joue un son discret de perle de chapelet (Misbaha)
   */
  public static playBeep(enabled: boolean): void {
    if (!enabled) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(820, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch (error) {
      console.warn('[AudioService] Erreur lors de la lecture du beep:', error);
    }
  }

  /**
   * Synthèse vocale d'un texte avec gestion des 3 états
   */
  public static speakText(text: string): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        const error = new Error('La synthèse vocale n’est pas supportée par ce navigateur.');
        this.updateSpeechState(createErrorState(error));
        resolve();
        return;
      }

      this.updateSpeechState(createLoadingState(text));
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.88;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        this.updateSpeechState(createLoadingState(text));
      };

      utterance.onend = () => {
        this.updateSpeechState(createSuccessState(text));
        resolve();
      };

      utterance.onerror = (event) => {
        const error = new Error(`Erreur de synthèse vocale : ${event.error}`);
        this.updateSpeechState(createErrorState(error));
        resolve();
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Erreur de synthèse vocale');
        this.updateSpeechState(createErrorState(error));
        resolve();
      }
    });
  }

  public static stopSpeech(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (err) {
        console.warn('[AudioService] Erreur stopSpeech:', err);
      }
    }
    this.updateSpeechState(createIdleState());
  }

  public static getSpeechState(): AsyncState<string> {
    return this.speechState;
  }

  public static onSpeechStateChange(listener: (state: AsyncState<string>) => void): () => void {
    this.stateListeners.push(listener);
    listener(this.speechState);
    return () => {
      this.stateListeners = this.stateListeners.filter((l) => l !== listener);
    };
  }

  private static updateSpeechState(newState: AsyncState<string>): void {
    this.speechState = newState;
    for (const listener of this.stateListeners) {
      try {
        listener(this.speechState);
      } catch (err) {
        console.error('[AudioService] Erreur dans un auditeur de speechState:', err);
      }
    }
  }
}
