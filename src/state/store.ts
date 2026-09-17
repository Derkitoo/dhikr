import type {
  DhikrItem,
  DhikrCategory,
  DailyCountsMap,
  LifetimeCountsMap,
  DayHistoryMap,
  BackupData
} from '../types/dhikr.types';
import type { AppTheme } from '../types/theme.types';
import { DEFAULT_ADHKARS } from '../data/default-adhkars';
import { StorageService } from '../services/storage.service';
import { HapticService } from '../services/haptic.service';
import { AudioService } from '../services/audio.service';
import { CelebrationService } from '../services/celebration.service';

export type StoreListener = () => void;

/**
 * Store centralisé gérant l'état global réactif de l'application.
 */
export class AppStore {
  private static instance: AppStore;

  public adhkars: DhikrItem[] = [];
  public dailyCounts: DailyCountsMap = {};
  public lifetimeCounts: LifetimeCountsMap = {};
  public favorites: string[] = [];
  public historyDays: DayHistoryMap = {};
  public streak: number = 1;
  public lastActiveDate: string | null = null;
  public currentCategory: DhikrCategory = 'all';
  public searchQuery: string = '';
  public theme: AppTheme = 'emerald';
  public soundEnabled: boolean = true;
  public hapticEnabled: boolean = true;
  public autoDelayMs: number = 2000;

  private listeners: StoreListener[] = [];

  private constructor() {
    this.init();
  }

  public static getInstance(): AppStore {
    if (!AppStore.instance) {
      AppStore.instance = new AppStore();
    }
    return AppStore.instance;
  }

  private init(): void {
    this.theme = StorageService.getTheme();
    this.soundEnabled = StorageService.getSoundEnabled();
    this.hapticEnabled = StorageService.getHapticEnabled();
    this.autoDelayMs = StorageService.getAutoDelay();

    const customDhikrs = StorageService.getCustomDhikrs();
    this.adhkars = [...DEFAULT_ADHKARS, ...customDhikrs];

    this.dailyCounts = StorageService.getDailyCounts();
    this.lifetimeCounts = StorageService.getLifetimeCounts();
    this.favorites = StorageService.getFavorites();
    this.historyDays = StorageService.getHistoryDays();
    this.streak = StorageService.getStreak();
    this.lastActiveDate = StorageService.getLastActiveDate();

    this.checkDailyReset();

    // S'assurer que chaque dhikr a ses clés initialisées
    for (const d of this.adhkars) {
      if (this.dailyCounts[d.id] === undefined) this.dailyCounts[d.id] = 0;
      if (this.lifetimeCounts[d.id] === undefined) this.lifetimeCounts[d.id] = 0;
    }
  }

