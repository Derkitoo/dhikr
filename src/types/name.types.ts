/**
 * Modèle strict pour les 99 Noms d'Allah (Asma' Allah Al-Husna)
 */

export interface AllahDivineName {
  /** Numéro d'ordre (1 à 99) */
  readonly n: number;
  /** Nom en calligraphie arabe vocalisée */
  readonly a: string;
  /** Translittération phonétique standard */
  readonly p: string;
  /** Traduction et sens en français */
  readonly f: string;
  /** Explication et méditation théologique du Nom */
  readonly m: string;
}
