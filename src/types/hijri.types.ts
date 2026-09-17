/**
 * Informations et calculs du calendrier hégirien
 */

export interface HijriDateInfo {
  readonly day: number;
  readonly month: number;
  readonly year: number;
  readonly monthNameFr: string;
  readonly formattedString: string;
  /** Vrai si le jour correspond aux Jours Blancs (13, 14, 15 du mois lunaire) */
  readonly isWhiteDay: boolean;
  /** Vrai si aujourd'hui est un Lundi ou Jeudi (jeûne surérogatoire prophétique) */
  readonly isSunnahFastDay: boolean;
}
