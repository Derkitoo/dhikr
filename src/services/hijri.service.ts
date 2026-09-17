import type { HijriDateInfo } from '../types/hijri.types';

const HIJRI_MONTHS_FR = [
  'Mouharram',
  'Safar',
  "Rabi' al-Awwal",
  "Rabi' ath-Thani",
  'Joumada al-Oula',
  'Joumada ath-Thania',
  'Rajab',
  "Cha'bane",
  'Ramadan',
  'Chawwal',
  "Dhou al-Qi'da",
  'Dhou al-Hijja'
] as const;

/**
 * Service de calcul du calendrier lunaire hégirien autonome et hors-ligne.
 * Détecte les Jours Blancs et les Jours de Jeûne prophétique (Lundis et Jeudis).
 */
export class HijriService {
  public static getTodayHijri(): HijriDateInfo {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Dimanche, 1 = Lundi, 4 = Jeudi

    // Algorithme astronomique civil standard basé sur la date julienne
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    let m = month + 1;
    let y = year;
    if (m < 3) {
      y -= 1;
      m += 12;
    }

    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    const jd =
      Math.floor(365.25 * (y + 4716)) +
      Math.floor(30.6001 * (m + 1)) +
      day +
      b -
      1524;

    const epochJulian = 1948439.5;
    const daysSinceEpoch = jd - epochJulian;
    const hijriYear = Math.floor((30 * daysSinceEpoch + 10646) / 10631);
    const monthDays =
      daysSinceEpoch -
      Math.floor((10631 * hijriYear - 10646) / 30);
    const hijriMonth = Math.min(12, Math.max(1, Math.ceil(monthDays / 29.5)));
    const prevMonthDays = Math.floor((hijriMonth - 1) * 29.5);
    let hijriDay = Math.floor(monthDays - prevMonthDays) + 1;

    if (hijriDay < 1) hijriDay = 1;
    if (hijriDay > 30) hijriDay = 30;

    const monthIndex = Math.min(11, Math.max(0, hijriMonth - 1));
    const monthNameFr = HIJRI_MONTHS_FR[monthIndex] || 'Mois Hégirien';

    const isWhiteDay = hijriDay === 13 || hijriDay === 14 || hijriDay === 15;
    const isSunnahFastDay = dayOfWeek === 1 || dayOfWeek === 4;

    return {
      day: hijriDay,
      month: hijriMonth,
      year: hijriYear,
      monthNameFr,
      formattedString: `${hijriDay} ${monthNameFr} ${hijriYear}`,
      isWhiteDay,
      isSunnahFastDay
    };
  }
}