  public subscribe(listener: StoreListener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  public notify(): void {
    for (const listener of this.listeners) {
      try {
        listener();
      } catch (err) {
        console.error('[AppStore] Erreur dans un auditeur de store:', err);
      }
    }
  }

  private checkDailyReset(): void {
    const today = new Date().toISOString().slice(0, 10);

    if (this.lastActiveDate && this.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yDateStr = yesterday.toISOString().slice(0, 10);

      const yesterdayTotal = Object.values(this.dailyCounts).reduce((a, b) => a + b, 0);
      if (yesterdayTotal > 0) {
        this.historyDays[this.lastActiveDate] = yesterdayTotal;
      }

      if (this.lastActiveDate === yDateStr && yesterdayTotal > 0) {
        this.streak += 1;
      } else if (this.lastActiveDate !== yDateStr) {
        this.streak = 1;
      }

      this.dailyCounts = {};
    } else if (!this.lastActiveDate) {
      this.streak = 1;
    }

    this.lastActiveDate = today;
    StorageService.saveLastActiveDate(this.lastActiveDate);
    StorageService.saveStreak(this.streak);
    StorageService.saveHistoryDays(this.historyDays);
  }

  public increment(id: string): { isMilestone: boolean; count: number; target: number } {
    const current = this.dailyCounts[id] || 0;
    const next = current + 1;
    this.dailyCounts[id] = next;
    this.lifetimeCounts[id] = (this.lifetimeCounts[id] || 0) + 1;

    const dhikr = this.adhkars.find((d) => d.id === id);
    const target = dhikr?.target || 100;
    const isMilestone = next % target === 0 && next > 0;

    AudioService.playBeep(this.soundEnabled);
    if (isMilestone) {
      HapticService.vibrateMilestone(this.hapticEnabled);
      CelebrationService.triggerGoalCelebration();
    } else {
      HapticService.vibrateTick(this.hapticEnabled);
    }

    this.persist();
    this.notify();

    return { isMilestone, count: next, target };
  }

  public resetDhikr(id: string): void {
    this.dailyCounts[id] = 0;
    this.persist();
    this.notify();
  }

  public resetAllDaily(): void {
    this.dailyCounts = {};
    for (const d of this.adhkars) {
      this.dailyCounts[d.id] = 0;
    }
    this.persist();
    this.notify();
  }

  public toggleFavorite(id: string): boolean {
    const isFav = this.favorites.includes(id);
    if (isFav) {
      this.favorites = this.favorites.filter((f) => f !== id);
    } else {
      this.favorites.push(id);
    }
    StorageService.saveFavorites(this.favorites);
    this.notify();
    return !isFav;
  }

  public setCategory(cat: DhikrCategory): void {
    this.currentCategory = cat;
    this.notify();
  }

  public setSearchQuery(query: string): void {
    this.searchQuery = query.trim().toLowerCase();
    this.notify();
  }

  public setTheme(newTheme: AppTheme): void {
    this.theme = newTheme;
    StorageService.saveTheme(newTheme);
    this.notify();
  }

  public toggleSound(): boolean {
    this.soundEnabled = !this.soundEnabled;
    StorageService.saveSoundEnabled(this.soundEnabled);
    this.notify();
    return this.soundEnabled;
  }

  public setHaptic(enabled: boolean): void {
    this.hapticEnabled = enabled;
    StorageService.saveHapticEnabled(enabled);
    this.notify();
  }

  public setAutoDelay(ms: number): void {
    this.autoDelayMs = ms;
    StorageService.saveAutoDelay(ms);
    this.notify();
  }

  public addOrUpdateCustomDhikr(dhikr: DhikrItem): void {
    const existingIndex = this.adhkars.findIndex((d) => d.id === dhikr.id);
    if (existingIndex >= 0) {
      this.adhkars[existingIndex] = dhikr;
    } else {
      this.adhkars.push(dhikr);
      if (this.dailyCounts[dhikr.id] === undefined) this.dailyCounts[dhikr.id] = 0;
      if (this.lifetimeCounts[dhikr.id] === undefined) this.lifetimeCounts[dhikr.id] = 0;
    }
    this.persistCustomDhikrs();
    this.persist();
    this.notify();
  }

  public deleteCustomDhikr(id: string): void {
    this.adhkars = this.adhkars.filter((d) => d.id !== id);
    this.favorites = this.favorites.filter((f) => f !== id);
    delete this.dailyCounts[id];
    delete this.lifetimeCounts[id];

    this.persistCustomDhikrs();
    StorageService.saveFavorites(this.favorites);
    this.persist();
    this.notify();
  }

  public importBackup(data: BackupData): void {
    this.dailyCounts = { ...data.dailyCounts };
    this.lifetimeCounts = { ...data.lifetimeCounts };
    this.favorites = [...data.favorites];
    this.historyDays = { ...data.historyDays };
    this.streak = data.streak;
    this.theme = data.theme;

    // Fusion des dhikrs par défaut et personnalisés
    const customItems = data.customDhikrs || [];
    this.adhkars = [...DEFAULT_ADHKARS, ...customItems];

    for (const d of this.adhkars) {
      if (this.dailyCounts[d.id] === undefined) this.dailyCounts[d.id] = 0;
      if (this.lifetimeCounts[d.id] === undefined) this.lifetimeCounts[d.id] = 0;
    }

    StorageService.saveTheme(this.theme);
    StorageService.saveStreak(this.streak);
    StorageService.saveFavorites(this.favorites);
    this.persistCustomDhikrs();
    this.persist();
    this.notify();
  }

  public exportBackup(): BackupData {
    return {
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      dailyCounts: this.dailyCounts,
      lifetimeCounts: this.lifetimeCounts,
      favorites: this.favorites,
      historyDays: this.historyDays,
      streak: this.streak,
      theme: this.theme,
      customDhikrs: this.adhkars.filter((d) => d.id.startsWith('custom_'))
    };
  }

  public getFilteredDhikrs(): DhikrItem[] {
    return this.adhkars.filter((d) => {
      if (this.currentCategory === 'favorites') {
        if (!this.favorites.includes(d.id)) return false;
      } else if (this.currentCategory === 'custom') {
        if (!d.id.startsWith('custom_')) return false;
      } else if (this.currentCategory !== 'all') {
        if (d.category !== this.currentCategory) return false;
      }

      if (this.searchQuery) {
        const haystack = `${d.french} ${d.arabic || ''} ${d.phonetic || ''} ${d.translation || ''}`.toLowerCase();
        if (!haystack.includes(this.searchQuery)) return false;
      }

      return true;
    });
  }

  public getCategoryCounts(): Record<DhikrCategory, number> {
    return {
      all: this.adhkars.length,
      daily: this.adhkars.filter((d) => d.category === 'daily').length,
      morning_evening: this.adhkars.filter((d) => d.category === 'morning_evening').length,
      prayer: this.adhkars.filter((d) => d.category === 'prayer').length,
      sleep: this.adhkars.filter((d) => d.category === 'sleep').length,
      favorites: this.favorites.length,
      custom: this.adhkars.filter((d) => d.id.startsWith('custom_')).length
    };
  }

  public getTodayTotal(): number {
    return Object.values(this.dailyCounts).reduce((a, b) => a + b, 0);
  }

  public getLifetimeTotal(): number {
    return Object.values(this.lifetimeCounts).reduce((a, b) => a + b, 0);
  }

  private persistCustomDhikrs(): void {
    const customOnly = this.adhkars.filter((d) => d.id.startsWith('custom_'));
    StorageService.saveCustomDhikrs(customOnly);
  }

  private persist(): void {
    StorageService.saveDailyCounts(this.dailyCounts);
    StorageService.saveLifetimeCounts(this.lifetimeCounts);

    const today = new Date().toISOString().slice(0, 10);
    this.historyDays[today] = this.getTodayTotal();
    StorageService.saveHistoryDays(this.historyDays);
  }
}
