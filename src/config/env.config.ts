/**
 * Configuration centralisée de l'application.
 * Lit les variables d'environnement Vite ou applique les valeurs par défaut sécurisées.
 */

export interface AppConfig {
  readonly title: string;
  readonly version: string;
  readonly storagePrefix: string;
  readonly baseUrl: string;
}

export const config: AppConfig = {
  title: import.meta.env.VITE_APP_TITLE || 'Dhikr Pro',
  version: import.meta.env.VITE_APP_VERSION || '2.0.0',
  storagePrefix: import.meta.env.VITE_STORAGE_PREFIX || 'dhikr_',
  baseUrl: import.meta.env.VITE_BASE_URL || 'https://derkitoo.github.io/dhikr/'
};
