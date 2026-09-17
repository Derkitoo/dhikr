/**
 * Modèle strict pour les 99 Noms d'Allah (Asma' Allah Al-Husna)
 * avec preuves authentiques du Saint Coran et de la Sunnah prophétique.
 */

export interface QuranPassage {
  /** Texte du verset en arabe vocalisé */
  readonly arabic: string;
  /** Traduction et sens du verset en français */
  readonly translation: string;
  /** Référence précise : Sourate et verset (ex: Sourate Al-Hashr, 59:23) */
  readonly surah: string;
}

export interface HadithPassage {
  /** Texte du Hadith en français */
  readonly text: string;
  /** Référence de la source authentique (ex: Sahih Al-Bukhari n°2736, Sahih Muslim n°2677) */
  readonly source: string;
}

export interface AllahDivineName {
  /** Numéro d'ordre (1 à 99) */
  readonly n: number;
  /** Nom en calligraphie arabe vocalisée */
  readonly a: string;
  /** Translittération phonétique standard */
  readonly p: string;
  /** Traduction et sens bref en français */
  readonly f: string;
  /** Synthèse méditative courte */
  readonly m: string;
  /** Explication linguistique et théologique approfondie */
  readonly detailedMeaning: string;
  /** Passage coranique attestant ce Nom divin */
  readonly quran: QuranPassage;
  /** Hadith authentique issu de la Sunnah */
  readonly hadith: HadithPassage;
}

