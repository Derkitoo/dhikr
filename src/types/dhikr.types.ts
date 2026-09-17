import type { AppTheme } from './theme.types';

/**
 * Catégories d'invocations disponibles
 */
export type DhikrCategory =
  | 'all'
  | 'daily'
  | 'morning_evening'
  | 'prayer'
  | 'sleep'
  | 'favorites'
  | 'custom';

/**
 * Modèle strict d'un Dhikr / Invocation
 */
export interface DhikrItem {
  readonly id: string;
  readonly french: string;
  readonly arabic?: string;
  readonly phonetic?: string;
  readonly translation?: string;
  readonly merit?: string;
  readonly target: number;
  readonly targetLabel?: string;
  readonly category: Exclude<DhikrCategory, 'all' | 'favorites'>;
  readonly audioUrl?: string;
}

/**
 * Dictionnaires de suivi des répétitions
 */
export type DailyCountsMap = Record<string, number>;
export type LifetimeCountsMap = Record<string, number>;
export type DayHistoryMap = Record<string, number>;

/**
 * Données d'exportation et de restauration
 */
export interface BackupData {
  readonly version?: string;
  readonly exportedAt?: string;
  readonly dailyCounts: DailyCountsMap;
  readonly lifetimeCounts: LifetimeCountsMap;
  readonly favorites: ReadonlyArray<string>;
  readonly historyDays: DayHistoryMap;
  readonly streak: number;
  readonly theme: AppTheme;
  readonly customDhikrs: ReadonlyArray<DhikrItem>;
}
