const nt = [
  // --- Quotidien & Fondamentaux ---
  {
    id: "salawat",
    category: "daily",
    arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
    french: "Prière sur le Prophète",
    phonetic: "Allahumma salli wa sallim wa barik 'ala nabiyyina Muhammad",
    translation: "Ô Allah, répands Tes éloges, Ton salut et Tes bénédictions sur notre Prophète Muhammad.",
    merit: "« Celui qui prie sur moi une fois, Allah priera sur lui dix fois. » (Muslim)",
    target: 10,
    targetLabel: "Boucle de 10"
  },
  {
    id: "istighfar",
    category: "daily",
    arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    french: "Demande de pardon (Istighfar)",
    phonetic: "Astaghfiru-llaha wa atubu ilayh",
    translation: "Je demande pardon à Allah et je me repens auprès de Lui.",
    merit: "« Par Allah ! Je demande pardon à Allah et me repens plus de 70 fois par jour. » (Bukhari)",
    target: 100,
    targetLabel: "Boucle de 100"
  },
  {
    id: "subhanallahi_wa_bihamdih_100",
    category: "daily",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    french: "Gloire et Louange à Allah (100x)",
    phonetic: "Subhanallahi wa bi-hamdih",
    translation: "Gloire et louange à Allah.",
    merit: "« Celui qui la répète 100 fois par jour, ses péchés sont effacés même s'ils étaient semblables à l'écume de la mer. » (Bukhari & Muslim)",
    target: 100,
    targetLabel: "Boucle de 100"
  },
  {
    id: "tahlil",
    category: "daily",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    french: "L'Unicité Suprême (Tahlil)",
    phonetic: "La ilaha illa-llahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in qadir",
    translation: "Il n'y a de divinité digne d'adoration qu'Allah, Seul, sans associé. À Lui la royauté et la louange, et Il est Omnipotent.",
    merit: "Équivaut à affranchir 10 esclaves, accorde 100 bienfaits et protège contre le diable. (Bukhari)",
    target: 100,
    targetLabel: "Boucle de 100"
  },
  {
    id: "hawqala",
    category: "daily",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    french: "La Hawqala (Secours en Allah)",
    phonetic: "La hawla wa la quwwata illa billahil-'Aliyyil-'Azim",
    translation: "Il n'y a de force ni de puissance que par Allah, le Très-Haut, le Tout-Puissant.",
    merit: "« L'un des trésors du Paradis. » (Bukhari & Muslim)",
    target: 100,
    targetLabel: "Boucle de 100"
  },
  {
    id: "yunus",
    category: "daily",
    arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    french: "Invocation de Jonas (Dua Yunus)",
    phonetic: "La ilaha illa Anta subhanaka inni kuntu minadh-dhalimin",
    translation: "Il n'y a pas d'autre divinité que Toi ! Gloire et pureté à Toi ! J'ai vraiment été parmi les injustes.",
    merit: "Aucun croyant n'invoque par ces mots sans qu'Allah ne dissipe sa détresse. (Tirmidhi)",
    target: 100,
    targetLabel: "Boucle de 100"
  },
  // --- Matin & Soir (Adhkar As-Sabah wal-Masaa) ---
  {
    id: "sayyid_istighfar",
    category: "morning_evening",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    french: "Le Maître du Repentir (Sayyidul Istighfar)",
    phonetic: "Allahumma Anta Rabbi la ilaha illa Ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika ma-stata't...",
    translation: "Ô Allah, Tu es mon Seigneur, nul dieu digne d'adoration sauf Toi. Tu m'as créé et je suis Ton serviteur...",
    merit: "Celui qui la récite le matin ou le soir avec conviction et meurt fera partie des gens du Paradis. (Bukhari)",
    target: 1,
    targetLabel: "1x Matin et Soir"
  },
  {
    id: "protection_matin_soir",
    category: "morning_evening",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    french: "Protection Suprême (3x)",
    phonetic: "Bismillahi-lladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim",
    translation: "Au nom d'Allah dont le Nom empêche toute chose de nuire sur terre et dans le ciel, et Il est l'Audient, l'Omniscient.",
    merit: "Répétée 3 fois matin et soir : rien ne pourra nuire à celui qui la prononce. (Abu Dawud & Tirmidhi)",
    target: 3,
    targetLabel: "3x Matin et Soir"
  },
  {
    id: "raditu_billah",
    category: "morning_evening",
    arabic: "رَضِيتُ بِاللَّهِ رَبّاً، وَبِالْإِسْلَامِ دِيناً، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيّاً",
    french: "L'agrément d'Allah (3x)",
    phonetic: "Raditu billahi Rabban, wa bil-Islami dinan, wa bi-Muhammadin sallallahu 'alayhi wa sallama Nabiyya",
    translation: "J'agrée Allah comme Seigneur, l'Islam comme religion et Muhammad ﷺ comme Prophète.",
    merit: "« Celui qui la répète 3 fois matin et soir, Allah Se fait un devoir de le satisfaire le Jour de la Résurrection. » (Abu Dawud n° 5072)",
    target: 3,
    targetLabel: "3x Matin et Soir"
  },
  {
    id: "audhu_bikalimatillah",
    category: "morning_evening",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    french: "Refuge auprès des Paroles d'Allah (3x)",
    phonetic: "A'udhu bi-kalimatillahi t-tammati min sharri ma khalaq",
    translation: "Je cherche refuge auprès des Paroles parfaites d'Allah contre le mal de ce qu'Il a créé.",
    merit: "« Celui qui la dit le soir 3 fois, rien ne lui nuira au cours de la nuit. » (Muslim n° 2709)",
    target: 3,
    targetLabel: "3x le Soir"
  },
  {
    id: "ya_hayyu_ya_qayyum",
    category: "morning_evening",
    arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
    french: "L'appel au Secours Divin",
    phonetic: "Ya Hayyu ya Qayyumu bi-rahmatika astaghith, aslih li sha'ni kullah, wa la takilni ila nafsi tarfata 'ayn",
    translation: "Ô Vivant, Ô Toi qui subsistes par Toi-même, par Ta miséricorde j'implore secours. Réforme toutes mes affaires et ne m'abandonne pas à moi-même le temps d'un clin d'œil.",
    merit: "Enseignée par le Prophète ﷺ à sa fille Fatima pour le matin et le soir. (An-Nasa'i & Al-Hakim, Sahih)",
    target: 1,
    targetLabel: "1x Matin et Soir"
  },
  {
    id: "hasbiyallahu",
    category: "morning_evening",
    arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
    french: "La Suffisance en Allah (7x)",
    phonetic: "Hasbiyallahu la ilaha illa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azim",
    translation: "Allah me suffit ! Nul dieu digne d'adoration sauf Lui. En Lui je place ma confiance et Il est le Seigneur du Trône Immense.",
    merit: "« Celui qui la dit 7 fois matin et soir, Allah lui suffira face à tout ce qui le préoccupe ici-bas et dans l'au-delà. » (Abu Dawud n° 5081)",
    target: 7,
    targetLabel: "7x Matin et Soir"
  },
  {
    id: "subhanallahi_adada_khalqihi",
    category: "morning_evening",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
    french: "La formule au poids immense (3x)",
    phonetic: "Subhanallahi wa bi-hamdih: 'adada khalqih, wa rida nafsih, wa zinata 'arshih, wa midada kalimatih",
    translation: "Gloire et louange à Allah, autant de fois qu'il y a de créatures, autant qu'Il Lui plaît, du poids de Son Trône et de l'encre de Ses paroles.",
    merit: "Le Prophète ﷺ indiqua qu'elle pèse plus lourd dans la balance que des heures de rappel consécutives. (Muslim n° 2726)",
    target: 3,
    targetLabel: "3x le Matin"
  },
  // --- Après la Prière (Post-Prière) ---
  {
    id: "astaghfirullah_post_salat",
    category: "prayer",
    arabic: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    french: "As-Salam après la Prière",
    phonetic: "Astaghfirullah (3x), Allahumma Antas-Salamu wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram",
    translation: "Je demande pardon à Allah (3x). Ô Allah, Tu es la Paix et de Toi provient la paix. Béni sois-Tu, Ô Détenteur de Majesté et de Générosité.",
    merit: "L'invocation exacte récitée par le Prophète ﷺ dès la fin de chaque salât obligatoire. (Muslim n° 591)",
    target: 1,
    targetLabel: "Dès la fin de la Salât"
  },
  {
    id: "tasbih_salat",
    category: "prayer",
    arabic: "سُبْحَانَ اللَّهِ • الحَمْدُ لِلَّهِ • اللَّهُ أَكْبَرُ",
    french: "Tasbih post-prière (33x)",
    phonetic: "Subhanallah (33x) - Alhamdulillah (33x) - Allahu Akbar (33x)",
    translation: "Gloire et pureté à Allah • Louange à Allah • Allah est le Plus Grand.",
    merit: "Pardonne les péchés même s'ils égalaient l'écume de la mer. (Muslim n° 597)",
    target: 33,
    targetLabel: "33 après la prière"
  },
  {
    id: "dua_muadh_post_salat",
    category: "prayer",
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ",
    french: "Invocation enseignée à Mu'adh",
    phonetic: "Allahumma a'inni 'ala dhikrika, wa shukrika, wa husni 'ibadatik",
    translation: "Ô Allah, aide-moi à Te mentionner, à Te remercier et à T'adorer de la meilleure manière.",
    merit: "Le Prophète ﷺ dit : « Ô Mu'adh, par Allah je t'aime ! Ne manque pas de dire après chaque prière... » (Abu Dawud n° 1522)",
    target: 1,
    targetLabel: "1x après chaque prière"
  },
  {
    id: "ayat_kursi",
    category: "prayer",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    french: "Verset du Trône (Ayat Al-Kursi)",
    phonetic: "Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wa la nawm...",
    translation: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent...",
    merit: "« Celui qui la récite après chaque prière obligatoire, rien ne l'empêche d'entrer au Paradis sauf la mort. » (An-Nasa'i, Sahih)",
    target: 1,
    targetLabel: "1x après chaque prière"
  },
  // --- Circonstances de la Vie Quotidienne ---
  {
    id: "khuruj_manzil",
    category: "daily",
    arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    french: "Sortie de la maison (Al-Khuruj)",
    phonetic: "Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah",
    translation: "Au nom d'Allah, je place ma confiance en Allah, et il n'y a de force ni de puissance que par Allah.",
    merit: "« Il lui est dit : Tu es guidé, pourvu et protégé, et le diable s'écarte de lui. » (Abu Dawud n° 5095 & Tirmidhi)",
    target: 1,
    targetLabel: "1x à la sortie"
  },
  {
    id: "dua_karb",
    category: "daily",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
    french: "Face à l'angoisse et la détresse (Du'a al-Karb)",
    phonetic: "La ilaha illallahul-'Azimul-Halim, la ilaha illallahu Rabbul-'Arshil-'Azim, la ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-'Arshil-Karim",
    translation: "Nul dieu digne d'adoration qu'Allah, l'Immense, le Magnanime. Nul dieu digne d'adoration qu'Allah, Seigneur du Trône Immense. Nul dieu digne d'adoration qu'Allah, Seigneur des cieux, de la terre et du Noble Trône.",
    merit: "L'invocation prophétique en cas de souci intense ou de détresse. (Bukhari n° 6345 & Muslim n° 2730)",
    target: 1,
    targetLabel: "En cas d'épreuve"
  },
  {
    id: "kaffarat_majlis",
    category: "daily",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    french: "Expiation de l'assemblée (Kaffarat al-Majlis)",
    phonetic: "Subhanakallahumma wa bi-hamdika, ash-hadu an la ilaha illa Anta, astaghfiruka wa atubu ilayk",
    translation: "Gloire et pureté à Toi Ô Allah et louange à Toi. J'atteste qu'il n'y a de divinité que Toi, je Te demande pardon et me repens à Toi.",
    merit: "« Elle expie tout ce qui a pu être prononcé au cours de l'assise avant de se lever. » (Tirmidhi n° 3433)",
    target: 1,
    targetLabel: "Fin de réunion / assise"
  },
  // --- Sommeil & Réveil ---
  {
    id: "nawm_janbi",
    category: "sleep",
    arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
    french: "Avant de dormir (An-Nawm)",
    phonetic: "Bismika Rabbi wada'tu janbi wa bika arfa'uh, fa-in amsakta nafsi farhamha, wa in arsaltaha fahfaz-ha bima tahfazu bihi 'ibadakas-salihin",
    translation: "En Ton Nom mon Seigneur j'ai posé mon flanc et par Toi je le relève. Si Tu retiens mon âme, fais-lui miséricorde, et si Tu la renvoies, protège-la comme Tu protèges Tes serviteurs vertueux.",
    merit: "Invocation au coucher recommandée par le Messager d'Allah ﷺ. (Bukhari n° 6320 & Muslim n° 2714)",
    target: 1,
    targetLabel: "1x au coucher"
  },
  {
    id: "istiqadh_ahyana",
    category: "sleep",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    french: "Invocation au réveil (Al-Istiqadh)",
    phonetic: "Al-hamdu lillahilladhi ahyana ba'da ma amatana wa ilayhin-nushur",
    translation: "Louange à Allah qui nous a rendu la vie après nous avoir fait mourir, et c'est vers Lui que se fera la Résurrection.",
    merit: "Récitée par le Prophète ﷺ dès son réveil. (Bukhari n° 6312 & Muslim n° 2711)",
    target: 1,
    targetLabel: "1x au réveil"
  }
], Jt = {
  storagePrefix: "dhikr_"
};
var I;
(function(s) {
  s.assertEqual = (r) => {
  };
  function e(r) {
  }
  s.assertIs = e;
  function t(r) {
    throw new Error();
  }
  s.assertNever = t, s.arrayToEnum = (r) => {
    const i = {};
    for (const o of r)
      i[o] = o;
    return i;
  }, s.getValidEnumValues = (r) => {
    const i = s.objectKeys(r).filter((l) => typeof r[r[l]] != "number"), o = {};
    for (const l of i)
      o[l] = r[l];
    return s.objectValues(o);
  }, s.objectValues = (r) => s.objectKeys(r).map(function(i) {
    return r[i];
  }), s.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const i = [];
    for (const o in r)
      Object.prototype.hasOwnProperty.call(r, o) && i.push(o);
    return i;
  }, s.find = (r, i) => {
    for (const o of r)
      if (i(o))
        return o;
  }, s.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function a(r, i = " | ") {
    return r.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  s.joinValues = a, s.jsonStringifyReplacer = (r, i) => typeof i == "bigint" ? i.toString() : i;
})(I || (I = {}));
var ot;
(function(s) {
  s.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(ot || (ot = {}));
const p = I.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), oe = (s) => {
  switch (typeof s) {
    case "undefined":
      return p.undefined;
    case "string":
      return p.string;
    case "number":
      return Number.isNaN(s) ? p.nan : p.number;
    case "boolean":
      return p.boolean;
    case "function":
      return p.function;
    case "bigint":
      return p.bigint;
    case "symbol":
      return p.symbol;
    case "object":
      return Array.isArray(s) ? p.array : s === null ? p.null : s.then && typeof s.then == "function" && s.catch && typeof s.catch == "function" ? p.promise : typeof Map < "u" && s instanceof Map ? p.map : typeof Set < "u" && s instanceof Set ? p.set : typeof Date < "u" && s instanceof Date ? p.date : p.object;
    default:
      return p.unknown;
  }
}, h = I.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class ie extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (a) => {
      this.issues = [...this.issues, a];
    }, this.addIssues = (a = []) => {
      this.issues = [...this.issues, ...a];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(i) {
      return i.message;
    }, a = { _errors: [] }, r = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(r);
        else if (o.code === "invalid_return_type")
          r(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          r(o.argumentsError);
        else if (o.path.length === 0)
          a._errors.push(t(o));
        else {
          let l = a, u = 0;
          for (; u < o.path.length; ) {
            const d = o.path[u];
            u === o.path.length - 1 ? (l[d] = l[d] || { _errors: [] }, l[d]._errors.push(t(o))) : l[d] = l[d] || { _errors: [] }, l = l[d], u++;
          }
        }
    };
    return r(this), a;
  }
  static assert(e) {
    if (!(e instanceof ie))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, I.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, a = [];
    for (const r of this.issues)
      if (r.path.length > 0) {
        const i = r.path[0];
        t[i] = t[i] || [], t[i].push(e(r));
      } else
        a.push(e(r));
    return { formErrors: a, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
ie.create = (s) => new ie(s);
const Ze = (s, e) => {
  let t;
  switch (s.code) {
    case h.invalid_type:
      s.received === p.undefined ? t = "Required" : t = `Expected ${s.expected}, received ${s.received}`;
      break;
    case h.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(s.expected, I.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${I.joinValues(s.keys, ", ")}`;
      break;
    case h.invalid_union:
      t = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${I.joinValues(s.options)}`;
      break;
    case h.invalid_enum_value:
      t = `Invalid enum value. Expected ${I.joinValues(s.options)}, received '${s.received}'`;
      break;
    case h.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case h.invalid_return_type:
      t = "Invalid function return type";
      break;
    case h.invalid_date:
      t = "Invalid date";
      break;
    case h.invalid_string:
      typeof s.validation == "object" ? "includes" in s.validation ? (t = `Invalid input: must include "${s.validation.includes}"`, typeof s.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${s.validation.position}`)) : "startsWith" in s.validation ? t = `Invalid input: must start with "${s.validation.startsWith}"` : "endsWith" in s.validation ? t = `Invalid input: must end with "${s.validation.endsWith}"` : I.assertNever(s.validation) : s.validation !== "regex" ? t = `Invalid ${s.validation}` : t = "Invalid";
      break;
    case h.too_small:
      s.type === "array" ? t = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "more than"} ${s.minimum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "over"} ${s.minimum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}` : s.type === "bigint" ? t = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}` : s.type === "date" ? t = `Date must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(s.minimum))}` : t = "Invalid input";
      break;
    case h.too_big:
      s.type === "array" ? t = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "less than"} ${s.maximum} element(s)` : s.type === "string" ? t = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "under"} ${s.maximum} character(s)` : s.type === "number" ? t = `Number must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}` : s.type === "bigint" ? t = `BigInt must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}` : s.type === "date" ? t = `Date must be ${s.exact ? "exactly" : s.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(s.maximum))}` : t = "Invalid input";
      break;
    case h.custom:
      t = "Invalid input";
      break;
    case h.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case h.not_multiple_of:
      t = `Number must be a multiple of ${s.multipleOf}`;
      break;
    case h.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, I.assertNever(s);
  }
  return { message: t };
};
let Kt = Ze;
function Gt() {
  return Kt;
}
const Qt = (s) => {
  const { data: e, path: t, errorMaps: a, issueData: r } = s, i = [...t, ...r.path || []], o = {
    ...r,
    path: i
  };
  if (r.message !== void 0)
    return {
      ...r,
      path: i,
      message: r.message
    };
  let l = "";
  const u = a.filter((d) => !!d).slice().reverse();
  for (const d of u)
    l = d(o, { data: e, defaultError: l }).message;
  return {
    ...r,
    path: i,
    message: l
  };
};
function m(s, e) {
  const t = Gt(), a = Qt({
    issueData: e,
    data: s.data,
    path: s.path,
    errorMaps: [
      s.common.contextualErrorMap,
      // contextual error map is first priority
      s.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === Ze ? void 0 : Ze
      // then global default map
    ].filter((r) => !!r)
  });
  s.common.issues.push(a);
}
class z {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const a = [];
    for (const r of t) {
      if (r.status === "aborted")
        return k;
      r.status === "dirty" && e.dirty(), a.push(r.value);
    }
    return { status: e.value, value: a };
  }
  static async mergeObjectAsync(e, t) {
    const a = [];
    for (const r of t) {
      const i = await r.key, o = await r.value;
      a.push({
        key: i,
        value: o
      });
    }
    return z.mergeObjectSync(e, a);
  }
  static mergeObjectSync(e, t) {
    const a = {};
    for (const r of t) {
      const { key: i, value: o } = r;
      if (i.status === "aborted" || o.status === "aborted")
        return k;
      i.status === "dirty" && e.dirty(), o.status === "dirty" && e.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || r.alwaysSet) && (a[i.value] = o.value);
    }
    return { status: e.value, value: a };
  }
}
const k = Object.freeze({
  status: "aborted"
}), xe = (s) => ({ status: "dirty", value: s }), K = (s) => ({ status: "valid", value: s }), lt = (s) => s.status === "aborted", ct = (s) => s.status === "dirty", pe = (s) => s.status === "valid", Le = (s) => typeof Promise < "u" && s instanceof Promise;
var g;
(function(s) {
  s.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, s.toString = (e) => typeof e == "string" ? e : e?.message;
})(g || (g = {}));
class ae {
  constructor(e, t, a, r) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = a, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ut = (s, e) => {
  if (pe(e))
    return { success: !0, data: e.value };
  if (!s.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new ie(s.common.issues);
      return this._error = t, this._error;
    }
  };
};
function w(s) {
  if (!s)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: a, description: r } = s;
  if (e && (t || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: r } : { errorMap: (o, l) => {
    const { message: u } = s;
    return o.code === "invalid_enum_value" ? { message: u ?? l.defaultError } : typeof l.data > "u" ? { message: u ?? a ?? l.defaultError } : o.code !== "invalid_type" ? { message: l.defaultError } : { message: u ?? t ?? l.defaultError };
  }, description: r };
}
class M {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return oe(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: oe(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new z(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: oe(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Le(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const a = this.safeParse(e, t);
    if (a.success)
      return a.data;
    throw a.error;
  }
  safeParse(e, t) {
    const a = {
      common: {
        issues: [],
        async: t?.async ?? !1,
        contextualErrorMap: t?.errorMap
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: oe(e)
    }, r = this._parseSync({ data: e, path: a.path, parent: a });
    return ut(a, r);
  }
  "~validate"(e) {
    const t = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: oe(e)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: e, path: [], parent: t });
        return pe(a) ? {
          value: a.value
        } : {
          issues: t.common.issues
        };
      } catch (a) {
        a?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), t.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: t }).then((a) => pe(a) ? {
      value: a.value
    } : {
      issues: t.common.issues
    });
  }
  async parseAsync(e, t) {
    const a = await this.safeParseAsync(e, t);
    if (a.success)
      return a.data;
    throw a.error;
  }
  async safeParseAsync(e, t) {
    const a = {
      common: {
        issues: [],
        contextualErrorMap: t?.errorMap,
        async: !0
      },
      path: t?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: oe(e)
    }, r = this._parse({ data: e, path: a.path, parent: a }), i = await (Le(r) ? r : Promise.resolve(r));
    return ut(a, i);
  }
  refine(e, t) {
    const a = (r) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(r) : t;
    return this._refinement((r, i) => {
      const o = e(r), l = () => i.addIssue({
        code: h.custom,
        ...a(r)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (l(), !1)) : o ? !0 : (l(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((a, r) => e(a) ? !0 : (r.addIssue(typeof t == "function" ? t(a, r) : t), !1));
  }
  _refinement(e) {
    return new ye({
      schema: this,
      typeName: x.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (t) => this["~validate"](t)
    };
  }
  optional() {
    return le.create(this, this._def);
  }
  nullable() {
    return be.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return te.create(this);
  }
  promise() {
    return qe.create(this, this._def);
  }
  or(e) {
    return Me.create([this, e], this._def);
  }
  and(e) {
    return Ee.create(this, e, this._def);
  }
  transform(e) {
    return new ye({
      ...w(this._def),
      schema: this,
      typeName: x.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ve({
      ...w(this._def),
      innerType: this,
      defaultValue: t,
      typeName: x.ZodDefault
    });
  }
  brand() {
    return new xa({
      typeName: x.ZodBranded,
      type: this,
      ...w(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new He({
      ...w(this._def),
      innerType: this,
      catchValue: t,
      typeName: x.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Ge.create(this, e);
  }
  readonly() {
    return Ue.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Yt = /^c[^\s-]{8,}$/i, Xt = /^[0-9a-z]+$/, ea = /^[0-9A-HJKMNP-TV-Z]{26}$/i, ta = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, aa = /^[a-z0-9_-]{21}$/i, ra = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, sa = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ia = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, na = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Re;
const oa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, la = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ca = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ua = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, da = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ha = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Ct = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", fa = new RegExp(`^${Ct}$`);
function At(s) {
  let e = "[0-5]\\d";
  s.precision ? e = `${e}\\.\\d{${s.precision}}` : s.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = s.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function ma(s) {
  return new RegExp(`^${At(s)}$`);
}
function pa(s) {
  let e = `${Ct}T${At(s)}`;
  const t = [];
  return t.push(s.local ? "Z?" : "Z"), s.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function ga(s, e) {
  return !!((e === "v4" || !e) && oa.test(s) || (e === "v6" || !e) && ca.test(s));
}
function va(s, e) {
  if (!ra.test(s))
    return !1;
  try {
    const [t] = s.split(".");
    if (!t)
      return !1;
    const a = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), r = JSON.parse(atob(a));
    return !(typeof r != "object" || r === null || "typ" in r && r?.typ !== "JWT" || !r.alg || e && r.alg !== e);
  } catch {
    return !1;
  }
}
function ya(s, e) {
  return !!((e === "v4" || !e) && la.test(s) || (e === "v6" || !e) && ua.test(s));
}
class se extends M {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== p.string) {
      const i = this._getOrReturnCtx(e);
      return m(i, {
        code: h.invalid_type,
        expected: p.string,
        received: i.parsedType
      }), k;
    }
    const a = new z();
    let r;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (r = this._getOrReturnCtx(e, r), m(r, {
          code: h.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), a.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (r = this._getOrReturnCtx(e, r), m(r, {
          code: h.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), a.dirty());
      else if (i.kind === "length") {
        const o = e.data.length > i.value, l = e.data.length < i.value;
        (o || l) && (r = this._getOrReturnCtx(e, r), o ? m(r, {
          code: h.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : l && m(r, {
          code: h.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), a.dirty());
      } else if (i.kind === "email")
        ia.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
          validation: "email",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "emoji")
        Re || (Re = new RegExp(na, "u")), Re.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
          validation: "emoji",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "uuid")
        ta.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
          validation: "uuid",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "nanoid")
        aa.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
          validation: "nanoid",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "cuid")
        Yt.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
          validation: "cuid",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "cuid2")
        Xt.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
          validation: "cuid2",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "ulid")
        ea.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
          validation: "ulid",
          code: h.invalid_string,
          message: i.message
        }), a.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          r = this._getOrReturnCtx(e, r), m(r, {
            validation: "url",
            code: h.invalid_string,
            message: i.message
          }), a.dirty();
        }
      else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
        validation: "regex",
        code: h.invalid_string,
        message: i.message
      }), a.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.invalid_string,
        validation: { includes: i.value, position: i.position },
        message: i.message
      }), a.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.invalid_string,
        validation: { startsWith: i.value },
        message: i.message
      }), a.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.invalid_string,
        validation: { endsWith: i.value },
        message: i.message
      }), a.dirty()) : i.kind === "datetime" ? pa(i).test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.invalid_string,
        validation: "datetime",
        message: i.message
      }), a.dirty()) : i.kind === "date" ? fa.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.invalid_string,
        validation: "date",
        message: i.message
      }), a.dirty()) : i.kind === "time" ? ma(i).test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.invalid_string,
        validation: "time",
        message: i.message
      }), a.dirty()) : i.kind === "duration" ? sa.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
        validation: "duration",
        code: h.invalid_string,
        message: i.message
      }), a.dirty()) : i.kind === "ip" ? ga(e.data, i.version) || (r = this._getOrReturnCtx(e, r), m(r, {
        validation: "ip",
        code: h.invalid_string,
        message: i.message
      }), a.dirty()) : i.kind === "jwt" ? va(e.data, i.alg) || (r = this._getOrReturnCtx(e, r), m(r, {
        validation: "jwt",
        code: h.invalid_string,
        message: i.message
      }), a.dirty()) : i.kind === "cidr" ? ya(e.data, i.version) || (r = this._getOrReturnCtx(e, r), m(r, {
        validation: "cidr",
        code: h.invalid_string,
        message: i.message
      }), a.dirty()) : i.kind === "base64" ? da.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
        validation: "base64",
        code: h.invalid_string,
        message: i.message
      }), a.dirty()) : i.kind === "base64url" ? ha.test(e.data) || (r = this._getOrReturnCtx(e, r), m(r, {
        validation: "base64url",
        code: h.invalid_string,
        message: i.message
      }), a.dirty()) : I.assertNever(i);
    return { status: a.value, value: e.data };
  }
  _regex(e, t, a) {
    return this.refinement((r) => e.test(r), {
      validation: t,
      code: h.invalid_string,
      ...g.errToObj(a)
    });
  }
  _addCheck(e) {
    return new se({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...g.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...g.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...g.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...g.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...g.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...g.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...g.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...g.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...g.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...g.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...g.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...g.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...g.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      offset: e?.offset ?? !1,
      local: e?.local ?? !1,
      ...g.errToObj(e?.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof e?.precision > "u" ? null : e?.precision,
      ...g.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...g.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...g.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t?.position,
      ...g.errToObj(t?.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...g.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...g.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...g.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...g.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...g.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, g.errToObj(e));
  }
  trim() {
    return new se({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new se({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new se({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
se.create = (s) => new se({
  checks: [],
  typeName: x.ZodString,
  coerce: s?.coerce ?? !1,
  ...w(s)
});
function ba(s, e) {
  const t = (s.toString().split(".")[1] || "").length, a = (e.toString().split(".")[1] || "").length, r = t > a ? t : a, i = Number.parseInt(s.toFixed(r).replace(".", "")), o = Number.parseInt(e.toFixed(r).replace(".", ""));
  return i % o / 10 ** r;
}
class ge extends M {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== p.number) {
      const i = this._getOrReturnCtx(e);
      return m(i, {
        code: h.invalid_type,
        expected: p.number,
        received: i.parsedType
      }), k;
    }
    let a;
    const r = new z();
    for (const i of this._def.checks)
      i.kind === "int" ? I.isInteger(e.data) || (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), r.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), r.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), r.dirty()) : i.kind === "multipleOf" ? ba(e.data, i.value) !== 0 && (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), r.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.not_finite,
        message: i.message
      }), r.dirty()) : I.assertNever(i);
    return { status: r.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, g.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, g.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, g.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, g.toString(t));
  }
  setLimit(e, t, a, r) {
    return new ge({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: a,
          message: g.toString(r)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ge({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: g.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: g.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: g.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: g.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: g.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: g.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: g.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: g.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && I.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf")
        return !0;
      a.kind === "min" ? (t === null || a.value > t) && (t = a.value) : a.kind === "max" && (e === null || a.value < e) && (e = a.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ge.create = (s) => new ge({
  checks: [],
  typeName: x.ZodNumber,
  coerce: s?.coerce || !1,
  ...w(s)
});
class ke extends M {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== p.bigint)
      return this._getInvalidInput(e);
    let a;
    const r = new z();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), r.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), r.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (a = this._getOrReturnCtx(e, a), m(a, {
        code: h.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), r.dirty()) : I.assertNever(i);
    return { status: r.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return m(t, {
      code: h.invalid_type,
      expected: p.bigint,
      received: t.parsedType
    }), k;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, g.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, g.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, g.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, g.toString(t));
  }
  setLimit(e, t, a, r) {
    return new ke({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: a,
          message: g.toString(r)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ke({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: g.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: g.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: g.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: g.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: g.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
ke.create = (s) => new ke({
  checks: [],
  typeName: x.ZodBigInt,
  coerce: s?.coerce ?? !1,
  ...w(s)
});
class dt extends M {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== p.boolean) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: h.invalid_type,
        expected: p.boolean,
        received: a.parsedType
      }), k;
    }
    return K(e.data);
  }
}
dt.create = (s) => new dt({
  typeName: x.ZodBoolean,
  coerce: s?.coerce || !1,
  ...w(s)
});
class Te extends M {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== p.date) {
      const i = this._getOrReturnCtx(e);
      return m(i, {
        code: h.invalid_type,
        expected: p.date,
        received: i.parsedType
      }), k;
    }
    if (Number.isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return m(i, {
        code: h.invalid_date
      }), k;
    }
    const a = new z();
    let r;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), a.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (r = this._getOrReturnCtx(e, r), m(r, {
        code: h.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), a.dirty()) : I.assertNever(i);
    return {
      status: a.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Te({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: g.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: g.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
Te.create = (s) => new Te({
  checks: [],
  coerce: s?.coerce || !1,
  typeName: x.ZodDate,
  ...w(s)
});
class ht extends M {
  _parse(e) {
    if (this._getType(e) !== p.symbol) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: h.invalid_type,
        expected: p.symbol,
        received: a.parsedType
      }), k;
    }
    return K(e.data);
  }
}
ht.create = (s) => new ht({
  typeName: x.ZodSymbol,
  ...w(s)
});
class ft extends M {
  _parse(e) {
    if (this._getType(e) !== p.undefined) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: h.invalid_type,
        expected: p.undefined,
        received: a.parsedType
      }), k;
    }
    return K(e.data);
  }
}
ft.create = (s) => new ft({
  typeName: x.ZodUndefined,
  ...w(s)
});
class mt extends M {
  _parse(e) {
    if (this._getType(e) !== p.null) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: h.invalid_type,
        expected: p.null,
        received: a.parsedType
      }), k;
    }
    return K(e.data);
  }
}
mt.create = (s) => new mt({
  typeName: x.ZodNull,
  ...w(s)
});
class pt extends M {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return K(e.data);
  }
}
pt.create = (s) => new pt({
  typeName: x.ZodAny,
  ...w(s)
});
class gt extends M {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return K(e.data);
  }
}
gt.create = (s) => new gt({
  typeName: x.ZodUnknown,
  ...w(s)
});
class ce extends M {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return m(t, {
      code: h.invalid_type,
      expected: p.never,
      received: t.parsedType
    }), k;
  }
}
ce.create = (s) => new ce({
  typeName: x.ZodNever,
  ...w(s)
});
class vt extends M {
  _parse(e) {
    if (this._getType(e) !== p.undefined) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: h.invalid_type,
        expected: p.void,
        received: a.parsedType
      }), k;
    }
    return K(e.data);
  }
}
vt.create = (s) => new vt({
  typeName: x.ZodVoid,
  ...w(s)
});
class te extends M {
  _parse(e) {
    const { ctx: t, status: a } = this._processInputParams(e), r = this._def;
    if (t.parsedType !== p.array)
      return m(t, {
        code: h.invalid_type,
        expected: p.array,
        received: t.parsedType
      }), k;
    if (r.exactLength !== null) {
      const o = t.data.length > r.exactLength.value, l = t.data.length < r.exactLength.value;
      (o || l) && (m(t, {
        code: o ? h.too_big : h.too_small,
        minimum: l ? r.exactLength.value : void 0,
        maximum: o ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), a.dirty());
    }
    if (r.minLength !== null && t.data.length < r.minLength.value && (m(t, {
      code: h.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), a.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (m(t, {
      code: h.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), a.dirty()), t.common.async)
      return Promise.all([...t.data].map((o, l) => r.type._parseAsync(new ae(t, o, t.path, l)))).then((o) => z.mergeArray(a, o));
    const i = [...t.data].map((o, l) => r.type._parseSync(new ae(t, o, t.path, l)));
    return z.mergeArray(a, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new te({
      ...this._def,
      minLength: { value: e, message: g.toString(t) }
    });
  }
  max(e, t) {
    return new te({
      ...this._def,
      maxLength: { value: e, message: g.toString(t) }
    });
  }
  length(e, t) {
    return new te({
      ...this._def,
      exactLength: { value: e, message: g.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
te.create = (s, e) => new te({
  type: s,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: x.ZodArray,
  ...w(e)
});
function he(s) {
  if (s instanceof $) {
    const e = {};
    for (const t in s.shape) {
      const a = s.shape[t];
      e[t] = le.create(he(a));
    }
    return new $({
      ...s._def,
      shape: () => e
    });
  } else return s instanceof te ? new te({
    ...s._def,
    type: he(s.element)
  }) : s instanceof le ? le.create(he(s.unwrap())) : s instanceof be ? be.create(he(s.unwrap())) : s instanceof de ? de.create(s.items.map((e) => he(e))) : s;
}
class $ extends M {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = I.objectKeys(e);
    return this._cached = { shape: e, keys: t }, this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== p.object) {
      const d = this._getOrReturnCtx(e);
      return m(d, {
        code: h.invalid_type,
        expected: p.object,
        received: d.parsedType
      }), k;
    }
    const { status: a, ctx: r } = this._processInputParams(e), { shape: i, keys: o } = this._getCached(), l = [];
    if (!(this._def.catchall instanceof ce && this._def.unknownKeys === "strip"))
      for (const d in r.data)
        o.includes(d) || l.push(d);
    const u = [];
    for (const d of o) {
      const v = i[d], T = r.data[d];
      u.push({
        key: { status: "valid", value: d },
        value: v._parse(new ae(r, T, r.path, d)),
        alwaysSet: d in r.data
      });
    }
    if (this._def.catchall instanceof ce) {
      const d = this._def.unknownKeys;
      if (d === "passthrough")
        for (const v of l)
          u.push({
            key: { status: "valid", value: v },
            value: { status: "valid", value: r.data[v] }
          });
      else if (d === "strict")
        l.length > 0 && (m(r, {
          code: h.unrecognized_keys,
          keys: l
        }), a.dirty());
      else if (d !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const d = this._def.catchall;
      for (const v of l) {
        const T = r.data[v];
        u.push({
          key: { status: "valid", value: v },
          value: d._parse(
            new ae(r, T, r.path, v)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: v in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const d = [];
      for (const v of u) {
        const T = await v.key, N = await v.value;
        d.push({
          key: T,
          value: N,
          alwaysSet: v.alwaysSet
        });
      }
      return d;
    }).then((d) => z.mergeObjectSync(a, d)) : z.mergeObjectSync(a, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return g.errToObj, new $({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, a) => {
          const r = this._def.errorMap?.(t, a).message ?? a.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: g.errToObj(e).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new $({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new $({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new $({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new $({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: x.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new $({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const a of I.objectKeys(e))
      e[a] && this.shape[a] && (t[a] = this.shape[a]);
    return new $({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const a of I.objectKeys(this.shape))
      e[a] || (t[a] = this.shape[a]);
    return new $({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return he(this);
  }
  partial(e) {
    const t = {};
    for (const a of I.objectKeys(this.shape)) {
      const r = this.shape[a];
      e && !e[a] ? t[a] = r : t[a] = r.optional();
    }
    return new $({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    for (const a of I.objectKeys(this.shape))
      if (e && !e[a])
        t[a] = this.shape[a];
      else {
        let i = this.shape[a];
        for (; i instanceof le; )
          i = i._def.innerType;
        t[a] = i;
      }
    return new $({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Lt(I.objectKeys(this.shape));
  }
}
$.create = (s, e) => new $({
  shape: () => s,
  unknownKeys: "strip",
  catchall: ce.create(),
  typeName: x.ZodObject,
  ...w(e)
});
$.strictCreate = (s, e) => new $({
  shape: () => s,
  unknownKeys: "strict",
  catchall: ce.create(),
  typeName: x.ZodObject,
  ...w(e)
});
$.lazycreate = (s, e) => new $({
  shape: s,
  unknownKeys: "strip",
  catchall: ce.create(),
  typeName: x.ZodObject,
  ...w(e)
});
class Me extends M {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), a = this._def.options;
    function r(i) {
      for (const l of i)
        if (l.result.status === "valid")
          return l.result;
      for (const l of i)
        if (l.result.status === "dirty")
          return t.common.issues.push(...l.ctx.common.issues), l.result;
      const o = i.map((l) => new ie(l.ctx.common.issues));
      return m(t, {
        code: h.invalid_union,
        unionErrors: o
      }), k;
    }
    if (t.common.async)
      return Promise.all(a.map(async (i) => {
        const o = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: t.data,
            path: t.path,
            parent: o
          }),
          ctx: o
        };
      })).then(r);
    {
      let i;
      const o = [];
      for (const u of a) {
        const d = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, v = u._parseSync({
          data: t.data,
          path: t.path,
          parent: d
        });
        if (v.status === "valid")
          return v;
        v.status === "dirty" && !i && (i = { result: v, ctx: d }), d.common.issues.length && o.push(d.common.issues);
      }
      if (i)
        return t.common.issues.push(...i.ctx.common.issues), i.result;
      const l = o.map((u) => new ie(u));
      return m(t, {
        code: h.invalid_union,
        unionErrors: l
      }), k;
    }
  }
  get options() {
    return this._def.options;
  }
}
Me.create = (s, e) => new Me({
  options: s,
  typeName: x.ZodUnion,
  ...w(e)
});
function Fe(s, e) {
  const t = oe(s), a = oe(e);
  if (s === e)
    return { valid: !0, data: s };
  if (t === p.object && a === p.object) {
    const r = I.objectKeys(e), i = I.objectKeys(s).filter((l) => r.indexOf(l) !== -1), o = { ...s, ...e };
    for (const l of i) {
      const u = Fe(s[l], e[l]);
      if (!u.valid)
        return { valid: !1 };
      o[l] = u.data;
    }
    return { valid: !0, data: o };
  } else if (t === p.array && a === p.array) {
    if (s.length !== e.length)
      return { valid: !1 };
    const r = [];
    for (let i = 0; i < s.length; i++) {
      const o = s[i], l = e[i], u = Fe(o, l);
      if (!u.valid)
        return { valid: !1 };
      r.push(u.data);
    }
    return { valid: !0, data: r };
  } else return t === p.date && a === p.date && +s == +e ? { valid: !0, data: s } : { valid: !1 };
}
class Ee extends M {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e), r = (i, o) => {
      if (lt(i) || lt(o))
        return k;
      const l = Fe(i.value, o.value);
      return l.valid ? ((ct(i) || ct(o)) && t.dirty(), { status: t.value, value: l.data }) : (m(a, {
        code: h.invalid_intersection_types
      }), k);
    };
    return a.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      }),
      this._def.right._parseAsync({
        data: a.data,
        path: a.path,
        parent: a
      })
    ]).then(([i, o]) => r(i, o)) : r(this._def.left._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }), this._def.right._parseSync({
      data: a.data,
      path: a.path,
      parent: a
    }));
  }
}
Ee.create = (s, e, t) => new Ee({
  left: s,
  right: e,
  typeName: x.ZodIntersection,
  ...w(t)
});
class de extends M {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== p.array)
      return m(a, {
        code: h.invalid_type,
        expected: p.array,
        received: a.parsedType
      }), k;
    if (a.data.length < this._def.items.length)
      return m(a, {
        code: h.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), k;
    !this._def.rest && a.data.length > this._def.items.length && (m(a, {
      code: h.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const i = [...a.data].map((o, l) => {
      const u = this._def.items[l] || this._def.rest;
      return u ? u._parse(new ae(a, o, a.path, l)) : null;
    }).filter((o) => !!o);
    return a.common.async ? Promise.all(i).then((o) => z.mergeArray(t, o)) : z.mergeArray(t, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new de({
      ...this._def,
      rest: e
    });
  }
}
de.create = (s, e) => {
  if (!Array.isArray(s))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new de({
    items: s,
    typeName: x.ZodTuple,
    rest: null,
    ...w(e)
  });
};
class Ie extends M {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== p.object)
      return m(a, {
        code: h.invalid_type,
        expected: p.object,
        received: a.parsedType
      }), k;
    const r = [], i = this._def.keyType, o = this._def.valueType;
    for (const l in a.data)
      r.push({
        key: i._parse(new ae(a, l, a.path, l)),
        value: o._parse(new ae(a, a.data[l], a.path, l)),
        alwaysSet: l in a.data
      });
    return a.common.async ? z.mergeObjectAsync(t, r) : z.mergeObjectSync(t, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, a) {
    return t instanceof M ? new Ie({
      keyType: e,
      valueType: t,
      typeName: x.ZodRecord,
      ...w(a)
    }) : new Ie({
      keyType: se.create(),
      valueType: e,
      typeName: x.ZodRecord,
      ...w(t)
    });
  }
}
class yt extends M {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== p.map)
      return m(a, {
        code: h.invalid_type,
        expected: p.map,
        received: a.parsedType
      }), k;
    const r = this._def.keyType, i = this._def.valueType, o = [...a.data.entries()].map(([l, u], d) => ({
      key: r._parse(new ae(a, l, a.path, [d, "key"])),
      value: i._parse(new ae(a, u, a.path, [d, "value"]))
    }));
    if (a.common.async) {
      const l = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const d = await u.key, v = await u.value;
          if (d.status === "aborted" || v.status === "aborted")
            return k;
          (d.status === "dirty" || v.status === "dirty") && t.dirty(), l.set(d.value, v.value);
        }
        return { status: t.value, value: l };
      });
    } else {
      const l = /* @__PURE__ */ new Map();
      for (const u of o) {
        const d = u.key, v = u.value;
        if (d.status === "aborted" || v.status === "aborted")
          return k;
        (d.status === "dirty" || v.status === "dirty") && t.dirty(), l.set(d.value, v.value);
      }
      return { status: t.value, value: l };
    }
  }
}
yt.create = (s, e, t) => new yt({
  valueType: e,
  keyType: s,
  typeName: x.ZodMap,
  ...w(t)
});
class we extends M {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== p.set)
      return m(a, {
        code: h.invalid_type,
        expected: p.set,
        received: a.parsedType
      }), k;
    const r = this._def;
    r.minSize !== null && a.data.size < r.minSize.value && (m(a, {
      code: h.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), t.dirty()), r.maxSize !== null && a.data.size > r.maxSize.value && (m(a, {
      code: h.too_big,
      maximum: r.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.maxSize.message
    }), t.dirty());
    const i = this._def.valueType;
    function o(u) {
      const d = /* @__PURE__ */ new Set();
      for (const v of u) {
        if (v.status === "aborted")
          return k;
        v.status === "dirty" && t.dirty(), d.add(v.value);
      }
      return { status: t.value, value: d };
    }
    const l = [...a.data.values()].map((u, d) => i._parse(new ae(a, u, a.path, d)));
    return a.common.async ? Promise.all(l).then((u) => o(u)) : o(l);
  }
  min(e, t) {
    return new we({
      ...this._def,
      minSize: { value: e, message: g.toString(t) }
    });
  }
  max(e, t) {
    return new we({
      ...this._def,
      maxSize: { value: e, message: g.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
we.create = (s, e) => new we({
  valueType: s,
  minSize: null,
  maxSize: null,
  typeName: x.ZodSet,
  ...w(e)
});
class bt extends M {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
bt.create = (s, e) => new bt({
  getter: s,
  typeName: x.ZodLazy,
  ...w(e)
});
class ze extends M {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return m(t, {
        received: t.data,
        code: h.invalid_literal,
        expected: this._def.value
      }), k;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ze.create = (s, e) => new ze({
  value: s,
  typeName: x.ZodLiteral,
  ...w(e)
});
function Lt(s, e) {
  return new ve({
    values: s,
    typeName: x.ZodEnum,
    ...w(e)
  });
}
class ve extends M {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), a = this._def.values;
      return m(t, {
        expected: I.joinValues(a),
        received: t.parsedType,
        code: h.invalid_type
      }), k;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), a = this._def.values;
      return m(t, {
        received: t.data,
        code: h.invalid_enum_value,
        options: a
      }), k;
    }
    return K(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return ve.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return ve.create(this.options.filter((a) => !e.includes(a)), {
      ...this._def,
      ...t
    });
  }
}
ve.create = Lt;
class xt extends M {
  _parse(e) {
    const t = I.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(e);
    if (a.parsedType !== p.string && a.parsedType !== p.number) {
      const r = I.objectValues(t);
      return m(a, {
        expected: I.joinValues(r),
        received: a.parsedType,
        code: h.invalid_type
      }), k;
    }
    if (this._cache || (this._cache = new Set(I.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const r = I.objectValues(t);
      return m(a, {
        received: a.data,
        code: h.invalid_enum_value,
        options: r
      }), k;
    }
    return K(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
xt.create = (s, e) => new xt({
  values: s,
  typeName: x.ZodNativeEnum,
  ...w(e)
});
class qe extends M {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== p.promise && t.common.async === !1)
      return m(t, {
        code: h.invalid_type,
        expected: p.promise,
        received: t.parsedType
      }), k;
    const a = t.parsedType === p.promise ? t.data : Promise.resolve(t.data);
    return K(a.then((r) => this._def.type.parseAsync(r, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
qe.create = (s, e) => new qe({
  type: s,
  typeName: x.ZodPromise,
  ...w(e)
});
class ye extends M {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === x.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e), r = this._def.effect || null, i = {
      addIssue: (o) => {
        m(a, o), o.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), r.type === "preprocess") {
      const o = r.transform(a.data, i);
      if (a.common.async)
        return Promise.resolve(o).then(async (l) => {
          if (t.value === "aborted")
            return k;
          const u = await this._def.schema._parseAsync({
            data: l,
            path: a.path,
            parent: a
          });
          return u.status === "aborted" ? k : u.status === "dirty" || t.value === "dirty" ? xe(u.value) : u;
        });
      {
        if (t.value === "aborted")
          return k;
        const l = this._def.schema._parseSync({
          data: o,
          path: a.path,
          parent: a
        });
        return l.status === "aborted" ? k : l.status === "dirty" || t.value === "dirty" ? xe(l.value) : l;
      }
    }
    if (r.type === "refinement") {
      const o = (l) => {
        const u = r.refinement(l, i);
        if (a.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return l;
      };
      if (a.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return l.status === "aborted" ? k : (l.status === "dirty" && t.dirty(), o(l.value), { status: t.value, value: l.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((l) => l.status === "aborted" ? k : (l.status === "dirty" && t.dirty(), o(l.value).then(() => ({ status: t.value, value: l.value }))));
    }
    if (r.type === "transform")
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!pe(o))
          return k;
        const l = r.transform(o.value, i);
        if (l instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: l };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => pe(o) ? Promise.resolve(r.transform(o.value, i)).then((l) => ({
          status: t.value,
          value: l
        })) : k);
    I.assertNever(r);
  }
}
ye.create = (s, e, t) => new ye({
  schema: s,
  typeName: x.ZodEffects,
  effect: e,
  ...w(t)
});
ye.createWithPreprocess = (s, e, t) => new ye({
  schema: e,
  effect: { type: "preprocess", transform: s },
  typeName: x.ZodEffects,
  ...w(t)
});
class le extends M {
  _parse(e) {
    return this._getType(e) === p.undefined ? K(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
le.create = (s, e) => new le({
  innerType: s,
  typeName: x.ZodOptional,
  ...w(e)
});
class be extends M {
  _parse(e) {
    return this._getType(e) === p.null ? K(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
be.create = (s, e) => new be({
  innerType: s,
  typeName: x.ZodNullable,
  ...w(e)
});
class Ve extends M {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let a = t.data;
    return t.parsedType === p.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ve.create = (s, e) => new Ve({
  innerType: s,
  typeName: x.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...w(e)
});
class He extends M {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), a = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, r = this._def.innerType._parse({
      data: a.data,
      path: a.path,
      parent: {
        ...a
      }
    });
    return Le(r) ? r.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new ie(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new ie(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
He.create = (s, e) => new He({
  innerType: s,
  typeName: x.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...w(e)
});
class _t extends M {
  _parse(e) {
    if (this._getType(e) !== p.nan) {
      const a = this._getOrReturnCtx(e);
      return m(a, {
        code: h.invalid_type,
        expected: p.nan,
        received: a.parsedType
      }), k;
    }
    return { status: "valid", value: e.data };
  }
}
_t.create = (s) => new _t({
  typeName: x.ZodNaN,
  ...w(s)
});
class xa extends M {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), a = t.data;
    return this._def.type._parse({
      data: a,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ge extends M {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return i.status === "aborted" ? k : i.status === "dirty" ? (t.dirty(), xe(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: a.path,
          parent: a
        });
      })();
    {
      const r = this._def.in._parseSync({
        data: a.data,
        path: a.path,
        parent: a
      });
      return r.status === "aborted" ? k : r.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: r.value
      }) : this._def.out._parseSync({
        data: r.value,
        path: a.path,
        parent: a
      });
    }
  }
  static create(e, t) {
    return new Ge({
      in: e,
      out: t,
      typeName: x.ZodPipeline
    });
  }
}
class Ue extends M {
  _parse(e) {
    const t = this._def.innerType._parse(e), a = (r) => (pe(r) && (r.value = Object.freeze(r.value)), r);
    return Le(t) ? t.then((r) => a(r)) : a(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ue.create = (s, e) => new Ue({
  innerType: s,
  typeName: x.ZodReadonly,
  ...w(e)
});
var x;
(function(s) {
  s.ZodString = "ZodString", s.ZodNumber = "ZodNumber", s.ZodNaN = "ZodNaN", s.ZodBigInt = "ZodBigInt", s.ZodBoolean = "ZodBoolean", s.ZodDate = "ZodDate", s.ZodSymbol = "ZodSymbol", s.ZodUndefined = "ZodUndefined", s.ZodNull = "ZodNull", s.ZodAny = "ZodAny", s.ZodUnknown = "ZodUnknown", s.ZodNever = "ZodNever", s.ZodVoid = "ZodVoid", s.ZodArray = "ZodArray", s.ZodObject = "ZodObject", s.ZodUnion = "ZodUnion", s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", s.ZodIntersection = "ZodIntersection", s.ZodTuple = "ZodTuple", s.ZodRecord = "ZodRecord", s.ZodMap = "ZodMap", s.ZodSet = "ZodSet", s.ZodFunction = "ZodFunction", s.ZodLazy = "ZodLazy", s.ZodLiteral = "ZodLiteral", s.ZodEnum = "ZodEnum", s.ZodEffects = "ZodEffects", s.ZodNativeEnum = "ZodNativeEnum", s.ZodOptional = "ZodOptional", s.ZodNullable = "ZodNullable", s.ZodDefault = "ZodDefault", s.ZodCatch = "ZodCatch", s.ZodPromise = "ZodPromise", s.ZodBranded = "ZodBranded", s.ZodPipeline = "ZodPipeline", s.ZodReadonly = "ZodReadonly";
})(x || (x = {}));
const Z = se.create, fe = ge.create;
ce.create;
const kt = te.create, Qe = $.create;
Me.create;
Ee.create;
de.create;
const Pe = Ie.create, $e = ze.create, Ye = ve.create;
qe.create;
le.create;
be.create;
const _a = Qe({
  id: Z().min(1),
  french: Z().min(1),
  arabic: Z().optional(),
  phonetic: Z().optional(),
  translation: Z().optional(),
  merit: Z().optional(),
  target: fe().int().positive(),
  targetLabel: Z().optional(),
  category: Ye(["daily", "morning_evening", "prayer", "sleep", "custom"]),
  audioUrl: Z().optional()
}), ka = Qe({
  version: Z().optional(),
  exportedAt: Z().optional(),
  dailyCounts: Pe(Z(), fe().int().nonnegative()),
  lifetimeCounts: Pe(Z(), fe().int().nonnegative()),
  favorites: kt(Z()),
  historyDays: Pe(Z(), fe().int().nonnegative()).optional().default({}),
  streak: fe().int().nonnegative().optional().default(1),
  theme: Ye(["emerald", "medina", "kaaba", "oled"]).optional().default("emerald"),
  customDhikrs: kt(_a).optional().default([])
});
class q {
  static getKey(e) {
    return `${Jt.storagePrefix}${e}`;
  }
  static getDailyCounts() {
    try {
      const e = localStorage.getItem(this.getKey("daily"));
      if (!e) return {};
      const t = JSON.parse(e);
      return typeof t == "object" && t !== null ? t : {};
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture des dailyCounts:", e), {};
    }
  }
  static saveDailyCounts(e) {
    try {
      return localStorage.setItem(this.getKey("daily"), JSON.stringify(e)), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde des dailyCounts:", t), !1;
    }
  }
  static getLifetimeCounts() {
    try {
      const e = localStorage.getItem(this.getKey("lifetime"));
      if (!e) return {};
      const t = JSON.parse(e);
      return typeof t == "object" && t !== null ? t : {};
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture des lifetimeCounts:", e), {};
    }
  }
  static saveLifetimeCounts(e) {
    try {
      return localStorage.setItem(this.getKey("lifetime"), JSON.stringify(e)), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde des lifetimeCounts:", t), !1;
    }
  }
  static getFavorites() {
    try {
      const e = localStorage.getItem(this.getKey("favorites"));
      if (!e) return [];
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture des favorites:", e), [];
    }
  }
  static saveFavorites(e) {
    try {
      return localStorage.setItem(this.getKey("favorites"), JSON.stringify(e)), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde des favorites:", t), !1;
    }
  }
  static getCustomDhikrs() {
    try {
      const e = localStorage.getItem(this.getKey("custom"));
      if (!e) return [];
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture des customDhikrs:", e), [];
    }
  }
  static saveCustomDhikrs(e) {
    try {
      return localStorage.setItem(this.getKey("custom"), JSON.stringify(e)), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde des customDhikrs:", t), !1;
    }
  }
  static getHistoryDays() {
    try {
      const e = localStorage.getItem(this.getKey("history_days"));
      if (!e) return {};
      const t = JSON.parse(e);
      return typeof t == "object" && t !== null ? t : {};
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture des historyDays:", e), {};
    }
  }
  static saveHistoryDays(e) {
    try {
      return localStorage.setItem(this.getKey("history_days"), JSON.stringify(e)), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde des historyDays:", t), !1;
    }
  }
  static getStreak() {
    try {
      const e = localStorage.getItem(this.getKey("streak"));
      return e && parseInt(e, 10) || 1;
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture du streak:", e), 1;
    }
  }
  static saveStreak(e) {
    try {
      return localStorage.setItem(this.getKey("streak"), e.toString()), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde du streak:", t), !1;
    }
  }
  static getLastActiveDate() {
    try {
      return localStorage.getItem(this.getKey("last_date"));
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture de lastActiveDate:", e), null;
    }
  }
  static saveLastActiveDate(e) {
    try {
      return localStorage.setItem(this.getKey("last_date"), e), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde de lastActiveDate:", t), !1;
    }
  }
  static getTheme() {
    try {
      const e = localStorage.getItem(this.getKey("theme"));
      return e === "emerald" || e === "medina" || e === "kaaba" || e === "oled" ? e : "emerald";
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture du theme:", e), "emerald";
    }
  }
  static saveTheme(e) {
    try {
      return localStorage.setItem(this.getKey("theme"), e), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde du theme:", t), !1;
    }
  }
  static getSoundEnabled() {
    try {
      return localStorage.getItem(this.getKey("sound")) !== "false";
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture du son:", e), !0;
    }
  }
  static saveSoundEnabled(e) {
    try {
      return localStorage.setItem(this.getKey("sound"), e ? "true" : "false"), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde du son:", t), !1;
    }
  }
  static getHapticEnabled() {
    try {
      return localStorage.getItem(this.getKey("haptic")) !== "false";
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture haptique:", e), !0;
    }
  }
  static saveHapticEnabled(e) {
    try {
      return localStorage.setItem(this.getKey("haptic"), e ? "true" : "false"), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde haptique:", t), !1;
    }
  }
  static getAutoDelay() {
    try {
      const e = localStorage.getItem(this.getKey("auto_delay"));
      return e && parseInt(e, 10) || 2e3;
    } catch (e) {
      return console.error("[StorageService] Erreur lors de la lecture du délai auto:", e), 2e3;
    }
  }
  static saveAutoDelay(e) {
    try {
      return localStorage.setItem(this.getKey("auto_delay"), e.toString()), !0;
    } catch (t) {
      return console.error("[StorageService] Erreur lors de la sauvegarde du délai auto:", t), !1;
    }
  }
  /**
   * Valide et importe une sauvegarde JSON en s'assurant de la conformité du schéma Zod.
   */
  static validateAndParseBackup(e) {
    let t;
    try {
      t = JSON.parse(e);
    } catch {
      throw new Error("Le fichier fourni n'est pas un JSON valide.");
    }
    const a = ka.safeParse(t);
    if (!a.success) {
      const r = a.error.errors.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ");
      throw new Error(`Format de sauvegarde invalide : ${r}`);
    }
    return a.data;
  }
}
class wt {
  static isSupported() {
    return typeof navigator < "u" && "vibrate" in navigator;
  }
  static vibrateTick(e) {
    if (!(!e || !this.isSupported()))
      try {
        navigator.vibrate(18);
      } catch (t) {
        console.warn("[HapticService] Erreur vibration tick:", t);
      }
  }
  static vibrateMilestone(e) {
    if (!(!e || !this.isSupported()))
      try {
        navigator.vibrate([40, 60, 40, 60, 100]);
      } catch (t) {
        console.warn("[HapticService] Erreur vibration milestone:", t);
      }
  }
}
function We() {
  return { status: "idle", data: null, error: null };
}
function Je(s = null) {
  return { status: "loading", data: s, error: null };
}
function Tt(s) {
  return { status: "success", data: s, error: null };
}
function Ae(s, e = null) {
  return { status: "error", data: e, error: s };
}
class _e {
  static audioCtx = null;
  static speechState = We();
  static stateListeners = [];
  static getAudioContext() {
    if (typeof window > "u") return null;
    if (!this.audioCtx) {
      const e = window.AudioContext || window.webkitAudioContext;
      if (e)
        try {
          this.audioCtx = new e();
        } catch (t) {
          console.warn("[AudioService] Impossible d’initialiser AudioContext:", t), this.audioCtx = null;
        }
    }
    return this.audioCtx && this.audioCtx.state === "suspended" && this.audioCtx.resume().catch((e) => {
      console.warn("[AudioService] Erreur lors de la reprise de AudioContext:", e);
    }), this.audioCtx;
  }
  /**
   * Joue un son discret de perle de chapelet (Misbaha)
   */
  static playBeep(e) {
    if (!e) return;
    const t = this.getAudioContext();
    if (t)
      try {
        const a = t.createOscillator(), r = t.createGain();
        a.type = "sine", a.frequency.setValueAtTime(820, t.currentTime), a.frequency.exponentialRampToValueAtTime(320, t.currentTime + 0.04), r.gain.setValueAtTime(0.12, t.currentTime), r.gain.exponentialRampToValueAtTime(1e-3, t.currentTime + 0.04), a.connect(r), r.connect(t.destination), a.start(), a.stop(t.currentTime + 0.045);
      } catch (a) {
        console.warn("[AudioService] Erreur lors de la lecture du beep:", a);
      }
  }
  /**
   * Synthèse vocale d'un texte avec gestion des 3 états
   */
  static speakText(e) {
    return new Promise((t) => {
      if (typeof window > "u" || !("speechSynthesis" in window)) {
        const r = new Error("La synthèse vocale n’est pas supportée par ce navigateur.");
        this.updateSpeechState(Ae(r)), t();
        return;
      }
      this.updateSpeechState(Je(e)), window.speechSynthesis.cancel();
      const a = new SpeechSynthesisUtterance(e);
      a.lang = "ar-SA", a.rate = 0.88, a.pitch = 1, a.onstart = () => {
        this.updateSpeechState(Je(e));
      }, a.onend = () => {
        this.updateSpeechState(Tt(e)), t();
      }, a.onerror = (r) => {
        const i = new Error(`Erreur de synthèse vocale : ${r.error}`);
        this.updateSpeechState(Ae(i)), t();
      };
      try {
        window.speechSynthesis.speak(a);
      } catch (r) {
        const i = r instanceof Error ? r : new Error("Erreur de synthèse vocale");
        this.updateSpeechState(Ae(i)), t();
      }
    });
  }
  static stopSpeech() {
    if (typeof window < "u" && "speechSynthesis" in window)
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        console.warn("[AudioService] Erreur stopSpeech:", e);
      }
    this.updateSpeechState(We());
  }
  static getSpeechState() {
    return this.speechState;
  }
  static onSpeechStateChange(e) {
    return this.stateListeners.push(e), e(this.speechState), () => {
      this.stateListeners = this.stateListeners.filter((t) => t !== e);
    };
  }
  static updateSpeechState(e) {
    this.speechState = e;
    for (const t of this.stateListeners)
      try {
        t(this.speechState);
      } catch (a) {
        console.error("[AudioService] Erreur dans un auditeur de speechState:", a);
      }
  }
}
var Xe = {};
(function s(e, t, a, r) {
  var i = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL), o = typeof Path2D == "function" && typeof DOMMatrix == "function", l = (function() {
    if (!e.OffscreenCanvas)
      return !1;
    try {
      var c = new OffscreenCanvas(1, 1), n = c.getContext("2d");
      n.fillRect(0, 0, 1, 1);
      var y = c.transferToImageBitmap();
      n.createPattern(y, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  })();
  function u() {
  }
  function d(c) {
    var n = t.exports.Promise, y = n !== void 0 ? n : e.Promise;
    return typeof y == "function" ? new y(c) : (c(u, u), null);
  }
  var v = /* @__PURE__ */ (function(c, n) {
    return {
      transform: function(y) {
        if (c)
          return y;
        if (n.has(y))
          return n.get(y);
        var _ = new OffscreenCanvas(y.width, y.height), S = _.getContext("2d");
        return S.drawImage(y, 0, 0), n.set(y, _), _;
      },
      clear: function() {
        n.clear();
      }
    };
  })(l, /* @__PURE__ */ new Map()), T = (function() {
    var c = Math.floor(16.666666666666668), n, y, _ = {}, S = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (n = function(C) {
      var A = Math.random();
      return _[A] = requestAnimationFrame(function b(L) {
        S === L || S + c - 1 < L ? (S = L, delete _[A], C()) : _[A] = requestAnimationFrame(b);
      }), A;
    }, y = function(C) {
      _[C] && cancelAnimationFrame(_[C]);
    }) : (n = function(C) {
      return setTimeout(C, c);
    }, y = function(C) {
      return clearTimeout(C);
    }), { frame: n, cancel: y };
  })(), N = /* @__PURE__ */ (function() {
    var c, n, y = {};
    function _(S) {
      function C(A, b) {
        S.postMessage({ options: A || {}, callback: b });
      }
      S.init = function(b) {
        var L = b.transferControlToOffscreen();
        S.postMessage({ canvas: L }, [L]);
      }, S.fire = function(b, L, D) {
        if (n)
          return C(b, null), n;
        var R = Math.random().toString(36).slice(2);
        return n = d(function(j) {
          function P(F) {
            F.data.callback === R && (delete y[R], S.removeEventListener("message", P), n = null, v.clear(), D(), j());
          }
          S.addEventListener("message", P), C(b, R), y[R] = P.bind(null, { data: { callback: R } });
        }), n;
      }, S.reset = function() {
        S.postMessage({ reset: !0 });
        for (var b in y)
          y[b](), delete y[b];
      };
    }
    return function() {
      if (c)
        return c;
      if (!a && i) {
        var S = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + s.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join(`
