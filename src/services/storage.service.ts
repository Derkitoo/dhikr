import { config } from '../config/env.config';
import type { DailyCountsMap, LifetimeCountsMap, DayHistoryMap, DhikrItem } from '../types/dhikr.types';
import type { AppTheme } from '../types/theme.types';
import { backupDataSchema, type ValidatedBackupData } from '../schemas/backup.schema';

/**
 * Service gérant les opérations I/O sur le stockage local (localStorage).
 * Aucune erreur silencieuse : toute exception I/O est capturée et signalée.
 */
export class StorageService {
  private static getKey(key: string): string {
    return `${config.storagePrefix}${key}`;
  }

  public static getDailyCounts(): DailyCountsMap {
    try {
      const raw = localStorage.getItem(this.getKey('daily'));
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (typeof parsed === 'object' && parsed !== null) {
        return parsed as DailyCountsMap;
      }
      return {};
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture des dailyCounts:', error);
      return {};
    }
  }

  public static saveDailyCounts(counts: DailyCountsMap): boolean {
    try {
      localStorage.setItem(this.getKey('daily'), JSON.stringify(counts));
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde des dailyCounts:', error);
      return false;
    }
  }

  public static getLifetimeCounts(): LifetimeCountsMap {
    try {
      const raw = localStorage.getItem(this.getKey('lifetime'));
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (typeof parsed === 'object' && parsed !== null) {
        return parsed as LifetimeCountsMap;
      }
      return {};
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture des lifetimeCounts:', error);
      return {};
    }
  }

  public static saveLifetimeCounts(counts: LifetimeCountsMap): boolean {
    try {
      localStorage.setItem(this.getKey('lifetime'), JSON.stringify(counts));
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde des lifetimeCounts:', error);
      return false;
    }
  }

  public static getFavorites(): string[] {
    try {
      const raw = localStorage.getItem(this.getKey('favorites'));
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture des favorites:', error);
      return [];
    }
  }

  public static saveFavorites(favorites: string[]): boolean {
    try {
      localStorage.setItem(this.getKey('favorites'), JSON.stringify(favorites));
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde des favorites:', error);
      return false;
    }
  }

  public static getCustomDhikrs(): DhikrItem[] {
    try {
      const raw = localStorage.getItem(this.getKey('custom'));
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as DhikrItem[]) : [];
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture des customDhikrs:', error);
      return [];
    }
  }

  public static saveCustomDhikrs(items: ReadonlyArray<DhikrItem>): boolean {
    try {
      localStorage.setItem(this.getKey('custom'), JSON.stringify(items));
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde des customDhikrs:', error);
      return false;
    }
  }

  public static getHistoryDays(): DayHistoryMap {
    try {
      const raw = localStorage.getItem(this.getKey('history_days'));
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return typeof parsed === 'object' && parsed !== null ? (parsed as DayHistoryMap) : {};
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture des historyDays:', error);
      return {};
    }
  }

  public static saveHistoryDays(history: DayHistoryMap): boolean {
    try {
      localStorage.setItem(this.getKey('history_days'), JSON.stringify(history));
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde des historyDays:', error);
      return false;
    }
  }

  public static getStreak(): number {
    try {
      const val = localStorage.getItem(this.getKey('streak'));
      return val ? parseInt(val, 10) || 1 : 1;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture du streak:', error);
      return 1;
    }
  }

  public static saveStreak(streak: number): boolean {
    try {
      localStorage.setItem(this.getKey('streak'), streak.toString());
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde du streak:', error);
      return false;
    }
  }

  public static getLastActiveDate(): string | null {
    try {
      return localStorage.getItem(this.getKey('last_date'));
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture de lastActiveDate:', error);
      return null;
    }
  }

  public static saveLastActiveDate(dateStr: string): boolean {
    try {
      localStorage.setItem(this.getKey('last_date'), dateStr);
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde de lastActiveDate:', error);
      return false;
    }
  }

  public static getTheme(): AppTheme {
    try {
      const theme = localStorage.getItem(this.getKey('theme'));
      if (theme === 'emerald' || theme === 'medina' || theme === 'kaaba' || theme === 'oled') {
        return theme;
      }
      return 'emerald';
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture du theme:', error);
      return 'emerald';
    }
  }

  public static saveTheme(theme: AppTheme): boolean {
    try {
      localStorage.setItem(this.getKey('theme'), theme);
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde du theme:', error);
      return false;
    }
  }

  public static getSoundEnabled(): boolean {
    try {
      return localStorage.getItem(this.getKey('sound')) !== 'false';
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture du son:', error);
      return true;
    }
  }

  public static saveSoundEnabled(enabled: boolean): boolean {
    try {
      localStorage.setItem(this.getKey('sound'), enabled ? 'true' : 'false');
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde du son:', error);
      return false;
    }
  }

  public static getHapticEnabled(): boolean {
    try {
      return localStorage.getItem(this.getKey('haptic')) !== 'false';
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture haptique:', error);
      return true;
    }
  }

  public static saveHapticEnabled(enabled: boolean): boolean {
    try {
      localStorage.setItem(this.getKey('haptic'), enabled ? 'true' : 'false');
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde haptique:', error);
      return false;
    }
  }

  public static getAutoDelay(): number {
    try {
      const raw = localStorage.getItem(this.getKey('auto_delay'));
      return raw ? parseInt(raw, 10) || 2000 : 2000;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la lecture du délai auto:', error);
      return 2000;
    }
  }

  public static saveAutoDelay(ms: number): boolean {
    try {
      localStorage.setItem(this.getKey('auto_delay'), ms.toString());
      return true;
    } catch (error) {
      console.error('[StorageService] Erreur lors de la sauvegarde du délai auto:', error);
      return false;
    }
  }

  /**
   * Valide et importe une sauvegarde JSON en s'assurant de la conformité du schéma Zod.
   */
  public static validateAndParseBackup(jsonString: string): ValidatedBackupData {
    let rawObj: unknown;
    try {
      rawObj = JSON.parse(jsonString);
    } catch (parseError) {
      throw new Error("Le fichier fourni n'est pas un JSON valide.");
    }
    const result = backupDataSchema.safeParse(rawObj);
    if (!result.success) {
      const messages = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw new Error(`Format de sauvegarde invalide : ${messages}`);
    }
    return result.data;
  }
}
