/**
 * Thèmes graphiques supportés par l'application Dhikr Pro v2
 */

export type AppTheme = 'emerald' | 'medina' | 'kaaba' | 'oled';

export interface ThemeDefinition {
  readonly id: AppTheme;
  readonly name: string;
  readonly description: string;
  readonly primaryColor: string;
}

export const THEMES: ReadonlyArray<ThemeDefinition> = [
  {
    id: 'emerald',
    name: 'Émeraude Nuit',
    description: 'Thème sombre aux reflets émeraude et dorés',
    primaryColor: '#10b981'
  },
  {
    id: 'medina',
    name: 'Médine Jour',
    description: 'Thème clair apaisant et immaculé',
    primaryColor: '#059669'
  },
  {
    id: 'kaaba',
    name: 'Kaaba & Or',
    description: 'Noir profond orné d’or impérial',
    primaryColor: '#f59e0b'
  },
  {
    id: 'oled',
    name: 'Noir Pur OLED',
    description: 'Contraste absolu pour écrans AMOLED et économie d’énergie',
    primaryColor: '#10b981'
  }
];
