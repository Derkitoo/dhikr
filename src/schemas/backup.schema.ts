import { z } from 'zod';

const dhikrItemSchema = z.object({
  id: z.string().min(1),
  french: z.string().min(1),
  arabic: z.string().optional(),
  phonetic: z.string().optional(),
  translation: z.string().optional(),
  merit: z.string().optional(),
  target: z.number().int().positive(),
  targetLabel: z.string().optional(),
  category: z.enum(['daily', 'morning_evening', 'prayer', 'sleep', 'custom']),
  audioUrl: z.string().optional()
});

/**
 * Schéma Zod strict pour la validation des données d'importation JSON.
 * Bloque formellement toute donnée corrompue ou injectée.
 */
export const backupDataSchema = z.object({
  version: z.string().optional(),
  exportedAt: z.string().optional(),
  dailyCounts: z.record(z.string(), z.number().int().nonnegative()),
  lifetimeCounts: z.record(z.string(), z.number().int().nonnegative()),
  favorites: z.array(z.string()),
  historyDays: z.record(z.string(), z.number().int().nonnegative()).optional().default({}),
  streak: z.number().int().nonnegative().optional().default(1),
  theme: z.enum(['emerald', 'medina', 'kaaba', 'oled']).optional().default('emerald'),
  customDhikrs: z.array(dhikrItemSchema).optional().default([])
});

export type ValidatedBackupData = z.infer<typeof backupDataSchema>;