`);
        try {
          c = new Worker(URL.createObjectURL(new Blob([S])));
        } catch (C) {
          return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", C), null;
        }
        _(c);
      }
      return c;
    };
  })(), B = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: !1,
    scalar: 1
  };
  function G(c, n) {
    return n ? n(c) : c;
  }
  function H(c) {
    return c != null;
  }
  function O(c, n, y) {
    return G(
      c && H(c[n]) ? c[n] : B[n],
      y
    );
  }
  function W(c) {
    return c < 0 ? 0 : Math.floor(c);
  }
  function J(c, n) {
    return Math.floor(Math.random() * (n - c)) + c;
  }
  function ne(c) {
    return parseInt(c, 16);
  }
  function De(c) {
    return c.map(Oe);
  }
  function Oe(c) {
    var n = String(c).replace(/[^0-9a-f]/gi, "");
    return n.length < 6 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), {
      r: ne(n.substring(0, 2)),
      g: ne(n.substring(2, 4)),
      b: ne(n.substring(4, 6))
    };
  }
  function Mt(c) {
    var n = O(c, "origin", Object);
    return n.x = O(n, "x", Number), n.y = O(n, "y", Number), n;
  }
  function Et(c) {
    c.width = document.documentElement.clientWidth, c.height = document.documentElement.clientHeight;
  }
  function It(c) {
    var n = c.getBoundingClientRect();
    c.width = n.width, c.height = n.height;
  }
  function qt(c) {
    var n = document.createElement("canvas");
    return n.style.position = "fixed", n.style.top = "0px", n.style.left = "0px", n.style.pointerEvents = "none", n.style.zIndex = c, n;
  }
  function Dt(c, n, y, _, S, C, A, b, L) {
    c.save(), c.translate(n, y), c.rotate(C), c.scale(_, S), c.arc(0, 0, 1, A, b, L), c.restore();
  }
  function Ot(c) {
    var n = c.angle * (Math.PI / 180), y = c.spread * (Math.PI / 180);
    return {
      x: c.x,
      y: c.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: c.startVelocity * 0.5 + Math.random() * c.startVelocity,
      angle2D: -n + (0.5 * y - Math.random() * y),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: c.color,
      shape: c.shape,
      tick: 0,
      totalTicks: c.ticks,
      decay: c.decay,
      drift: c.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: c.gravity * 3,
      ovalScalar: 0.6,
      scalar: c.scalar,
      flat: c.flat
    };
  }
  function jt(c, n) {
    n.x += Math.cos(n.angle2D) * n.velocity + n.drift, n.y += Math.sin(n.angle2D) * n.velocity + n.gravity, n.velocity *= n.decay, n.flat ? (n.wobble = 0, n.wobbleX = n.x + 10 * n.scalar, n.wobbleY = n.y + 10 * n.scalar, n.tiltSin = 0, n.tiltCos = 0, n.random = 1) : (n.wobble += n.wobbleSpeed, n.wobbleX = n.x + 10 * n.scalar * Math.cos(n.wobble), n.wobbleY = n.y + 10 * n.scalar * Math.sin(n.wobble), n.tiltAngle += 0.1, n.tiltSin = Math.sin(n.tiltAngle), n.tiltCos = Math.cos(n.tiltAngle), n.random = Math.random() + 2);
    var y = n.tick++ / n.totalTicks, _ = n.x + n.random * n.tiltCos, S = n.y + n.random * n.tiltSin, C = n.wobbleX + n.random * n.tiltCos, A = n.wobbleY + n.random * n.tiltSin;
    if (c.fillStyle = "rgba(" + n.color.r + ", " + n.color.g + ", " + n.color.b + ", " + (1 - y) + ")", c.beginPath(), o && n.shape.type === "path" && typeof n.shape.path == "string" && Array.isArray(n.shape.matrix))
      c.fill(Rt(
        n.shape.path,
        n.shape.matrix,
        n.x,
        n.y,
        Math.abs(C - _) * 0.1,
        Math.abs(A - S) * 0.1,
        Math.PI / 10 * n.wobble
      ));
    else if (n.shape.type === "bitmap") {
      var b = Math.PI / 10 * n.wobble, L = Math.abs(C - _) * 0.1, D = Math.abs(A - S) * 0.1, R = n.shape.bitmap.width * n.scalar, j = n.shape.bitmap.height * n.scalar, P = new DOMMatrix([
        Math.cos(b) * L,
        Math.sin(b) * L,
        -Math.sin(b) * D,
        Math.cos(b) * D,
        n.x,
        n.y
      ]);
      P.multiplySelf(new DOMMatrix(n.shape.matrix));
      var F = c.createPattern(v.transform(n.shape.bitmap), "no-repeat");
      F.setTransform(P), c.globalAlpha = 1 - y, c.fillStyle = F, c.fillRect(
        n.x - R / 2,
        n.y - j / 2,
        R,
        j
      ), c.globalAlpha = 1;
    } else if (n.shape === "circle")
      c.ellipse ? c.ellipse(n.x, n.y, Math.abs(C - _) * n.ovalScalar, Math.abs(A - S) * n.ovalScalar, Math.PI / 10 * n.wobble, 0, 2 * Math.PI) : Dt(c, n.x, n.y, Math.abs(C - _) * n.ovalScalar, Math.abs(A - S) * n.ovalScalar, Math.PI / 10 * n.wobble, 0, 2 * Math.PI);
    else if (n.shape === "star")
      for (var E = Math.PI / 2 * 3, V = 4 * n.scalar, Q = 8 * n.scalar, Y = n.x, re = n.y, ue = 5, X = Math.PI / ue; ue--; )
        Y = n.x + Math.cos(E) * Q, re = n.y + Math.sin(E) * Q, c.lineTo(Y, re), E += X, Y = n.x + Math.cos(E) * V, re = n.y + Math.sin(E) * V, c.lineTo(Y, re), E += X;
    else
      c.moveTo(Math.floor(n.x), Math.floor(n.y)), c.lineTo(Math.floor(n.wobbleX), Math.floor(S)), c.lineTo(Math.floor(C), Math.floor(A)), c.lineTo(Math.floor(_), Math.floor(n.wobbleY));
    return c.closePath(), c.fill(), n.tick < n.totalTicks;
  }
  function Nt(c, n, y, _, S) {
    var C = n.slice(), A = c.getContext("2d"), b, L, D = d(function(R) {
      function j() {
        b = L = null, A.clearRect(0, 0, _.width, _.height), v.clear(), S(), R();
      }
      function P() {
        a && !(_.width === r.width && _.height === r.height) && (_.width = c.width = r.width, _.height = c.height = r.height), !_.width && !_.height && (y(c), _.width = c.width, _.height = c.height), A.clearRect(0, 0, _.width, _.height), C = C.filter(function(F) {
          return jt(A, F);
        }), C.length ? b = T.frame(P) : j();
      }
      b = T.frame(P), L = j;
    });
    return {
      addFettis: function(R) {
        return C = C.concat(R), D;
      },
      canvas: c,
      promise: D,
      reset: function() {
        b && T.cancel(b), L && L();
      }
    };
  }
  function et(c, n) {
    var y = !c, _ = !!O(n || {}, "resize"), S = !1, C = O(n, "disableForReducedMotion", Boolean), A = i && !!O(n || {}, "useWorker"), b = A ? N() : null, L = y ? Et : It, D = c && b ? !!c.__confetti_initialized : !1, R = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, j;
    function P(E, V, Q) {
      for (var Y = O(E, "particleCount", W), re = O(E, "angle", Number), ue = O(E, "spread", Number), X = O(E, "startVelocity", Number), Bt = O(E, "decay", Number), Zt = O(E, "gravity", Number), Ft = O(E, "drift", Number), at = O(E, "colors", De), zt = O(E, "ticks", Number), rt = O(E, "shapes"), Vt = O(E, "scalar"), Ht = !!O(E, "flat"), st = Mt(E), it = Y, Ne = [], Ut = c.width * st.x, Wt = c.height * st.y; it--; )
        Ne.push(
          Ot({
            x: Ut,
            y: Wt,
            angle: re,
            spread: ue,
            startVelocity: X,
            color: at[it % at.length],
            shape: rt[J(0, rt.length)],
            ticks: zt,
            decay: Bt,
            gravity: Zt,
            drift: Ft,
            scalar: Vt,
            flat: Ht
          })
        );
      return j ? j.addFettis(Ne) : (j = Nt(c, Ne, L, V, Q), j.promise);
    }
    function F(E) {
      var V = C || O(E, "disableForReducedMotion", Boolean), Q = O(E, "zIndex", Number);
      if (V && R)
        return d(function(X) {
          X();
        });
      y && j ? c = j.canvas : y && !c && (c = qt(Q), document.body.appendChild(c)), _ && !D && L(c);
      var Y = {
        width: c.width,
        height: c.height
      };
      b && !D && b.init(c), D = !0, b && (c.__confetti_initialized = !0);
      function re() {
        if (b) {
          var X = {
            getBoundingClientRect: function() {
              if (!y)
                return c.getBoundingClientRect();
            }
          };
          L(X), b.postMessage({
            resize: {
              width: X.width,
              height: X.height
            }
          });
          return;
        }
        Y.width = Y.height = null;
      }
      function ue() {
        j = null, _ && (S = !1, e.removeEventListener("resize", re)), y && c && (document.body.contains(c) && document.body.removeChild(c), c = null, D = !1);
      }
      return _ && !S && (S = !0, e.addEventListener("resize", re, !1)), b ? b.fire(E, Y, ue) : P(E, Y, ue);
    }
    return F.reset = function() {
      b && b.reset(), j && j.reset();
    }, F;
  }
  var je;
  function tt() {
    return je || (je = et(null, { useWorker: !0, resize: !0 })), je;
  }
  function Rt(c, n, y, _, S, C, A) {
    var b = new Path2D(c), L = new Path2D();
    L.addPath(b, new DOMMatrix(n));
    var D = new Path2D();
    return D.addPath(L, new DOMMatrix([
      Math.cos(A) * S,
      Math.sin(A) * S,
      -Math.sin(A) * C,
      Math.cos(A) * C,
      y,
      _
    ])), D;
  }
  function Pt(c) {
    if (!o)
      throw new Error("path confetti are not supported in this browser");
    var n, y;
    typeof c == "string" ? n = c : (n = c.path, y = c.matrix);
    var _ = new Path2D(n), S = document.createElement("canvas"), C = S.getContext("2d");
    if (!y) {
      for (var A = 1e3, b = A, L = A, D = 0, R = 0, j, P, F = 0; F < A; F += 2)
        for (var E = 0; E < A; E += 2)
          C.isPointInPath(_, F, E, "nonzero") && (b = Math.min(b, F), L = Math.min(L, E), D = Math.max(D, F), R = Math.max(R, E));
      j = D - b, P = R - L;
      var V = 10, Q = Math.min(V / j, V / P);
      y = [
        Q,
        0,
        0,
        Q,
        -Math.round(j / 2 + b) * Q,
        -Math.round(P / 2 + L) * Q
      ];
    }
    return {
      type: "path",
      path: n,
      matrix: y
    };
  }
  function $t(c) {
    var n, y = 1, _ = "#000000", S = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof c == "string" ? n = c : (n = c.text, y = "scalar" in c ? c.scalar : y, S = "fontFamily" in c ? c.fontFamily : S, _ = "color" in c ? c.color : _);
    var C = 10 * y, A = "" + C + "px " + S, b = new OffscreenCanvas(C, C), L = b.getContext("2d");
    L.font = A;
    var D = L.measureText(n), R = Math.ceil(D.actualBoundingBoxRight + D.actualBoundingBoxLeft), j = Math.ceil(D.actualBoundingBoxAscent + D.actualBoundingBoxDescent), P = 2, F = D.actualBoundingBoxLeft + P, E = D.actualBoundingBoxAscent + P;
    R += P + P, j += P + P, b = new OffscreenCanvas(R, j), L = b.getContext("2d"), L.font = A, L.fillStyle = _, L.fillText(n, F, E);
    var V = 1 / y;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: b.transferToImageBitmap(),
      matrix: [V, 0, 0, V, -R * V / 2, -j * V / 2]
    };
  }
  t.exports = function() {
    return tt().apply(this, arguments);
  }, t.exports.reset = function() {
    tt().reset();
  }, t.exports.create = et, t.exports.shapeFromPath = Pt, t.exports.shapeFromText = $t;
})(/* @__PURE__ */ (function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
})(), Xe, !1);
const wa = Xe.exports;
Xe.exports.create;
class Sa {
  static triggerGoalCelebration() {
    try {
      wa({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#10b981", "#fbbf24", "#34d399", "#ffffff"]
      });
    } catch (e) {
      console.warn("[CelebrationService] Échec du déclenchement confetti:", e);
    }
  }
}
class me {
  static instance;
  adhkars = [];
  dailyCounts = {};
  lifetimeCounts = {};
  favorites = [];
  historyDays = {};
  streak = 1;
  lastActiveDate = null;
  currentCategory = "all";
  searchQuery = "";
  theme = "emerald";
  soundEnabled = !0;
  hapticEnabled = !0;
  autoDelayMs = 2e3;
  listeners = [];
  constructor() {
    this.init();
  }
  static getInstance() {
    return me.instance || (me.instance = new me()), me.instance;
  }
  init() {
    this.theme = q.getTheme(), this.soundEnabled = q.getSoundEnabled(), this.hapticEnabled = q.getHapticEnabled(), this.autoDelayMs = q.getAutoDelay();
    const e = q.getCustomDhikrs();
    this.adhkars = [...nt, ...e], this.dailyCounts = q.getDailyCounts(), this.lifetimeCounts = q.getLifetimeCounts(), this.favorites = q.getFavorites(), this.historyDays = q.getHistoryDays(), this.streak = q.getStreak(), this.lastActiveDate = q.getLastActiveDate(), this.checkDailyReset();
    for (const t of this.adhkars)
      this.dailyCounts[t.id] === void 0 && (this.dailyCounts[t.id] = 0), this.lifetimeCounts[t.id] === void 0 && (this.lifetimeCounts[t.id] = 0);
  }
  subscribe(e) {
    return this.listeners.push(e), () => {
      this.listeners = this.listeners.filter((t) => t !== e);
    };
  }
  notify() {
    for (const e of this.listeners)
      try {
        e();
      } catch (t) {
        console.error("[AppStore] Erreur dans un auditeur de store:", t);
      }
  }
  checkDailyReset() {
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    if (this.lastActiveDate && this.lastActiveDate !== e) {
      const t = /* @__PURE__ */ new Date();
      t.setDate(t.getDate() - 1);
      const a = t.toISOString().slice(0, 10), r = Object.values(this.dailyCounts).reduce((i, o) => i + o, 0);
      r > 0 && (this.historyDays[this.lastActiveDate] = r), this.lastActiveDate === a && r > 0 ? this.streak += 1 : this.lastActiveDate !== a && (this.streak = 1), this.dailyCounts = {};
    } else this.lastActiveDate || (this.streak = 1);
    this.lastActiveDate = e, q.saveLastActiveDate(this.lastActiveDate), q.saveStreak(this.streak), q.saveHistoryDays(this.historyDays);
  }
  increment(e) {
    const a = (this.dailyCounts[e] || 0) + 1;
    this.dailyCounts[e] = a, this.lifetimeCounts[e] = (this.lifetimeCounts[e] || 0) + 1;
    const i = this.adhkars.find((l) => l.id === e)?.target || 100, o = a % i === 0 && a > 0;
    return _e.playBeep(this.soundEnabled), o ? (wt.vibrateMilestone(this.hapticEnabled), Sa.triggerGoalCelebration()) : wt.vibrateTick(this.hapticEnabled), this.persist(), this.notify(), { isMilestone: o, count: a, target: i };
  }
  resetDhikr(e) {
    this.dailyCounts[e] = 0, this.persist(), this.notify();
  }
  resetAllDaily() {
    this.dailyCounts = {};
    for (const e of this.adhkars)
      this.dailyCounts[e.id] = 0;
    this.persist(), this.notify();
  }
  toggleFavorite(e) {
    const t = this.favorites.includes(e);
    return t ? this.favorites = this.favorites.filter((a) => a !== e) : this.favorites.push(e), q.saveFavorites(this.favorites), this.notify(), !t;
  }
  setCategory(e) {
    this.currentCategory = e, this.notify();
  }
  setSearchQuery(e) {
    this.searchQuery = e.trim().toLowerCase(), this.notify();
  }
  setTheme(e) {
    this.theme = e, q.saveTheme(e), this.notify();
  }
  toggleSound() {
    return this.soundEnabled = !this.soundEnabled, q.saveSoundEnabled(this.soundEnabled), this.notify(), this.soundEnabled;
  }
  setHaptic(e) {
    this.hapticEnabled = e, q.saveHapticEnabled(e), this.notify();
  }
  setAutoDelay(e) {
    this.autoDelayMs = e, q.saveAutoDelay(e), this.notify();
  }
  addOrUpdateCustomDhikr(e) {
    const t = this.adhkars.findIndex((a) => a.id === e.id);
    t >= 0 ? this.adhkars[t] = e : (this.adhkars.push(e), this.dailyCounts[e.id] === void 0 && (this.dailyCounts[e.id] = 0), this.lifetimeCounts[e.id] === void 0 && (this.lifetimeCounts[e.id] = 0)), this.persistCustomDhikrs(), this.persist(), this.notify();
  }
  deleteCustomDhikr(e) {
    this.adhkars = this.adhkars.filter((t) => t.id !== e), this.favorites = this.favorites.filter((t) => t !== e), delete this.dailyCounts[e], delete this.lifetimeCounts[e], this.persistCustomDhikrs(), q.saveFavorites(this.favorites), this.persist(), this.notify();
  }
  importBackup(e) {
    this.dailyCounts = { ...e.dailyCounts }, this.lifetimeCounts = { ...e.lifetimeCounts }, this.favorites = [...e.favorites], this.historyDays = { ...e.historyDays }, this.streak = e.streak, this.theme = e.theme;
    const t = e.customDhikrs || [];
    this.adhkars = [...nt, ...t];
    for (const a of this.adhkars)
      this.dailyCounts[a.id] === void 0 && (this.dailyCounts[a.id] = 0), this.lifetimeCounts[a.id] === void 0 && (this.lifetimeCounts[a.id] = 0);
    q.saveTheme(this.theme), q.saveStreak(this.streak), q.saveFavorites(this.favorites), this.persistCustomDhikrs(), this.persist(), this.notify();
  }
  exportBackup() {
    return {
      version: "2.0.0",
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      dailyCounts: this.dailyCounts,
      lifetimeCounts: this.lifetimeCounts,
      favorites: this.favorites,
      historyDays: this.historyDays,
      streak: this.streak,
      theme: this.theme,
      customDhikrs: this.adhkars.filter((e) => e.id.startsWith("custom_"))
    };
  }
  getFilteredDhikrs() {
    return this.adhkars.filter((e) => {
      if (this.currentCategory === "favorites") {
        if (!this.favorites.includes(e.id)) return !1;
      } else if (this.currentCategory === "custom") {
        if (!e.id.startsWith("custom_")) return !1;
      } else if (this.currentCategory !== "all" && e.category !== this.currentCategory)
        return !1;
      return !(this.searchQuery && !`${e.french} ${e.arabic || ""} ${e.phonetic || ""} ${e.translation || ""}`.toLowerCase().includes(this.searchQuery));
    });
  }
  getCategoryCounts() {
    return {
      all: this.adhkars.length,
      daily: this.adhkars.filter((e) => e.category === "daily").length,
      morning_evening: this.adhkars.filter((e) => e.category === "morning_evening").length,
      prayer: this.adhkars.filter((e) => e.category === "prayer").length,
      sleep: this.adhkars.filter((e) => e.category === "sleep").length,
      favorites: this.favorites.length,
      custom: this.adhkars.filter((e) => e.id.startsWith("custom_")).length
    };
  }
  getTodayTotal() {
    return Object.values(this.dailyCounts).reduce((e, t) => e + t, 0);
  }
  getLifetimeTotal() {
    return Object.values(this.lifetimeCounts).reduce((e, t) => e + t, 0);
  }
  persistCustomDhikrs() {
    const e = this.adhkars.filter((t) => t.id.startsWith("custom_"));
    q.saveCustomDhikrs(e);
  }
  persist() {
    q.saveDailyCounts(this.dailyCounts), q.saveLifetimeCounts(this.lifetimeCounts);
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.historyDays[e] = this.getTodayTotal(), q.saveHistoryDays(this.historyDays);
  }
}
class Ke {
  static deferredPrompt = null;
  static swState = We();
  static installableListeners = [];
  static init() {
    typeof window > "u" || ("serviceWorker" in navigator && (this.swState = Je(), window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((e) => {
        this.swState = Tt(e), console.log("[PwaService] Service Worker actif:", e.scope);
      }).catch((e) => {
        const t = e instanceof Error ? e : new Error("Erreur Service Worker");
        this.swState = Ae(t), console.warn("[PwaService] Service Worker non disponible :", t);
      });
    })), window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault(), this.deferredPrompt = e, this.notifyInstallable(!0);
    }), window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null, this.notifyInstallable(!1), console.log("[PwaService] Application installée avec succès.");
    }));
  }
  static canInstall() {
    return this.deferredPrompt !== null;
  }
  static promptInstall() {
    if (!this.deferredPrompt)
      return Promise.resolve(!1);
    const e = this.deferredPrompt;
    return e.prompt().then(() => e.userChoice).then((t) => (this.deferredPrompt = null, this.notifyInstallable(!1), t.outcome === "accepted")).catch((t) => (console.error("[PwaService] Erreur lors du prompt PWA:", t), !1));
  }
  static onInstallableChange(e) {
    return this.installableListeners.push(e), e(this.canInstall()), () => {
      this.installableListeners = this.installableListeners.filter((t) => t !== e);
    };
  }
  static notifyInstallable(e) {
    for (const t of this.installableListeners)
      try {
        t(e);
      } catch (a) {
        console.error("[PwaService] Erreur dans un auditeur installable:", a);
      }
  }
  static getRegistrationState() {
    return this.swState;
  }
}
const Ca = [
  "Mouharram",
  "Safar",
  "Rabi' al-Awwal",
  "Rabi' ath-Thani",
  "Joumada al-Oula",
  "Joumada ath-Thania",
  "Rajab",
  "Cha'bane",
  "Ramadan",
  "Chawwal",
  "Dhou al-Qi'da",
  "Dhou al-Hijja"
];
class Aa {
  static getTodayHijri() {
    const e = /* @__PURE__ */ new Date(), t = e.getDay(), a = e.getDate(), r = e.getMonth(), i = e.getFullYear();
    let o = r + 1, l = i;
    o < 3 && (l -= 1, o += 12);
    const u = Math.floor(l / 100), d = 2 - u + Math.floor(u / 4), N = Math.floor(365.25 * (l + 4716)) + Math.floor(30.6001 * (o + 1)) + a + d - 1524 - 19484395e-1, B = Math.floor((30 * N + 10646) / 10631), G = N - Math.floor((10631 * B - 10646) / 30), H = Math.min(12, Math.max(1, Math.ceil(G / 29.5))), O = Math.floor((H - 1) * 29.5);
    let W = Math.floor(G - O) + 1;
    W < 1 && (W = 1), W > 30 && (W = 30);
    const J = Math.min(11, Math.max(0, H - 1)), ne = Ca[J] || "Mois Hégirien", De = W === 13 || W === 14 || W === 15, Oe = t === 1 || t === 4;
    return {
      day: W,
      month: H,
      year: B,
      monthNameFr: ne,
      formattedString: `${W} ${ne} ${B}`,
      isWhiteDay: De,
      isSunnahFastDay: Oe
    };
  }
}
function ee(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function f(s) {
  const e = document.getElementById(s);
  if (!e)
    throw new Error(`[DOM Error] Élément requis #${s} introuvable dans le document.`);
  return e;
}
function Se(s, e) {
  const t = f(s), a = f(e);
  t.classList.remove("hidden"), setTimeout(() => {
    t.classList.remove("opacity-0"), window.innerWidth < 640 ? a.classList.remove("translate-y-full") : a.classList.remove("scale-95");
  }, 10);
}
function Ce(s, e) {
  const t = f(s), a = f(e);
  t.classList.add("opacity-0"), window.innerWidth < 640 ? a.classList.add("translate-y-full") : a.classList.add("scale-95"), setTimeout(() => {
    t.classList.add("hidden");
  }, 280);
}
class La {
  store;
  constructor(e) {
    this.store = e;
  }
  init() {
    this.renderHijriInfo(), this.bindEvents(), this.updateSoundIcon();
  }
  renderHijriInfo() {
    const e = Aa.getTodayHijri(), t = f("hijri-date-badge"), a = f("hijri-fast-badge");
    t.textContent = e.formattedString, e.isWhiteDay ? (a.innerHTML = '<i class="ph-fill ph-moon-stars text-amber-400"></i> Jours Blancs (Jeûne conseillé)', a.classList.remove("hidden")) : e.isSunnahFastDay ? (a.innerHTML = '<i class="ph-fill ph-sun text-amber-400"></i> Jeûne prophétique (Lundi/Jeudi)', a.classList.remove("hidden")) : a.classList.add("hidden");
  }
  bindEvents() {
    const e = f("btn-toggle-search"), t = f("search-bar-container"), a = f("search-input"), r = f("btn-search-clear");
    e.addEventListener("click", () => {
      t.classList.toggle("hidden"), t.classList.contains("hidden") || a.focus();
    }), a.addEventListener("input", (o) => {
      const l = o.target.value;
      this.store.setSearchQuery(l);
    }), r.addEventListener("click", () => {
      a.value = "", this.store.setSearchQuery("");
    }), f("btn-toggle-sound").addEventListener("click", () => {
      this.store.toggleSound(), this.updateSoundIcon();
    });
  }
  updateSoundIcon() {
    const e = f("btn-toggle-sound"), t = this.store.soundEnabled;
    e.innerHTML = t ? '<i class="ph ph-speaker-high text-lg"></i>' : '<i class="ph ph-speaker-slash text-lg text-rose-400"></i>', e.title = t ? "Son activé" : "Son coupé";
  }
}
class Ta {
  onOpenModal;
  constructor(e) {
    this.onOpenModal = e;
  }
  init() {
    f("btn-open-names-banner").addEventListener("click", () => {
      this.onOpenModal();
    });
  }
}
const Ma = {
  all: "Toutes les invocations",
  daily: "Invocations quotidiennes",
  morning_evening: "Adhkars du matin et du soir",
  prayer: "Invocations après la prière",
  sleep: "Invocations avant de dormir",
  favorites: "Vos invocations favorites",
  custom: "Vos invocations personnalisées"
};
class Ea {
  store;
  constructor(e) {
    this.store = e;
  }
  init() {
    document.querySelectorAll(".cat-pill").forEach((t) => {
      t.addEventListener("click", () => {
        const a = t.getAttribute("data-cat");
        a && this.store.setCategory(a);
      });
    }), this.render();
  }
  render() {
    const e = this.store.currentCategory, t = this.store.getCategoryCounts(), a = f("category-summary");
    a.textContent = Ma[e] || "Invocations", document.querySelectorAll(".cat-pill").forEach((i) => {
      const o = i.getAttribute("data-cat"), l = o === e, u = i.querySelector(".cat-badge");
      u && o && (u.textContent = (t[o] || 0).toString()), l ? (i.className = "cat-pill px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 bg-primary-500 text-white border-primary-400 shadow-neon tap-effect", u && (u.className = "cat-badge px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-white/25 text-white tabular-nums")) : (i.className = "cat-pill px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 bg-surface/70 text-textmuted border-bordercolor hover:text-textmain hover:bg-surface hover:border-primary-500/30 tap-effect", u && (u.className = "cat-badge px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-bordercolor/60 text-textmuted tabular-nums"));
    });
  }
}
class Ia {
  store;
  constructor(e) {
    this.store = e;
  }
  render() {
    const e = this.store.getTodayTotal(), t = this.store.getLifetimeTotal(), a = this.store.streak, r = f("daily-total-counter"), i = f("lifetime-counter-banner"), o = f("streak-counter");
    r.textContent = `${e.toLocaleString("fr-FR")} invocation${e > 1 ? "s" : ""}`, i.textContent = t.toLocaleString("fr-FR"), o.textContent = a.toString();
  }
}
class U {
  static timeoutId = null;
  static show(e, t = 3200) {
    const a = f("toast"), r = f("toast-msg");
    r.textContent = e, a.classList.remove("hidden"), a.offsetWidth, a.classList.add("toast-show"), this.timeoutId !== null && window.clearTimeout(this.timeoutId), this.timeoutId = window.setTimeout(() => {
      a.classList.remove("toast-show"), a.classList.add("hidden"), this.timeoutId = null;
    }, t);
  }
}
class qa {
  static render(e, t, a) {
    const r = t.dailyCounts[e.id] || 0, i = e.target || 100, o = Math.floor(r / i), l = r % i, u = r > 0 && l === 0 ? 100 : l / i * 100, d = t.favorites.includes(e.id), v = e.id.startsWith("custom_"), T = document.createElement("div");
    return T.className = "glass-card rounded-[28px] overflow-hidden flex flex-col relative group transition-all duration-300 hover:border-primary-500/30", T.setAttribute("data-dhikr-id", e.id), T.innerHTML = `
      <!-- En-tête de carte -->
      <div class="p-5 pb-2 flex justify-between items-start z-10 gap-3">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="px-2 py-0.5 rounded-full bg-surface text-[10px] font-bold text-primary-400 border border-bordercolor">
              ${ee(e.targetLabel || `Objectif : ${i}`)}
            </span>
            ${o > 0 ? `<span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-400 border border-amber-500/30 flex items-center gap-1 animate-pulse">
                     <i class="ph-fill ph-check-circle"></i> ${o} accompli${o > 1 ? "s" : ""}
                   </span>` : ""}
          </div>
          <h3 class="text-base font-extrabold text-textmain leading-tight">${ee(e.french)}</h3>
        </div>

        <div class="flex items-center gap-1.5 shrink-0">
          ${v ? `<button class="btn-edit-custom w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-amber-400 tap-effect" title="Modifier">
                   <i class="ph ph-pencil-simple text-sm"></i>
                 </button>
                 <button class="btn-delete-custom w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-rose-400 tap-effect" title="Supprimer">
                   <i class="ph ph-trash text-sm"></i>
                 </button>` : ""}
          <button class="btn-fav w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-amber-400 tap-effect transition-colors" title="Favori">
            <i class="${d ? "ph-fill ph-star text-amber-400" : "ph ph-star"} text-sm"></i>
          </button>
          <button class="btn-reset-dhikr w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-rose-400 tap-effect transition-colors" title="Réinitialiser">
            <i class="ph ph-arrow-counter-clockwise text-sm"></i>
          </button>
        </div>
      </div>

      <!-- Corps : Calligraphie Arabe -->
      ${e.arabic ? `<div class="px-5 py-3 text-center">
               <p class="font-arabic text-2xl sm:text-3xl text-primary-400 leading-loose select-none" dir="rtl">${ee(e.arabic)}</p>
             </div>` : '<div class="py-2"></div>'}

      <!-- Translittération phonétique & sens -->
      ${e.phonetic || e.translation ? `<div class="px-5 pb-3 flex flex-col gap-1 text-center">
               ${e.phonetic ? `<p class="text-[11px] text-textmain italic leading-relaxed opacity-90">${ee(e.phonetic)}</p>` : ""}
               ${e.translation ? `<p class="text-[11px] text-textmuted leading-relaxed">${ee(e.translation)}</p>` : ""}
             </div>` : ""}

      <!-- Mérite / Source -->
      ${e.merit ? `<div class="mx-5 mb-3 p-2 rounded-xl bg-surface/40 border border-bordercolor/60 text-[10px] text-textmuted flex items-start gap-1.5 leading-normal">
               <i class="ph-fill ph-info text-primary-400 text-xs mt-0.5 shrink-0"></i>
               <span>${ee(e.merit)}</span>
             </div>` : ""}

      <!-- Bas de carte : Progression & Actions -->
      <div class="p-4 bg-surface/40 mt-auto border-t border-bordercolor relative overflow-hidden">
        <div class="absolute top-0 left-0 h-1.5 w-full bg-surface">
          <div class="h-full bg-primary-500 transition-all duration-300 ease-out" style="width: ${u}%; box-shadow: 0 0 10px var(--color-primary-500);"></div>
        </div>

        <div class="flex items-center justify-between gap-2.5 pt-1.5">
          <div class="flex-[1.2] bg-background/70 rounded-2xl py-2.5 px-2 flex flex-col items-center justify-center border border-bordercolor">
            <span class="text-[9px] text-primary-400 font-bold uppercase tracking-wider mb-0.5">Aujourd'hui</span>
            <span class="text-xl font-black text-textmain tabular-nums">${r}</span>
          </div>

          <button class="btn-increment flex-[2.5] h-[60px] rounded-2xl bg-primary-500 text-white shadow-neon flex items-center justify-center gap-2 tap-effect font-bold text-base uppercase tracking-wider active:bg-primary-600 transition-colors">
            <i class="ph-bold ph-plus"></i> Compter
          </button>

          <button class="btn-focus w-[60px] h-[60px] rounded-2xl bg-surface flex flex-col items-center justify-center text-primary-400 hover:text-primary-300 tap-effect border border-bordercolor" title="Mode Plein Écran">
            <i class="ph ph-corners-out text-2xl"></i>
          </button>
        </div>
      </div>
    `, T.querySelector(".btn-increment")?.addEventListener("click", () => {
      t.increment(e.id).isMilestone && U.show(`Objectif atteint pour "${e.french}" ! 🎉`);
    }), T.querySelector(".btn-focus")?.addEventListener("click", () => {
      a.onOpenFocus(e.id);
    }), T.querySelector(".btn-fav")?.addEventListener("click", (J) => {
      J.stopPropagation();
      const ne = t.toggleFavorite(e.id);
      U.show(ne ? "Ajouté aux favoris ⭐" : "Retiré des favoris");
    }), T.querySelector(".btn-reset-dhikr")?.addEventListener("click", (J) => {
      J.stopPropagation(), confirm(
        `Remettre à zéro le compteur d'aujourd'hui pour "${e.french}" ? L'historique global est conservé.`
      ) && (t.resetDhikr(e.id), U.show("Compteur réinitialisé"));
    }), T.querySelector(".btn-edit-custom")?.addEventListener("click", (J) => {
      J.stopPropagation(), a.onEditCustom(e.id);
    }), T.querySelector(".btn-delete-custom")?.addEventListener("click", (J) => {
      J.stopPropagation(), confirm(`Supprimer définitivement l'invocation "${e.french}" ?`) && (t.deleteCustomDhikr(e.id), U.show("Invocation supprimée"));
    }), T;
  }
}
class Da {
  store;
  callbacks;
  constructor(e, t) {
    this.store = e, this.callbacks = t;
  }
  render() {
    const e = f("app-container");
    e.innerHTML = "";
    const t = this.store.getFilteredDhikrs();
    if (t.length === 0) {
      e.innerHTML = `
        <div class="glass-card rounded-3xl p-8 text-center flex flex-col items-center justify-center my-6">
          <i class="ph ph-magnifying-glass text-4xl text-textmuted mb-2"></i>
          <h3 class="text-sm font-bold text-textmain mb-1">Aucune invocation trouvée</h3>
          <p class="text-xs text-textmuted">Essayez un autre mot-clé ou ajoutez un nouveau Dhikr.</p>
        </div>
      `;
      return;
    }
    for (const a of t) {
      const r = qa.render(a, this.store, this.callbacks);
      e.appendChild(r);
    }
  }
}
class Oa {
  store;
  currentId = null;
  isAutoPlaying = !1;
  autoPlayTimer = null;
  arabicFontSize = 32;
  detailsVisible = !0;
  constructor(e) {
    this.store = e;
  }
  init() {
    this.initFocusBeads(), this.bindEvents();
  }
  bindEvents() {
    f("focus-close-btn").addEventListener("click", () => {
      this.close();
    }), f("focus-tap-zone").addEventListener("click", () => {
      this.currentId && (this.store.increment(this.currentId), this.renderCurrentFocus());
    }), f("focus-autoplay-btn").addEventListener("click", (u) => {
      u.stopPropagation(), this.toggleAutoPlay();
    }), f("focus-speaker-btn").addEventListener("click", (u) => {
      u.stopPropagation(), this.speakCurrent();
    }), f("focus-font-minus").addEventListener("click", (u) => {
      u.stopPropagation(), this.changeFontSize(-2);
    }), f("focus-font-plus").addEventListener("click", (u) => {
      u.stopPropagation(), this.changeFontSize(2);
    }), f("focus-details-btn").addEventListener("click", (u) => {
      u.stopPropagation(), this.toggleDetails();
    }), window.addEventListener("keydown", (u) => {
      const d = document.getElementById("focus-modal");
      d && !d.classList.contains("hidden") && (u.code === "Space" || u.key === "Enter" ? (u.preventDefault(), this.currentId && (this.store.increment(this.currentId), this.renderCurrentFocus())) : u.key === "Escape" && this.close());
    });
  }
  open(e) {
    this.currentId = e, this.renderCurrentFocus(), Se("focus-modal", "focus-box");
  }
  close() {
    this.stopAutoPlay(), _e.stopSpeech(), Ce("focus-modal", "focus-box"), this.currentId = null;
  }
  renderCurrentFocus() {
    if (!this.currentId) return;
    const e = this.store.adhkars.find((H) => H.id === this.currentId);
    if (!e) return;
    const t = this.store.dailyCounts[e.id] || 0, a = e.target || 100, r = Math.floor(t / a) + 1, i = t % a, o = t > 0 && i === 0 ? 1 : i / a, l = f("focus-title"), u = f("focus-arabic"), d = f("focus-phonetic"), v = f("focus-translation"), T = f("focus-counter"), N = f("focus-progress-text"), B = f("focus-round-badge"), G = document.getElementById("focus-ring");
    if (l.textContent = e.french, u.textContent = e.arabic || "", u.style.fontSize = `${this.arabicFontSize}px`, d.textContent = e.phonetic || "", v.textContent = e.translation || "", T.textContent = t.toString(), N.textContent = `${i} / ${a}`, B.textContent = `Tour ${r}`, G) {
      const O = 276.46 - o * 276.46;
      G.style.strokeDashoffset = O.toFixed(1);
    }
    this.updateFocusBeads(t);
  }
  changeFontSize(e) {
    this.arabicFontSize = Math.min(52, Math.max(22, this.arabicFontSize + e));
    const t = f("focus-arabic");
    t.style.fontSize = `${this.arabicFontSize}px`;
  }
  toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
    const e = f("focus-extra-content"), t = f("focus-details-label");
    this.detailsVisible ? (e.classList.remove("hidden"), t.textContent = "Détails") : (e.classList.add("hidden"), t.textContent = "Masqué");
  }
  initFocusBeads() {
    const e = document.getElementById("focus-beads-group");
    if (!e) return;
    e.innerHTML = "";
    const t = 33, a = 44;
    for (let r = 0; r < t; r++) {
      const i = r / t * 2 * Math.PI, o = 50 + a * Math.cos(i), l = 50 + a * Math.sin(i), u = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      u.setAttribute("cx", o.toFixed(2)), u.setAttribute("cy", l.toFixed(2)), u.setAttribute("r", "2.2"), u.setAttribute("class", "bead fill-bordercolor transition-all duration-200"), u.setAttribute("id", `bead-${r}`), e.appendChild(u);
    }
  }
  updateFocusBeads(e) {
    const a = (e - 1) % 33;
    for (let r = 0; r < 33; r++) {
      const i = document.getElementById(`bead-${r}`);
      i && (e === 0 ? (i.setAttribute("class", "bead fill-bordercolor transition-all duration-200"), i.setAttribute("r", "2.2")) : r === a ? (i.setAttribute(
        "class",
        "bead fill-amber-400 transition-all duration-200 filter drop-shadow-[0_0_4px_#fbbf24]"
      ), i.setAttribute("r", "3.8")) : r < a ? (i.setAttribute("class", "bead fill-primary-400 transition-all duration-200"), i.setAttribute("r", "2.5")) : (i.setAttribute("class", "bead fill-bordercolor transition-all duration-200"), i.setAttribute("r", "2.2")));
    }
  }
  speakCurrent() {
    if (!this.currentId) return;
    const e = this.store.adhkars.find((a) => a.id === this.currentId);
    if (!e) return;
    const t = e.arabic || e.phonetic || e.french;
    _e.speakText(t);
  }
  toggleAutoPlay() {
    this.isAutoPlaying ? this.stopAutoPlay() : this.startAutoPlay();
  }
  startAutoPlay() {
    this.currentId && (this.isAutoPlaying = !0, this.updateAutoPlayUI(!0), U.show("Mode Mains-Libres activé ▶️"), this.runAutoPlayStep());
  }
  stopAutoPlay() {
    this.isAutoPlaying = !1, this.autoPlayTimer !== null && (window.clearTimeout(this.autoPlayTimer), this.autoPlayTimer = null), _e.stopSpeech(), this.updateAutoPlayUI(!1);
  }
  updateAutoPlayUI(e) {
    const t = f("focus-autoplay-btn"), a = f("focus-autoplay-icon"), r = f("focus-autoplay-label");
    e ? (t.className = "px-3 py-2 rounded-2xl bg-amber-500 text-black text-xs font-bold border border-amber-400 tap-effect flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse", a.className = "ph-bold ph-pause text-sm", r.textContent = "Pause") : (t.className = "px-3 py-2 rounded-2xl bg-card text-textmuted hover:text-amber-400 text-xs font-semibold border border-bordercolor tap-effect flex items-center gap-1.5", a.className = "ph-bold ph-play text-sm", r.textContent = "Auto");
  }
  runAutoPlayStep() {
    if (!this.isAutoPlaying || !this.currentId) return;
    const e = this.store.adhkars.find((o) => o.id === this.currentId);
    if (!e) {
      this.stopAutoPlay();
      return;
    }
    const t = this.store.dailyCounts[e.id] || 0, a = e.target || 100;
    if (t >= a) {
      this.stopAutoPlay(), U.show(`Objectif atteint pour "${e.french}" ! 🎉`);
      return;
    }
    const r = this.store.increment(e.id);
    if (this.renderCurrentFocus(), r.isMilestone) {
      this.stopAutoPlay(), U.show(`Objectif de ${a} atteint ! 🎉`);
      return;
    }
    const i = e.arabic || e.phonetic || e.french;
    _e.speakText(i).then(() => {
      this.isAutoPlaying && (this.autoPlayTimer = window.setTimeout(() => {
        this.runAutoPlayStep();
      }, this.store.autoDelayMs));
    });
  }
}
const Be = [{ n: 1, a: "الرَّحْمَنُ", p: "Ar-Rahman", f: "Le Tout-Miséricordieux", m: "Celui dont la miséricorde infinie englobe toute la création." }, { n: 2, a: "الرَّحِيمُ", p: "Ar-Rahim", f: "Le Très-Miséricordieux", m: "Celui qui accorde Sa miséricorde spéciale aux croyants." }, { n: 3, a: "الْمَلِكُ", p: "Al-Malik", f: "Le Souverain Suprême", m: "Le Roi absolu de l'univers, sans associé ni égal." }, { n: 4, a: "الْقُدُّوسُ", p: "Al-Quddus", f: "Le Pur et Sanctifié", m: "Le Purifié de tout défaut, faiblesse ou imperfection." }, { n: 5, a: "السَّلَامُ", p: "As-Salam", f: "La Paix", m: "La Source de la paix et Celui qui préserve de tout mal." }, { n: 6, a: "الْمُؤْمِنُ", p: "Al-Mu'min", f: "Le Rassurant / Le Fidèle", m: "Celui qui accorde la foi, la sérénité et la sécurité." }, { n: 7, a: "الْمُهَيْمِنُ", p: "Al-Muhaymin", f: "Le Protecteur / Surveillant", m: "Celui qui veille sur toute Sa création et la protège." }, { n: 8, a: "الْعَزِيزُ", p: "Al-'Aziz", f: "Le Tout-Puissant", m: "L'Invincible que rien ne peut vaincre ni surpasser." }, { n: 9, a: "الْجَبَّارُ", p: "Al-Jabbar", f: "L'Imposant / Le Réparateur", m: "Celui qui contraint toute chose et panse les cœurs brisés." }, { n: 10, a: "الْمُتَكَبِّرُ", p: "Al-Mutakabbir", f: "Le Majestueux", m: "Celui à qui appartient la grandeur suprême et exclusive." }, { n: 11, a: "الْخَالِقُ", p: "Al-Khaliq", f: "Le Créateur", m: "Celui qui donne l'existence à partir du néant." }, { n: 12, a: "الْبَارِئُ", p: "Al-Bari'", f: "Le Novateur", m: "Celui qui façonne la création avec harmonie et perfection." }, { n: 13, a: "الْمُصَوِّرُ", p: "Al-Musawwir", f: "Le Façonneur", m: "Celui qui donne à chaque être sa forme et ses caractéristiques uniques." }, { n: 14, a: "الْغَفَّارُ", p: "Al-Ghaffar", f: "Le Pardonneur", m: "Celui qui pardonne inlassablement les fautes de Ses serviteurs." }, { n: 15, a: "الْقَهَّارُ", p: "Al-Qahhar", f: "Le Dominateur Suprême", m: "Celui devant la majesté de qui tout être est soumis." }, { n: 16, a: "الْوَهَّابُ", p: "Al-Wahhab", f: "Le Grand Donateur", m: "Celui qui comble de bienfaits sans rien attendre en retour." }, { n: 17, a: "الرَّزَّاقُ", p: "Ar-Razzaq", f: "Le Pourvoyeur", m: "Celui qui assure la subsistance de chaque être vivant." }, { n: 18, a: "الْفَتَّاحُ", p: "Al-Fattah", f: "Celui qui ouvre les portes", m: "Celui qui accorde la victoire et ouvre les trésors de Sa grâce." }, { n: 19, a: "الْعَلِيمُ", p: "Al-'Alim", f: "L'Omniscient", m: "Celui dont la science parfaite cerne toute chose passée, présente et future." }, { n: 20, a: "الْقَابِضُ", p: "Al-Qabid", f: "Celui qui retient", m: "Celui qui restreint la subsistance ou les âmes selon Sa sagesse." }, { n: 21, a: "الْبَاسِطُ", p: "Al-Basit", f: "Celui qui dilate", m: "Celui qui répand Ses bienfaits avec abondance et soulage les cœurs." }, { n: 22, a: "الْخَافِضُ", p: "Al-Khafid", f: "Celui qui abaisse", m: "Celui qui abaisse les oppresseurs et les orgueilleux." }, { n: 23, a: "الرَّافِعُ", p: "Ar-Rafi'", f: "Celui qui élève", m: "Celui qui élève en degrés les croyants et les humbles." }, { n: 24, a: "الْمُعِزُّ", p: "Al-Mu'izz", f: "Celui qui donne la puissance", m: "Celui qui accorde honneur, noblesse et victoire." }, { n: 25, a: "الْمُذِلُّ", p: "Al-Mudhill", f: "Celui qui humilie", m: "Celui qui prive d'honneur ceux qui se rebellent contre la vérité." }, { n: 26, a: "السَّمِيعُ", p: "As-Sami'", f: "L'Audient", m: "Celui qui entend toute parole, soupir et prière secrète." }, { n: 27, a: "الْبَصِيرُ", p: "Al-Basir", f: "Le Clairvoyant", m: "Celui qui voit toute chose, même la fourmi noire sur une pierre noire la nuit." }, { n: 28, a: "الْحَكَمُ", p: "Al-Hakam", f: "Le Juge Suprême", m: "L'Arbitre ultime dont les décrets sont pure justice." }, { n: 29, a: "الْعَدْلُ", p: "Al-'Adl", f: "Le Juste Absolu", m: "L'Équité absolue, exempt de toute injustice." }, { n: 30, a: "اللَّطِيفُ", p: "Al-Latif", f: "Le Subtil / Le Bienveillant", m: "Celui qui dispense Sa grâce par des voies secrètes et imperceptibles." }, { n: 31, a: "الْخَبِيرُ", p: "Al-Khabir", f: "Le Parfaitement Informé", m: "Celui qui connaît les secrets intimes de toute chose." }, { n: 32, a: "الْحَلِيمُ", p: "Al-Halim", f: "Le Très-Clément", m: "Celui qui ne se hâte pas de châtier et accorde le temps du repentir." }, { n: 33, a: "الْعَظِيمُ", p: "Al-'Azim", f: "L'Incommensurable", m: "Celui dont la grandeur dépasse toute compréhension." }, { n: 34, a: "الْغَفُورُ", p: "Al-Ghafur", f: "Le Tout-Pardonnant", m: "Celui qui efface abondamment les péchés et protège de leurs conséquences." }, { n: 35, a: "الشَّكُورُ", p: "Ash-Shakur", f: "Le Reconnaissant", m: "Celui qui récompense généreusement la moindre bonne action." }, { n: 36, a: "الْعَلِيُّ", p: "Al-'Aliyy", f: "Le Très-Haut", m: "L'Élevé au-dessus de tout, sans équivalent." }, { n: 37, a: "الْكَبِيرُ", p: "Al-Kabir", f: "L'Infiniment Grand", m: "Le Plus Grand que tout ce que l'on peut imaginer." }, { n: 38, a: "الْحَفِيظُ", p: "Al-Hafiz", f: "Le Préservateur", m: "Le Protecteur qui sauvegarde l'univers et les œuvres de Ses créatures." }, { n: 39, a: "الْمُقِيتُ", p: "Al-Muqit", f: "Le Nourricier", m: "Celui qui dispense à chaque corps et âme sa nourriture." }, { n: 40, a: "الْحَسِيبُ", p: "Al-Hasib", f: "Le Comptable", m: "Celui qui suffit à Ses serviteurs et tient compte de chaque acte." }, { n: 41, a: "الْجَلِيلُ", p: "Al-Jalil", f: "Le Majestueux", m: "Celui qui possède la beauté, la splendeur et la magnificence." }, { n: 42, a: "الْكَرِيمُ", p: "Al-Karim", f: "Le Noble Généreux", m: "Celui qui donne sans compter et pardonne avec bienveillance." }, { n: 43, a: "الرَّقِيبُ", p: "Ar-Raqib", f: "Le Vigilant", m: "Celui à qui aucun regard ni aucune pensée n'échappe." }, { n: 44, a: "الْمُجِيبُ", p: "Al-Mujib", f: "Celui qui exauce", m: "Celui qui répond avec amour à l'appel de celui qui L'invoque." }, { n: 45, a: "الْوَاسِعُ", p: "Al-Wasi'", f: "L'Immense", m: "Celui dont la miséricorde, la science et les bienfaits englobent tout." }, { n: 46, a: "الْحَكِيمُ", p: "Al-Hakim", f: "Le Sage", m: "Celui qui dispose toute chose avec une sagesse absolue." }, { n: 47, a: "الْوَدُودُ", p: "Al-Wadud", f: "Le Tout-Aimant", m: "Celui qui aime Ses pieux serviteurs et Se fait aimer d'eux." }, { n: 48, a: "الْمَجِيدُ", p: "Al-Majid", f: "Le Glorieux", m: "Le Très-Haut en gloire, en dignité et en générosité." }, { n: 49, a: "الْبَاعِثُ", p: "Al-Ba'ith", f: "Le Résurrecteur", m: "Celui qui ressuscitera les morts pour le Jugement dernier." }, { n: 50, a: "الشَّهِيدُ", p: "Ash-Shahid", f: "Le Témoin", m: "Celui qui est présent et témoin de toute parole et action." }, { n: 51, a: "الْحَقُّ", p: "Al-Haqq", f: "La Vérité Absolue", m: "L'Éternel dont l'existence et la parole sont la vérité immuable." }, { n: 52, a: "الْوَكِيلُ", p: "Al-Wakil", f: "Le Digne de confiance", m: "Le Garant suprême sur qui repose toute confiance sincère." }, { n: 53, a: "الْقَوِيُّ", p: "Al-Qawiyy", f: "Le Tout-Fort", m: "Celui dont la force est sans limite ni épuisement." }, { n: 54, a: "الْمَتِينُ", p: "Al-Matin", f: "L'Inébranlable", m: "L'Inaltérable qui n'éprouve aucune fatigue ni difficulté." }, { n: 55, a: "الْوَلِيُّ", p: "Al-Waliyy", f: "Le Protecteur Allié", m: "L'Ami intime et le Secoureur des croyants." }, { n: 56, a: "الْحَمِيدُ", p: "Al-Hamid", f: "Le Digne de louanges", m: "Celui qui est loué pour Son essence, Ses noms et Ses actes parfaits." }, { n: 57, a: "الْمُحْصِي", p: "Al-Muhsi", f: "Celui qui dénombre tout", m: "Celui dont la science compte précisément chaque souffle et poussière." }, { n: 58, a: "الْمُبْدِئُ", p: "Al-Mubdi'", f: "L'Auteur de la création", m: "Celui qui crée le premier sans modèle préexistant." }, { n: 59, a: "الْمُعِيدُ", p: "Al-Mu'id", f: "Celui qui réintègre", m: "Celui qui redonnera vie à la création après son anéantissement." }, { n: 60, a: "الْمُحْيِي", p: "Al-Muhyi", f: "Celui qui fait vivre", m: "Celui qui insuffle la vie dans les corps et vivifie les cœurs." }, { n: 61, a: "الْمُمِيتُ", p: "Al-Mumit", f: "Celui qui donne la mort", m: "Celui qui décrète le terme de chaque être vivant." }, { n: 62, a: "الْحَيُّ", p: "Al-Hayy", f: "Le Vivant Éternel", m: "Celui qui possède une vie parfaite sans commencement ni fin." }, { n: 63, a: "الْقَيُّومُ", p: "Al-Qayyum", f: "L'Immuable / L'Autonome", m: "Celui qui subsiste par Lui-même et par qui subsiste toute la création." }, { n: 64, a: "الْوَاجِدُ", p: "Al-Wajid", f: "L'Opulent", m: "Celui qui ne manque de rien et trouve tout ce qu'Il veut." }, { n: 65, a: "الْمَاجِدُ", p: "Al-Majid", f: "Le Noble", m: "Le Magnifique en bienfaits et en générosité." }, { n: 66, a: "الْوَاحِدُ", p: "Al-Wahid", f: "L'Unique", m: "L'Un sans second, sans égal et sans associé." }, { n: 67, a: "الْأَحَدُ", p: "Al-Ahad", f: "L'Un Absolu", m: "L'Unique dans Son essence et Ses attributs, indivisible." }, { n: 68, a: "الصَّمَدُ", p: "As-Samad", f: "Le Soutien Universel", m: "Celui dont toute la création a besoin et qui n'a besoin de rien." }, { n: 69, a: "الْقَادِرُ", p: "Al-Qadir", f: "Le Puissant", m: "Celui qui accomplit tout ce qu'Il décrète avec détermination." }, { n: 70, a: "الْمُقْتَدِرُ", p: "Al-Muqtadir", f: "L'Omnipotent", m: "Le Dominateur absolu dont la puissance prévaut sur tout." }, { n: 71, a: "الْمُقَدِّمُ", p: "Al-Muqaddim", f: "Celui qui avance", m: "Celui qui accorde priorité et avance les rangs selon Sa justice." }, { n: 72, a: "الْمُؤَخِّرُ", p: "Al-Mu'akhkhir", f: "Celui qui retarde", m: "Celui qui repousse et retarde les choses en leur temps fixé." }, { n: 73, a: "الْأَوَّلُ", p: "Al-Awwal", f: "Le Premier", m: "Celui avant qui rien n'existait, sans commencement." }, { n: 74, a: "الْآخِرُ", p: "Al-Akhir", f: "Le Dernier", m: "Celui après qui rien ne subsistera, l'Éternel." }, { n: 75, a: "الظَّاهِرُ", p: "Az-Zahir", f: "Le Manifeste", m: "Celui dont l'existence éclate à travers les signes de l'univers." }, { n: 76, a: "الْبَاطِنُ", p: "Al-Batin", f: "Le Caché", m: "L'Invisible aux yeux des mortels et le Connaisseur des secrets cachés." }, { n: 77, a: "الْوَالِي", p: "Al-Wali", f: "Le Gouverneur de l'Univers", m: "Le Maître qui gère et administre toute chose avec autorité." }, { n: 78, a: "الْمُتَعَالِي", p: "Al-Muta'ali", f: "Le Sublime", m: "L'Élevé au-dessus de toute ressemblance avec Sa création." }, { n: 79, a: "الْبَرُّ", p: "Al-Barr", f: "Le Bienfaisant", m: "La Source de toute bonté, douce compassion et piété." }, { n: 80, a: "التَّوَّابُ", p: "At-Tawwab", f: "L'Accueillant au repentir", m: "Celui qui agrée avec clémence le retour sincère du pécheur." }, { n: 81, a: "الْمُنْتَقِمُ", p: "Al-Muntaqim", f: "Le Justicier", m: "Celui qui brise les tyrans et châtie avec justice les rebelles." }, { n: 82, a: "الْعَفُوُّ", p: "Al-'Afuww", f: "L'Indulgent", m: "Celui qui efface totalement les fautes sans laisser de trace." }, { n: 83, a: "الرَّؤُوفُ", p: "Ar-Ra'uf", f: "Le Très-Bienveillant", m: "Celui dont la tendresse et la compassion sont extrêmes." }, { n: 84, a: "مَالِكُ الْمُلْكِ", p: "Malik-ul-Mulk", f: "Le Maître de la Royauté", m: "Le Détenteur souverain de tout le royaume des cieux et de la terre." }, { n: 85, a: "ذُو الْجَلَالِ وَالْإِكْرَامِ", p: "Dhul-Jalali wal-Ikram", f: "Détenteur de Majesté et Générosité", m: "Celui qui mérite d'être craint, glorifié et aimé par excellence." }, { n: 86, a: "الْمُقْسِطُ", p: "Al-Muqsit", f: "L'Équitable", m: "Celui qui rend justice aux opprimés et juge avec droiture." }, { n: 87, a: "الْجَامِعُ", p: "Al-Jami'", f: "Le Rassembleur", m: "Celui qui réunira l'humanité entière le Jour du Jugement." }, { n: 88, a: "الْغَنِيُّ", p: "Al-Ghaniyy", f: "Le Suffisant à Soi-même", m: "Le Riche absolu qui ne dépend de rien ni de personne." }, { n: 89, a: "الْمُغْنِي", p: "Al-Mughni", f: "Celui qui enrichit", m: "Celui qui accorde la richesse matérielle et la plénitude du cœur." }, { n: 90, a: "الْمَانِعُ", p: "Al-Mani'", f: "Le Défenseur", m: "Celui qui protège et empêche ce qui pourrait nuire selon Sa sagesse." }, { n: 91, a: "الضَّارُّ", p: "Ad-Darr", f: "Celui qui éprouve", m: "Le Maître de toute épreuve destinée à purifier et éveiller l'âme." }, { n: 92, a: "النَّافِعُ", p: "An-Nafi'", f: "La Source du bien", m: "Celui qui procure tout profit, guérison et bénéfice." }, { n: 93, a: "النُّورُ", p: "An-Nur", f: "La Lumière", m: "La Lumière des cieux et de la terre qui guide les égarés." }, { n: 94, a: "الْهَادِي", p: "Al-Hadi", f: "Le Guide Suprême", m: "Celui qui oriente les cœurs vers le chemin droit de la vérité." }, { n: 95, a: "الْبَدِيعُ", p: "Al-Badi'", f: "L'Incomparable Créateur", m: "Celui qui crée avec une beauté incomparable sans précédent." }, { n: 96, a: "الْبَاقِي", p: "Al-Baqi", f: "L'Éternel", m: "Celui qui subsistera pour toujours lorsque tout disparaîtra." }, { n: 97, a: "الْوَارِثُ", p: "Al-Warith", f: "L'Héritier Suprême", m: "Celui à qui reviendra toute la royauté à la fin des temps." }, { n: 98, a: "الرَّشِيدُ", p: "Ar-Rashid", f: "Le Guide Parfait", m: "Celui dont tous les desseins mènent à la rectitude absolue." }, { n: 99, a: "الصَّبُورُ", p: "As-Sabur", f: "Le Très-Patient", m: "Celui qui ne précipite rien et agit avec une infinie patience." }];
class ja {
  store;
  onSelectNameForFocus;
  constructor(e, t) {
    this.store = e, this.onSelectNameForFocus = t;
  }
  init() {
    f("names-close-btn").addEventListener("click", () => {
      this.close();
    }), f("names-search-input").addEventListener("input", (a) => {
      const r = a.target.value;
      this.filter(r);
    });
  }
  open() {
    const e = f("names-search-input");
    e.value = "", this.renderList(Be), Se("names-modal", "names-box");
  }
  close() {
    Ce("names-modal", "names-box");
  }
  filter(e) {
    const t = e.trim().toLowerCase();
    if (!t) {
      this.renderList(Be);
      return;
    }
    const a = Be.filter(
      (r) => r.p.toLowerCase().includes(t) || r.f.toLowerCase().includes(t) || r.m.toLowerCase().includes(t) || r.a.includes(t) || r.n.toString() === t
    );
    this.renderList(a);
  }
  renderList(e) {
    const t = f("names-list-container");
    if (t.innerHTML = "", e.length === 0) {
      t.innerHTML = `
        <div class="text-center py-8 text-textmuted text-xs">
          <i class="ph ph-magnifying-glass text-3xl mb-2 block"></i>
          Aucun Nom d'Allah ne correspond à votre recherche.
        </div>
      `;
      return;
    }
    for (const a of e) {
      const r = document.createElement("div");
      r.className = "p-3.5 rounded-2xl bg-surface/40 border border-bordercolor/60 flex items-center justify-between gap-3 hover:border-amber-500/30 transition-all", r.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/20 shrink-0">
            ${a.n}
          </div>
          <div>
            <div class="flex items-baseline gap-2">
              <span class="font-bold text-sm text-textmain">${ee(a.p)}</span>
              <span class="text-xs text-textmuted">· ${ee(a.f)}</span>
            </div>
            <p class="text-[11px] text-textmuted mt-0.5 leading-relaxed">${ee(a.m)}</p>
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <span class="font-arabic text-xl text-amber-400 font-bold px-1">${ee(a.a)}</span>
          <button class="btn-meditate-name px-2.5 py-1.5 rounded-xl bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/30 text-xs font-semibold flex items-center gap-1 tap-effect" title="Méditer et répéter en Tasbih">
            <i class="ph-fill ph-hands-praying text-xs"></i>
            <span>Tasbih</span>
          </button>
        </div>
      `, r.querySelector(".btn-meditate-name")?.addEventListener("click", () => {
        this.meditateName(a);
      }), t.appendChild(r);
    }
  }
  meditateName(e) {
    this.close();
    const t = `name_${e.n}`;
    let a = this.store.adhkars.find((r) => r.id === t);
    a || (a = {
      id: t,
      category: "daily",
      arabic: `يَا ${e.a.replace(/^ال/, "")}`,
      french: `Nom d'Allah : ${e.p}`,
      phonetic: `Yā ${e.p}`,
      translation: `${e.f} - ${e.m}`,
      merit: "« C'est à Allah qu'appartiennent les plus beaux Noms. Invoquez-Le par ces Noms. » (Sourate Al-A'raf, 180)",
      target: 33,
      targetLabel: "Boucle de 33"
    }, this.store.addOrUpdateCustomDhikr(a)), this.onSelectNameForFocus(a.id);
  }
}
const Na = Qe({
  french: Z().trim().min(2, "Le nom de l'invocation doit comporter au moins 2 caractères.").max(120, "Le nom de l'invocation ne doit pas dépasser 120 caractères."),
  arabic: Z().trim().max(1e3, "Le texte arabe ne doit pas dépasser 1000 caractères.").optional().or($e("")),
  phonetic: Z().trim().max(1e3, "La phonétique ne doit pas dépasser 1000 caractères.").optional().or($e("")),
  translation: Z().trim().max(1e3, "La traduction ne doit pas dépasser 1000 caractères.").optional().or($e("")),
  target: fe({ invalid_type_error: "L'objectif de répétition doit être un nombre." }).int("L'objectif doit être un entier.").min(1, "L'objectif doit être d'au moins 1 répétition.").max(1e4, "L'objectif ne peut pas dépasser 10 000 répétitions."),
  category: Ye(["daily", "morning_evening", "prayer", "sleep", "custom"], {
    errorMap: () => ({ message: "Catégorie sélectionnée invalide." })
  })
});
class Ra {
  store;
  editingId = null;
  constructor(e) {
    this.store = e;
  }
  init() {
    f("btn-open-add-modal").addEventListener("click", () => {
      this.open();
    }), f("add-close-btn").addEventListener("click", () => {
      this.close();
    }), f("add-save-btn").addEventListener("click", () => {
      this.save();
    });
  }
  open(e) {
    this.editingId = e || null;
    const t = f("add-modal-title"), a = f("add-title"), r = f("add-arabic"), i = f("add-phonetic"), o = f("add-translation"), l = f("add-target"), u = f("add-category");
    if (e) {
      const d = this.store.adhkars.find((v) => v.id === e);
      d && (t.textContent = "Modifier l'invocation", a.value = d.french, r.value = d.arabic || "", i.value = d.phonetic || "", o.value = d.translation || "", l.value = d.target.toString(), u.value = d.category);
    } else
      t.textContent = "Nouvelle Invocation", a.value = "", r.value = "", i.value = "", o.value = "", l.value = "100", u.value = "daily";
    Se("add-modal", "add-box");
  }
  close() {
    Ce("add-modal", "add-box"), this.editingId = null;
  }
  save() {
    const e = f("add-title"), t = f("add-arabic"), a = f("add-phonetic"), r = f("add-translation"), i = f("add-target"), o = f("add-category"), l = {
      french: e.value,
      arabic: t.value,
      phonetic: a.value,
      translation: r.value,
      target: parseInt(i.value, 10),
      category: o.value
    }, u = Na.safeParse(l);
    if (!u.success) {
      const N = u.error.errors[0]?.message || "Données invalides.";
      alert(`Erreur de validation : ${N}`);
      return;
    }
    const d = u.data, T = {
      id: this.editingId || `custom_${Date.now()}`,
      french: d.french,
      arabic: d.arabic || void 0,
      phonetic: d.phonetic || void 0,
      translation: d.translation || void 0,
      target: d.target,
      targetLabel: `Boucle de ${d.target}`,
      category: d.category
    };
    this.store.addOrUpdateCustomDhikr(T), this.close(), U.show(this.editingId ? "Invocation mise à jour !" : "Nouvelle invocation ajoutée !");
  }
}
class Pa {
  store;
  constructor(e) {
    this.store = e;
  }
  init() {
    f("btn-open-stats").addEventListener("click", () => {
      this.open();
    }), f("stats-close-btn").addEventListener("click", () => {
      this.close();
    });
  }
  open() {
    this.renderStats(), Se("stats-modal", "stats-box");
  }
  close() {
    Ce("stats-modal", "stats-box");
  }
  renderStats() {
    const e = f("stats-streak"), t = f("stats-lifetime"), a = f("stats-chart");
    e.textContent = this.store.streak.toString(), t.textContent = this.store.getLifetimeTotal().toLocaleString("fr-FR"), a.innerHTML = "";
    const r = [];
    for (let u = 6; u >= 0; u--) {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() - u), r.push(d.toISOString().slice(0, 10));
    }
    const i = r.map((u) => u === (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) ? this.store.getTodayTotal() : this.store.historyDays[u] || 0), o = Math.max(...i, 10), l = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    r.forEach((u, d) => {
      const v = i[d] || 0, T = Math.min(100, Math.max(8, v / o * 100)), N = new Date(u), B = l[N.getDay()] || "", G = d === 6, H = document.createElement("div");
      H.className = "flex-1 flex flex-col items-center gap-1.5 h-full justify-end", H.innerHTML = `
        <span class="text-[9px] font-bold text-textmuted tabular-nums">${v > 0 ? v > 999 ? (v / 1e3).toFixed(1) + "k" : v : ""}</span>
        <div class="w-full max-w-[28px] rounded-t-lg transition-all duration-500 ${G ? "bg-primary-500 shadow-neon" : "bg-surface border border-bordercolor"}" style="height: ${T}%;"></div>
        <span class="text-[10px] font-bold ${G ? "text-primary-400" : "text-textmuted"} uppercase">${B}</span>
      `, a.appendChild(H);
    });
  }
}
class $a {
  store;
  constructor(e) {
    this.store = e;
  }
  init() {
    f("btn-open-settings").addEventListener("click", () => {
      this.open();
    }), f("settings-close-btn").addEventListener("click", () => {
      this.close();
    }), document.querySelectorAll(".theme-card").forEach((N) => {
      N.addEventListener("click", () => {
        const B = N.getAttribute("data-theme");
        B && (this.store.setTheme(B), this.applyThemeDOM(B), this.updateThemeCards(B), U.show(`Thème ${B} appliqué`));
      });
    });
    const r = f("sound-toggle");
    r.checked = this.store.soundEnabled, r.addEventListener("change", () => {
      this.store.toggleSound();
    });
    const i = f("haptic-toggle");
    i.checked = this.store.hapticEnabled, i.addEventListener("change", () => {
      this.store.setHaptic(i.checked);
    });
    const o = f("auto-delay-select");
    o.value = this.store.autoDelayMs.toString(), o.addEventListener("change", () => {
      const N = parseInt(o.value, 10) || 2e3;
      this.store.setAutoDelay(N), U.show(`Délai réglé à ${N / 1e3}s`);
    }), f("btn-reset-all-daily").addEventListener("click", () => {
      confirm("Voulez-vous réinitialiser tous les compteurs du jour à zéro ?") && (this.store.resetAllDaily(), this.close(), U.show("Tous les compteurs du jour ont été remis à zéro"));
    }), f("btn-export-backup").addEventListener("click", () => {
      this.exportBackup();
    }), f("import-file-input").addEventListener("change", (N) => {
      const B = N.target.files?.[0];
      B && this.importBackup(B);
    });
    const v = f("pwa-install-container"), T = f("btn-pwa-install");
    Ke.onInstallableChange((N) => {
      N ? v.classList.remove("hidden") : v.classList.add("hidden");
    }), T.addEventListener("click", () => {
      Ke.promptInstall();
    }), this.applyThemeDOM(this.store.theme), this.updateThemeCards(this.store.theme);
  }
  open() {
    Se("settings-modal", "settings-box");
  }
  close() {
    Ce("settings-modal", "settings-box");
  }
  applyThemeDOM(e) {
    const t = document.documentElement;
    t.classList.remove("theme-emerald", "theme-medina", "theme-kaaba", "theme-oled"), t.classList.add(`theme-${e}`);
  }
  updateThemeCards(e) {
    document.querySelectorAll(".theme-card").forEach((a) => {
      a.getAttribute("data-theme") === e ? a.classList.add("border-primary-500", "ring-2", "ring-primary-500/30") : a.classList.remove("border-primary-500", "ring-2", "ring-primary-500/30");
    });
  }
  exportBackup() {
    const e = this.store.exportBackup(), t = JSON.stringify(e, null, 2), a = new Blob([t], { type: "application/json" }), r = URL.createObjectURL(a), i = document.createElement("a");
    i.href = r, i.download = `dhikr-pro-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, i.click(), URL.revokeObjectURL(r), U.show("Sauvegarde exportée avec succès ! 💾");
  }
  importBackup(e) {
    const t = new FileReader();
    t.onload = (a) => {
      try {
        const r = a.target?.result, i = q.validateAndParseBackup(r);
        confirm("Importer cette sauvegarde ? Vos données actuelles seront mises à jour.") && (this.store.importBackup(i), this.applyThemeDOM(this.store.theme), this.updateThemeCards(this.store.theme), this.close(), U.show("Données restaurées avec succès ! 🎉"));
      } catch (r) {
        const i = r instanceof Error ? r.message : "Fichier invalide.";
        alert(`Erreur d'importation : ${i}`);
      }
    }, t.readAsText(e);
  }
}
function St() {
  try {
    const s = me.getInstance();
    Ke.init();
    const e = new Oa(s);
    e.init();
    const t = new ja(s, (T) => {
      e.open(T);
    });
    t.init();
    const a = new Ra(s);
    a.init(), new Pa(s).init(), new $a(s).init(), new La(s).init(), new Ta(() => {
      t.open();
    }).init();
    const u = new Ea(s);
    u.init();
    const d = new Ia(s), v = new Da(s, {
      onOpenFocus: (T) => e.open(T),
      onEditCustom: (T) => a.open(T)
    });
    d.render(), u.render(), v.render(), s.subscribe(() => {
      d.render(), u.render(), v.render();
    }), console.log("[Dhikr Pro] Application modulaire v2 initialisée avec succès.");
  } catch (s) {
    console.error("[Dhikr Pro] Erreur fatale lors de l’initialisation:", s);
  }
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", St) : St();
