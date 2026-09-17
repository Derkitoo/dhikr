import { z } from 'zod';

/**
 * Schéma Zod pour la création et la modification d'invocations personnalisées.
 * Valide strictement toutes les entrées utilisateurs.
 */
export const dhikrInputSchema = z.object({
  french: z
    .string()
    .trim()
    .min(2, "Le nom de l'invocation doit comporter au moins 2 caractères.")
    .max(120, "Le nom de l'invocation ne doit pas dépasser 120 caractères."),
  arabic: z
    .string()
    .trim()
    .max(1000, 'Le texte arabe ne doit pas dépasser 1000 caractères.')
    .optional()
    .or(z.literal('')),
  phonetic: z
    .string()
    .trim()
    .max(1000, 'La phonétique ne doit pas dépasser 1000 caractères.')
    .optional()
    .or(z.literal('')),
  translation: z
    .string()
    .trim()
    .max(1000, 'La traduction ne doit pas dépasser 1000 caractères.')
    .optional()
    .or(z.literal('')),
  target: z
    .number({ invalid_type_error: "L'objectif de répétition doit être un nombre." })
    .int("L'objectif doit être un entier.")
    .min(1, "L'objectif doit être d'au moins 1 répétition.")
    .max(10000, "L'objectif ne peut pas dépasser 10 000 répétitions."),
  category: z.enum(['daily', 'morning_evening', 'prayer', 'sleep', 'custom'], {
    errorMap: () => ({ message: 'Catégorie sélectionnée invalide.' })
  })
});

export type DhikrInput = z.infer<typeof dhikrInputSchema>;
