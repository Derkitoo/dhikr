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
], Gt = {
  storagePrefix: "dhikr_"
};
var I;
(function(i) {
  i.assertEqual = (r) => {
  };
  function e(r) {
  }
  i.assertIs = e;
  function t(r) {
    throw new Error();
  }
  i.assertNever = t, i.arrayToEnum = (r) => {
    const s = {};
    for (const l of r)
      s[l] = l;
    return s;
  }, i.getValidEnumValues = (r) => {
    const s = i.objectKeys(r).filter((o) => typeof r[r[o]] != "number"), l = {};
    for (const o of s)
      l[o] = r[o];
    return i.objectValues(l);
  }, i.objectValues = (r) => i.objectKeys(r).map(function(s) {
    return r[s];
  }), i.objectKeys = typeof Object.keys == "function" ? (r) => Object.keys(r) : (r) => {
    const s = [];
    for (const l in r)
      Object.prototype.hasOwnProperty.call(r, l) && s.push(l);
    return s;
  }, i.find = (r, s) => {
    for (const l of r)
      if (s(l))
        return l;
  }, i.isInteger = typeof Number.isInteger == "function" ? (r) => Number.isInteger(r) : (r) => typeof r == "number" && Number.isFinite(r) && Math.floor(r) === r;
  function a(r, s = " | ") {
    return r.map((l) => typeof l == "string" ? `'${l}'` : l).join(s);
  }
  i.joinValues = a, i.jsonStringifyReplacer = (r, s) => typeof s == "bigint" ? s.toString() : s;
})(I || (I = {}));
var lt;
(function(i) {
  i.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(lt || (lt = {}));
const f = I.arrayToEnum([
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
]), le = (i) => {
  switch (typeof i) {
    case "undefined":
      return f.undefined;
    case "string":
      return f.string;
    case "number":
      return Number.isNaN(i) ? f.nan : f.number;
    case "boolean":
      return f.boolean;
    case "function":
      return f.function;
    case "bigint":
      return f.bigint;
    case "symbol":
      return f.symbol;
    case "object":
      return Array.isArray(i) ? f.array : i === null ? f.null : i.then && typeof i.then == "function" && i.catch && typeof i.catch == "function" ? f.promise : typeof Map < "u" && i instanceof Map ? f.map : typeof Set < "u" && i instanceof Set ? f.set : typeof Date < "u" && i instanceof Date ? f.date : f.object;
    default:
      return f.unknown;
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
class ne extends Error {
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
    const t = e || function(s) {
      return s.message;
    }, a = { _errors: [] }, r = (s) => {
      for (const l of s.issues)
        if (l.code === "invalid_union")
          l.unionErrors.map(r);
        else if (l.code === "invalid_return_type")
          r(l.returnTypeError);
        else if (l.code === "invalid_arguments")
          r(l.argumentsError);
        else if (l.path.length === 0)
          a._errors.push(t(l));
        else {
          let o = a, d = 0;
          for (; d < l.path.length; ) {
            const c = l.path[d];
            d === l.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(t(l))) : o[c] = o[c] || { _errors: [] }, o = o[c], d++;
          }
        }
    };
    return r(this), a;
  }
  static assert(e) {
    if (!(e instanceof ne))
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
        const s = r.path[0];
        t[s] = t[s] || [], t[s].push(e(r));
      } else
        a.push(e(r));
    return { formErrors: a, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
ne.create = (i) => new ne(i);
const ze = (i, e) => {
  let t;
  switch (i.code) {
    case h.invalid_type:
      i.received === f.undefined ? t = "Required" : t = `Expected ${i.expected}, received ${i.received}`;
      break;
    case h.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(i.expected, I.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${I.joinValues(i.keys, ", ")}`;
      break;
    case h.invalid_union:
      t = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${I.joinValues(i.options)}`;
      break;
    case h.invalid_enum_value:
      t = `Invalid enum value. Expected ${I.joinValues(i.options)}, received '${i.received}'`;
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
      typeof i.validation == "object" ? "includes" in i.validation ? (t = `Invalid input: must include "${i.validation.includes}"`, typeof i.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${i.validation.position}`)) : "startsWith" in i.validation ? t = `Invalid input: must start with "${i.validation.startsWith}"` : "endsWith" in i.validation ? t = `Invalid input: must end with "${i.validation.endsWith}"` : I.assertNever(i.validation) : i.validation !== "regex" ? t = `Invalid ${i.validation}` : t = "Invalid";
      break;
    case h.too_small:
      i.type === "array" ? t = `Array must contain ${i.exact ? "exactly" : i.inclusive ? "at least" : "more than"} ${i.minimum} element(s)` : i.type === "string" ? t = `String must contain ${i.exact ? "exactly" : i.inclusive ? "at least" : "over"} ${i.minimum} character(s)` : i.type === "number" ? t = `Number must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${i.minimum}` : i.type === "bigint" ? t = `Number must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${i.minimum}` : i.type === "date" ? t = `Date must be ${i.exact ? "exactly equal to " : i.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(i.minimum))}` : t = "Invalid input";
      break;
    case h.too_big:
      i.type === "array" ? t = `Array must contain ${i.exact ? "exactly" : i.inclusive ? "at most" : "less than"} ${i.maximum} element(s)` : i.type === "string" ? t = `String must contain ${i.exact ? "exactly" : i.inclusive ? "at most" : "under"} ${i.maximum} character(s)` : i.type === "number" ? t = `Number must be ${i.exact ? "exactly" : i.inclusive ? "less than or equal to" : "less than"} ${i.maximum}` : i.type === "bigint" ? t = `BigInt must be ${i.exact ? "exactly" : i.inclusive ? "less than or equal to" : "less than"} ${i.maximum}` : i.type === "date" ? t = `Date must be ${i.exact ? "exactly" : i.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(i.maximum))}` : t = "Invalid input";
      break;
    case h.custom:
      t = "Invalid input";
      break;
    case h.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case h.not_multiple_of:
      t = `Number must be a multiple of ${i.multipleOf}`;
      break;
    case h.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, I.assertNever(i);
  }
  return { message: t };
};
let Ut = ze;
function Qt() {
  return Ut;
}
const Kt = (i) => {
  const { data: e, path: t, errorMaps: a, issueData: r } = i, s = [...t, ...r.path || []], l = {
    ...r,
    path: s
  };
  if (r.message !== void 0)
    return {
      ...r,
      path: s,
      message: r.message
    };
  let o = "";
  const d = a.filter((c) => !!c).slice().reverse();
  for (const c of d)
    o = c(l, { data: e, defaultError: o }).message;
  return {
    ...r,
    path: s,
    message: o
  };
};
function p(i, e) {
  const t = Qt(), a = Kt({
    issueData: e,
    data: i.data,
    path: i.path,
    errorMaps: [
      i.common.contextualErrorMap,
      // contextual error map is first priority
      i.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === ze ? void 0 : ze
      // then global default map
    ].filter((r) => !!r)
  });
  i.common.issues.push(a);
}
class Z {
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
        return S;
      r.status === "dirty" && e.dirty(), a.push(r.value);
    }
    return { status: e.value, value: a };
  }
  static async mergeObjectAsync(e, t) {
    const a = [];
    for (const r of t) {
      const s = await r.key, l = await r.value;
      a.push({
        key: s,
        value: l
      });
    }
    return Z.mergeObjectSync(e, a);
  }
  static mergeObjectSync(e, t) {
    const a = {};
    for (const r of t) {
      const { key: s, value: l } = r;
      if (s.status === "aborted" || l.status === "aborted")
        return S;
      s.status === "dirty" && e.dirty(), l.status === "dirty" && e.dirty(), s.value !== "__proto__" && (typeof l.value < "u" || r.alwaysSet) && (a[s.value] = l.value);
    }
    return { status: e.value, value: a };
  }
}
const S = Object.freeze({
  status: "aborted"
}), Se = (i) => ({ status: "dirty", value: i }), U = (i) => ({ status: "valid", value: i }), ot = (i) => i.status === "aborted", ut = (i) => i.status === "dirty", fe = (i) => i.status === "valid", we = (i) => typeof Promise < "u" && i instanceof Promise;
var g;
(function(i) {
  i.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, i.toString = (e) => typeof e == "string" ? e : e?.message;
})(g || (g = {}));
class ae {
  constructor(e, t, a, r) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = a, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const dt = (i, e) => {
  if (fe(e))
    return { success: !0, data: e.value };
  if (!i.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new ne(i.common.issues);
      return this._error = t, this._error;
    }
  };
};
function q(i) {
  if (!i)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: a, description: r } = i;
  if (e && (t || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: r } : { errorMap: (l, o) => {
    const { message: d } = i;
    return l.code === "invalid_enum_value" ? { message: d ?? o.defaultError } : typeof o.data > "u" ? { message: d ?? a ?? o.defaultError } : l.code !== "invalid_type" ? { message: o.defaultError } : { message: d ?? t ?? o.defaultError };
  }, description: r };
}
class w {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return le(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: le(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Z(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: le(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (we(t))
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
      parsedType: le(e)
    }, r = this._parseSync({ data: e, path: a.path, parent: a });
    return dt(a, r);
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
      parsedType: le(e)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: e, path: [], parent: t });
        return fe(a) ? {
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
    return this._parseAsync({ data: e, path: [], parent: t }).then((a) => fe(a) ? {
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
      parsedType: le(e)
    }, r = this._parse({ data: e, path: a.path, parent: a }), s = await (we(r) ? r : Promise.resolve(r));
    return dt(a, s);
  }
  refine(e, t) {
    const a = (r) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(r) : t;
    return this._refinement((r, s) => {
      const l = e(r), o = () => s.addIssue({
        code: h.custom,
        ...a(r)
      });
      return typeof Promise < "u" && l instanceof Promise ? l.then((d) => d ? !0 : (o(), !1)) : l ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((a, r) => e(a) ? !0 : (r.addIssue(typeof t == "function" ? t(a, r) : t), !1));
  }
  _refinement(e) {
    return new be({
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
    return oe.create(this, this._def);
  }
  nullable() {
    return ye.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return te.create(this);
  }
  promise() {
    return Pe.create(this, this._def);
  }
  or(e) {
    return Te.create([this, e], this._def);
  }
  and(e) {
    return Ie.create(this, e, this._def);
  }
  transform(e) {
    return new be({
      ...q(this._def),
      schema: this,
      typeName: x.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Ze({
      ...q(this._def),
      innerType: this,
      defaultValue: t,
      typeName: x.ZodDefault
    });
  }
  brand() {
    return new xa({
      typeName: x.ZodBranded,
      type: this,
      ...q(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new Je({
      ...q(this._def),
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
    return Qe.create(this, e);
  }
  readonly() {
    return Ve.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Yt = /^c[^\s-]{8,}$/i, Xt = /^[0-9a-z]+$/, ea = /^[0-9A-HJKMNP-TV-Z]{26}$/i, ta = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, aa = /^[a-z0-9_-]{21}$/i, ra = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ia = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, sa = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, na = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Re;
const la = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, oa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ua = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, da = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ca = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, ha = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, _t = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", ma = new RegExp(`^${_t}$`);
function Lt(i) {
  let e = "[0-5]\\d";
  i.precision ? e = `${e}\\.\\d{${i.precision}}` : i.precision == null && (e = `${e}(\\.\\d+)?`);
  const t = i.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function pa(i) {
  return new RegExp(`^${Lt(i)}$`);
}
function fa(i) {
  let e = `${_t}T${Lt(i)}`;
  const t = [];
  return t.push(i.local ? "Z?" : "Z"), i.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function ga(i, e) {
  return !!((e === "v4" || !e) && la.test(i) || (e === "v6" || !e) && ua.test(i));
}
function va(i, e) {
  if (!ra.test(i))
    return !1;
  try {
    const [t] = i.split(".");
    if (!t)
      return !1;
    const a = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), r = JSON.parse(atob(a));
    return !(typeof r != "object" || r === null || "typ" in r && r?.typ !== "JWT" || !r.alg || e && r.alg !== e);
  } catch {
    return !1;
  }
}
function ba(i, e) {
  return !!((e === "v4" || !e) && oa.test(i) || (e === "v6" || !e) && da.test(i));
}
class se extends w {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== f.string) {
      const s = this._getOrReturnCtx(e);
      return p(s, {
        code: h.invalid_type,
        expected: f.string,
        received: s.parsedType
      }), S;
    }
    const a = new Z();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (r = this._getOrReturnCtx(e, r), p(r, {
          code: h.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "length") {
        const l = e.data.length > s.value, o = e.data.length < s.value;
        (l || o) && (r = this._getOrReturnCtx(e, r), l ? p(r, {
          code: h.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && p(r, {
          code: h.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), a.dirty());
      } else if (s.kind === "email")
        sa.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "email",
          code: h.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "emoji")
        Re || (Re = new RegExp(na, "u")), Re.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "emoji",
          code: h.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "uuid")
        ta.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "uuid",
          code: h.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "nanoid")
        aa.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "nanoid",
          code: h.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid")
        Yt.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "cuid",
          code: h.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid2")
        Xt.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "cuid2",
          code: h.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "ulid")
        ea.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
          validation: "ulid",
          code: h.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          r = this._getOrReturnCtx(e, r), p(r, {
            validation: "url",
            code: h.invalid_string,
            message: s.message
          }), a.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
        validation: "regex",
        code: h.invalid_string,
        message: s.message
      }), a.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), a.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), a.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), a.dirty()) : s.kind === "datetime" ? fa(s).test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.invalid_string,
        validation: "datetime",
        message: s.message
      }), a.dirty()) : s.kind === "date" ? ma.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.invalid_string,
        validation: "date",
        message: s.message
      }), a.dirty()) : s.kind === "time" ? pa(s).test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.invalid_string,
        validation: "time",
        message: s.message
      }), a.dirty()) : s.kind === "duration" ? ia.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
        validation: "duration",
        code: h.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "ip" ? ga(e.data, s.version) || (r = this._getOrReturnCtx(e, r), p(r, {
        validation: "ip",
        code: h.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "jwt" ? va(e.data, s.alg) || (r = this._getOrReturnCtx(e, r), p(r, {
        validation: "jwt",
        code: h.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "cidr" ? ba(e.data, s.version) || (r = this._getOrReturnCtx(e, r), p(r, {
        validation: "cidr",
        code: h.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "base64" ? ca.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
        validation: "base64",
        code: h.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "base64url" ? ha.test(e.data) || (r = this._getOrReturnCtx(e, r), p(r, {
        validation: "base64url",
        code: h.invalid_string,
        message: s.message
      }), a.dirty()) : I.assertNever(s);
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
se.create = (i) => new se({
  checks: [],
  typeName: x.ZodString,
  coerce: i?.coerce ?? !1,
  ...q(i)
});
function ya(i, e) {
  const t = (i.toString().split(".")[1] || "").length, a = (e.toString().split(".")[1] || "").length, r = t > a ? t : a, s = Number.parseInt(i.toFixed(r).replace(".", "")), l = Number.parseInt(e.toFixed(r).replace(".", ""));
  return s % l / 10 ** r;
}
class ge extends w {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== f.number) {
      const s = this._getOrReturnCtx(e);
      return p(s, {
        code: h.invalid_type,
        expected: f.number,
        received: s.parsedType
      }), S;
    }
    let a;
    const r = new Z();
    for (const s of this._def.checks)
      s.kind === "int" ? I.isInteger(e.data) || (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? ya(e.data, s.value) !== 0 && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.not_finite,
        message: s.message
      }), r.dirty()) : I.assertNever(s);
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
ge.create = (i) => new ge({
  checks: [],
  typeName: x.ZodNumber,
  coerce: i?.coerce || !1,
  ...q(i)
});
class ke extends w {
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
    if (this._getType(e) !== f.bigint)
      return this._getInvalidInput(e);
    let a;
    const r = new Z();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (a = this._getOrReturnCtx(e, a), p(a, {
        code: h.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : I.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return p(t, {
      code: h.invalid_type,
      expected: f.bigint,
      received: t.parsedType
    }), S;
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
ke.create = (i) => new ke({
  checks: [],
  typeName: x.ZodBigInt,
  coerce: i?.coerce ?? !1,
  ...q(i)
});
class ct extends w {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== f.boolean) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: f.boolean,
        received: a.parsedType
      }), S;
    }
    return U(e.data);
  }
}
ct.create = (i) => new ct({
  typeName: x.ZodBoolean,
  coerce: i?.coerce || !1,
  ...q(i)
});
class Me extends w {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== f.date) {
      const s = this._getOrReturnCtx(e);
      return p(s, {
        code: h.invalid_type,
        expected: f.date,
        received: s.parsedType
      }), S;
    }
    if (Number.isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return p(s, {
        code: h.invalid_date
      }), S;
    }
    const a = new Z();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), a.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (r = this._getOrReturnCtx(e, r), p(r, {
        code: h.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), a.dirty()) : I.assertNever(s);
    return {
      status: a.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Me({
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
Me.create = (i) => new Me({
  checks: [],
  coerce: i?.coerce || !1,
  typeName: x.ZodDate,
  ...q(i)
});
class ht extends w {
  _parse(e) {
    if (this._getType(e) !== f.symbol) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: f.symbol,
        received: a.parsedType
      }), S;
    }
    return U(e.data);
  }
}
ht.create = (i) => new ht({
  typeName: x.ZodSymbol,
  ...q(i)
});
class mt extends w {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: f.undefined,
        received: a.parsedType
      }), S;
    }
    return U(e.data);
  }
}
mt.create = (i) => new mt({
  typeName: x.ZodUndefined,
  ...q(i)
});
class pt extends w {
  _parse(e) {
    if (this._getType(e) !== f.null) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: f.null,
        received: a.parsedType
      }), S;
    }
    return U(e.data);
  }
}
pt.create = (i) => new pt({
  typeName: x.ZodNull,
  ...q(i)
});
class ft extends w {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return U(e.data);
  }
}
ft.create = (i) => new ft({
  typeName: x.ZodAny,
  ...q(i)
});
class gt extends w {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return U(e.data);
  }
}
gt.create = (i) => new gt({
  typeName: x.ZodUnknown,
  ...q(i)
});
class ue extends w {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return p(t, {
      code: h.invalid_type,
      expected: f.never,
      received: t.parsedType
    }), S;
  }
}
ue.create = (i) => new ue({
  typeName: x.ZodNever,
  ...q(i)
});
class vt extends w {
  _parse(e) {
    if (this._getType(e) !== f.undefined) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: f.void,
        received: a.parsedType
      }), S;
    }
    return U(e.data);
  }
}
vt.create = (i) => new vt({
  typeName: x.ZodVoid,
  ...q(i)
});
class te extends w {
  _parse(e) {
    const { ctx: t, status: a } = this._processInputParams(e), r = this._def;
    if (t.parsedType !== f.array)
      return p(t, {
        code: h.invalid_type,
        expected: f.array,
        received: t.parsedType
      }), S;
    if (r.exactLength !== null) {
      const l = t.data.length > r.exactLength.value, o = t.data.length < r.exactLength.value;
      (l || o) && (p(t, {
        code: l ? h.too_big : h.too_small,
        minimum: o ? r.exactLength.value : void 0,
        maximum: l ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), a.dirty());
    }
    if (r.minLength !== null && t.data.length < r.minLength.value && (p(t, {
      code: h.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), a.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (p(t, {
      code: h.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), a.dirty()), t.common.async)
      return Promise.all([...t.data].map((l, o) => r.type._parseAsync(new ae(t, l, t.path, o)))).then((l) => Z.mergeArray(a, l));
    const s = [...t.data].map((l, o) => r.type._parseSync(new ae(t, l, t.path, o)));
    return Z.mergeArray(a, s);
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
te.create = (i, e) => new te({
  type: i,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: x.ZodArray,
  ...q(e)
});
function he(i) {
  if (i instanceof B) {
    const e = {};
    for (const t in i.shape) {
      const a = i.shape[t];
      e[t] = oe.create(he(a));
    }
    return new B({
      ...i._def,
      shape: () => e
    });
  } else return i instanceof te ? new te({
    ...i._def,
    type: he(i.element)
  }) : i instanceof oe ? oe.create(he(i.unwrap())) : i instanceof ye ? ye.create(he(i.unwrap())) : i instanceof ce ? ce.create(i.items.map((e) => he(e))) : i;
}
class B extends w {
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
    if (this._getType(e) !== f.object) {
      const c = this._getOrReturnCtx(e);
      return p(c, {
        code: h.invalid_type,
        expected: f.object,
        received: c.parsedType
      }), S;
    }
    const { status: a, ctx: r } = this._processInputParams(e), { shape: s, keys: l } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof ue && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        l.includes(c) || o.push(c);
    const d = [];
    for (const c of l) {
      const v = s[c], M = r.data[c];
      d.push({
        key: { status: "valid", value: c },
        value: v._parse(new ae(r, M, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof ue) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const v of o)
          d.push({
            key: { status: "valid", value: v },
            value: { status: "valid", value: r.data[v] }
          });
      else if (c === "strict")
        o.length > 0 && (p(r, {
          code: h.unrecognized_keys,
          keys: o
        }), a.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const v of o) {
        const M = r.data[v];
        d.push({
          key: { status: "valid", value: v },
          value: c._parse(
            new ae(r, M, r.path, v)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: v in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const v of d) {
        const M = await v.key, E = await v.value;
        c.push({
          key: M,
          value: E,
          alwaysSet: v.alwaysSet
        });
      }
      return c;
    }).then((c) => Z.mergeObjectSync(a, c)) : Z.mergeObjectSync(a, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return g.errToObj, new B({
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
    return new B({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new B({
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
    return new B({
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
    return new B({
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
    return new B({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    for (const a of I.objectKeys(e))
      e[a] && this.shape[a] && (t[a] = this.shape[a]);
    return new B({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    for (const a of I.objectKeys(this.shape))
      e[a] || (t[a] = this.shape[a]);
    return new B({
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
    return new B({
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
        let s = this.shape[a];
        for (; s instanceof oe; )
          s = s._def.innerType;
        t[a] = s;
      }
    return new B({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ct(I.objectKeys(this.shape));
  }
}
B.create = (i, e) => new B({
  shape: () => i,
  unknownKeys: "strip",
  catchall: ue.create(),
  typeName: x.ZodObject,
  ...q(e)
});
B.strictCreate = (i, e) => new B({
  shape: () => i,
  unknownKeys: "strict",
  catchall: ue.create(),
  typeName: x.ZodObject,
  ...q(e)
});
B.lazycreate = (i, e) => new B({
  shape: i,
  unknownKeys: "strip",
  catchall: ue.create(),
  typeName: x.ZodObject,
  ...q(e)
});
class Te extends w {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), a = this._def.options;
    function r(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      const l = s.map((o) => new ne(o.ctx.common.issues));
      return p(t, {
        code: h.invalid_union,
        unionErrors: l
      }), S;
    }
    if (t.common.async)
      return Promise.all(a.map(async (s) => {
        const l = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: t.data,
            path: t.path,
            parent: l
          }),
          ctx: l
        };
      })).then(r);
    {
      let s;
      const l = [];
      for (const d of a) {
        const c = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, v = d._parseSync({
          data: t.data,
          path: t.path,
          parent: c
        });
        if (v.status === "valid")
          return v;
        v.status === "dirty" && !s && (s = { result: v, ctx: c }), c.common.issues.length && l.push(c.common.issues);
      }
      if (s)
        return t.common.issues.push(...s.ctx.common.issues), s.result;
      const o = l.map((d) => new ne(d));
      return p(t, {
        code: h.invalid_union,
        unionErrors: o
      }), S;
    }
  }
  get options() {
    return this._def.options;
  }
}
Te.create = (i, e) => new Te({
  options: i,
  typeName: x.ZodUnion,
  ...q(e)
});
function Fe(i, e) {
  const t = le(i), a = le(e);
  if (i === e)
    return { valid: !0, data: i };
  if (t === f.object && a === f.object) {
    const r = I.objectKeys(e), s = I.objectKeys(i).filter((o) => r.indexOf(o) !== -1), l = { ...i, ...e };
    for (const o of s) {
      const d = Fe(i[o], e[o]);
      if (!d.valid)
        return { valid: !1 };
      l[o] = d.data;
    }
    return { valid: !0, data: l };
  } else if (t === f.array && a === f.array) {
    if (i.length !== e.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < i.length; s++) {
      const l = i[s], o = e[s], d = Fe(l, o);
      if (!d.valid)
        return { valid: !1 };
      r.push(d.data);
    }
    return { valid: !0, data: r };
  } else return t === f.date && a === f.date && +i == +e ? { valid: !0, data: i } : { valid: !1 };
}
class Ie extends w {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e), r = (s, l) => {
      if (ot(s) || ot(l))
        return S;
      const o = Fe(s.value, l.value);
      return o.valid ? ((ut(s) || ut(l)) && t.dirty(), { status: t.value, value: o.data }) : (p(a, {
        code: h.invalid_intersection_types
      }), S);
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
    ]).then(([s, l]) => r(s, l)) : r(this._def.left._parseSync({
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
Ie.create = (i, e, t) => new Ie({
  left: i,
  right: e,
  typeName: x.ZodIntersection,
  ...q(t)
});
class ce extends w {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== f.array)
      return p(a, {
        code: h.invalid_type,
        expected: f.array,
        received: a.parsedType
      }), S;
    if (a.data.length < this._def.items.length)
      return p(a, {
        code: h.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), S;
    !this._def.rest && a.data.length > this._def.items.length && (p(a, {
      code: h.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const s = [...a.data].map((l, o) => {
      const d = this._def.items[o] || this._def.rest;
      return d ? d._parse(new ae(a, l, a.path, o)) : null;
    }).filter((l) => !!l);
    return a.common.async ? Promise.all(s).then((l) => Z.mergeArray(t, l)) : Z.mergeArray(t, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ce({
      ...this._def,
      rest: e
    });
  }
}
ce.create = (i, e) => {
  if (!Array.isArray(i))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ce({
    items: i,
    typeName: x.ZodTuple,
    rest: null,
    ...q(e)
  });
};
class Ee extends w {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== f.object)
      return p(a, {
        code: h.invalid_type,
        expected: f.object,
        received: a.parsedType
      }), S;
    const r = [], s = this._def.keyType, l = this._def.valueType;
    for (const o in a.data)
      r.push({
        key: s._parse(new ae(a, o, a.path, o)),
        value: l._parse(new ae(a, a.data[o], a.path, o)),
        alwaysSet: o in a.data
      });
    return a.common.async ? Z.mergeObjectAsync(t, r) : Z.mergeObjectSync(t, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, a) {
    return t instanceof w ? new Ee({
      keyType: e,
      valueType: t,
      typeName: x.ZodRecord,
      ...q(a)
    }) : new Ee({
      keyType: se.create(),
      valueType: e,
      typeName: x.ZodRecord,
      ...q(t)
    });
  }
}
class bt extends w {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== f.map)
      return p(a, {
        code: h.invalid_type,
        expected: f.map,
        received: a.parsedType
      }), S;
    const r = this._def.keyType, s = this._def.valueType, l = [...a.data.entries()].map(([o, d], c) => ({
      key: r._parse(new ae(a, o, a.path, [c, "key"])),
      value: s._parse(new ae(a, d, a.path, [c, "value"]))
    }));
    if (a.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const d of l) {
          const c = await d.key, v = await d.value;
          if (c.status === "aborted" || v.status === "aborted")
            return S;
          (c.status === "dirty" || v.status === "dirty") && t.dirty(), o.set(c.value, v.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const d of l) {
        const c = d.key, v = d.value;
        if (c.status === "aborted" || v.status === "aborted")
          return S;
        (c.status === "dirty" || v.status === "dirty") && t.dirty(), o.set(c.value, v.value);
      }
      return { status: t.value, value: o };
    }
  }
}
bt.create = (i, e, t) => new bt({
  valueType: e,
  keyType: i,
  typeName: x.ZodMap,
  ...q(t)
});
class _e extends w {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== f.set)
      return p(a, {
        code: h.invalid_type,
        expected: f.set,
        received: a.parsedType
      }), S;
    const r = this._def;
    r.minSize !== null && a.data.size < r.minSize.value && (p(a, {
      code: h.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), t.dirty()), r.maxSize !== null && a.data.size > r.maxSize.value && (p(a, {
      code: h.too_big,
      maximum: r.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.maxSize.message
    }), t.dirty());
    const s = this._def.valueType;
    function l(d) {
      const c = /* @__PURE__ */ new Set();
      for (const v of d) {
        if (v.status === "aborted")
          return S;
        v.status === "dirty" && t.dirty(), c.add(v.value);
      }
      return { status: t.value, value: c };
    }
    const o = [...a.data.values()].map((d, c) => s._parse(new ae(a, d, a.path, c)));
    return a.common.async ? Promise.all(o).then((d) => l(d)) : l(o);
  }
  min(e, t) {
    return new _e({
      ...this._def,
      minSize: { value: e, message: g.toString(t) }
    });
  }
  max(e, t) {
    return new _e({
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
_e.create = (i, e) => new _e({
  valueType: i,
  minSize: null,
  maxSize: null,
  typeName: x.ZodSet,
  ...q(e)
});
class yt extends w {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
yt.create = (i, e) => new yt({
  getter: i,
  typeName: x.ZodLazy,
  ...q(e)
});
class He extends w {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return p(t, {
        received: t.data,
        code: h.invalid_literal,
        expected: this._def.value
      }), S;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
He.create = (i, e) => new He({
  value: i,
  typeName: x.ZodLiteral,
  ...q(e)
});
function Ct(i, e) {
  return new ve({
    values: i,
    typeName: x.ZodEnum,
    ...q(e)
  });
}
class ve extends w {
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), a = this._def.values;
      return p(t, {
        expected: I.joinValues(a),
        received: t.parsedType,
        code: h.invalid_type
      }), S;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      const t = this._getOrReturnCtx(e), a = this._def.values;
      return p(t, {
        received: t.data,
        code: h.invalid_enum_value,
        options: a
      }), S;
    }
    return U(e.data);
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
ve.create = Ct;
class xt extends w {
  _parse(e) {
    const t = I.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(e);
    if (a.parsedType !== f.string && a.parsedType !== f.number) {
      const r = I.objectValues(t);
      return p(a, {
        expected: I.joinValues(r),
        received: a.parsedType,
        code: h.invalid_type
      }), S;
    }
    if (this._cache || (this._cache = new Set(I.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      const r = I.objectValues(t);
      return p(a, {
        received: a.data,
        code: h.invalid_enum_value,
        options: r
      }), S;
    }
    return U(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
xt.create = (i, e) => new xt({
  values: i,
  typeName: x.ZodNativeEnum,
  ...q(e)
});
class Pe extends w {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== f.promise && t.common.async === !1)
      return p(t, {
        code: h.invalid_type,
        expected: f.promise,
        received: t.parsedType
      }), S;
    const a = t.parsedType === f.promise ? t.data : Promise.resolve(t.data);
    return U(a.then((r) => this._def.type.parseAsync(r, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Pe.create = (i, e) => new Pe({
  type: i,
  typeName: x.ZodPromise,
  ...q(e)
});
class be extends w {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === x.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e), r = this._def.effect || null, s = {
      addIssue: (l) => {
        p(a, l), l.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), r.type === "preprocess") {
      const l = r.transform(a.data, s);
      if (a.common.async)
        return Promise.resolve(l).then(async (o) => {
          if (t.value === "aborted")
            return S;
          const d = await this._def.schema._parseAsync({
            data: o,
            path: a.path,
            parent: a
          });
          return d.status === "aborted" ? S : d.status === "dirty" || t.value === "dirty" ? Se(d.value) : d;
        });
      {
        if (t.value === "aborted")
          return S;
        const o = this._def.schema._parseSync({
          data: l,
          path: a.path,
          parent: a
        });
        return o.status === "aborted" ? S : o.status === "dirty" || t.value === "dirty" ? Se(o.value) : o;
      }
    }
    if (r.type === "refinement") {
      const l = (o) => {
        const d = r.refinement(o, s);
        if (a.common.async)
          return Promise.resolve(d);
        if (d instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return o.status === "aborted" ? S : (o.status === "dirty" && t.dirty(), l(o.value), { status: t.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => o.status === "aborted" ? S : (o.status === "dirty" && t.dirty(), l(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (r.type === "transform")
      if (a.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!fe(l))
          return S;
        const o = r.transform(l.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((l) => fe(l) ? Promise.resolve(r.transform(l.value, s)).then((o) => ({
          status: t.value,
          value: o
        })) : S);
    I.assertNever(r);
  }
}
be.create = (i, e, t) => new be({
  schema: i,
  typeName: x.ZodEffects,
  effect: e,
  ...q(t)
});
be.createWithPreprocess = (i, e, t) => new be({
  schema: e,
  effect: { type: "preprocess", transform: i },
  typeName: x.ZodEffects,
  ...q(t)
});
class oe extends w {
  _parse(e) {
    return this._getType(e) === f.undefined ? U(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
oe.create = (i, e) => new oe({
  innerType: i,
  typeName: x.ZodOptional,
  ...q(e)
});
class ye extends w {
  _parse(e) {
    return this._getType(e) === f.null ? U(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ye.create = (i, e) => new ye({
  innerType: i,
  typeName: x.ZodNullable,
  ...q(e)
});
class Ze extends w {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let a = t.data;
    return t.parsedType === f.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ze.create = (i, e) => new Ze({
  innerType: i,
  typeName: x.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...q(e)
});
class Je extends w {
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
    return we(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new ne(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new ne(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Je.create = (i, e) => new Je({
  innerType: i,
  typeName: x.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...q(e)
});
class At extends w {
  _parse(e) {
    if (this._getType(e) !== f.nan) {
      const a = this._getOrReturnCtx(e);
      return p(a, {
        code: h.invalid_type,
        expected: f.nan,
        received: a.parsedType
      }), S;
    }
    return { status: "valid", value: e.data };
  }
}
At.create = (i) => new At({
  typeName: x.ZodNaN,
  ...q(i)
});
class xa extends w {
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
class Qe extends w {
  _parse(e) {
    const { status: t, ctx: a } = this._processInputParams(e);
    if (a.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? S : s.status === "dirty" ? (t.dirty(), Se(s.value)) : this._def.out._parseAsync({
          data: s.value,
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
      return r.status === "aborted" ? S : r.status === "dirty" ? (t.dirty(), {
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
    return new Qe({
      in: e,
      out: t,
      typeName: x.ZodPipeline
    });
  }
}
class Ve extends w {
  _parse(e) {
    const t = this._def.innerType._parse(e), a = (r) => (fe(r) && (r.value = Object.freeze(r.value)), r);
    return we(t) ? t.then((r) => a(r)) : a(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ve.create = (i, e) => new Ve({
  innerType: i,
  typeName: x.ZodReadonly,
  ...q(e)
});
var x;
(function(i) {
  i.ZodString = "ZodString", i.ZodNumber = "ZodNumber", i.ZodNaN = "ZodNaN", i.ZodBigInt = "ZodBigInt", i.ZodBoolean = "ZodBoolean", i.ZodDate = "ZodDate", i.ZodSymbol = "ZodSymbol", i.ZodUndefined = "ZodUndefined", i.ZodNull = "ZodNull", i.ZodAny = "ZodAny", i.ZodUnknown = "ZodUnknown", i.ZodNever = "ZodNever", i.ZodVoid = "ZodVoid", i.ZodArray = "ZodArray", i.ZodObject = "ZodObject", i.ZodUnion = "ZodUnion", i.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", i.ZodIntersection = "ZodIntersection", i.ZodTuple = "ZodTuple", i.ZodRecord = "ZodRecord", i.ZodMap = "ZodMap", i.ZodSet = "ZodSet", i.ZodFunction = "ZodFunction", i.ZodLazy = "ZodLazy", i.ZodLiteral = "ZodLiteral", i.ZodEnum = "ZodEnum", i.ZodEffects = "ZodEffects", i.ZodNativeEnum = "ZodNativeEnum", i.ZodOptional = "ZodOptional", i.ZodNullable = "ZodNullable", i.ZodDefault = "ZodDefault", i.ZodCatch = "ZodCatch", i.ZodPromise = "ZodPromise", i.ZodBranded = "ZodBranded", i.ZodPipeline = "ZodPipeline", i.ZodReadonly = "ZodReadonly";
})(x || (x = {}));
const F = se.create, me = ge.create;
ue.create;
const St = te.create, Ke = B.create;
Te.create;
Ie.create;
ce.create;
const Oe = Ee.create, Be = He.create, Ye = ve.create;
Pe.create;
oe.create;
ye.create;
const Aa = Ke({
  id: F().min(1),
  french: F().min(1),
  arabic: F().optional(),
  phonetic: F().optional(),
  translation: F().optional(),
  merit: F().optional(),
  target: me().int().positive(),
  targetLabel: F().optional(),
  category: Ye(["daily", "morning_evening", "prayer", "sleep", "custom"]),
  audioUrl: F().optional()
}), Sa = Ke({
  version: F().optional(),
  exportedAt: F().optional(),
  dailyCounts: Oe(F(), me().int().nonnegative()),
  lifetimeCounts: Oe(F(), me().int().nonnegative()),
  favorites: St(F()),
  historyDays: Oe(F(), me().int().nonnegative()).optional().default({}),
  streak: me().int().nonnegative().optional().default(1),
  theme: Ye(["emerald", "medina", "kaaba", "oled"]).optional().default("emerald"),
  customDhikrs: St(Aa).optional().default([])
});
class P {
  static getKey(e) {
    return `${Gt.storagePrefix}${e}`;
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
    const a = Sa.safeParse(t);
    if (!a.success) {
      const r = a.error.errors.map((s) => `${s.path.join(".")}: ${s.message}`).join(", ");
      throw new Error(`Format de sauvegarde invalide : ${r}`);
    }
    return a.data;
  }
}
class qt {
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
function Ge(i = null) {
  return { status: "loading", data: i, error: null };
}
function wt(i) {
  return { status: "success", data: i, error: null };
}
function Ce(i, e = null) {
  return { status: "error", data: e, error: i };
}
class qe {
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
        this.updateSpeechState(Ce(r)), t();
        return;
      }
      this.updateSpeechState(Ge(e)), window.speechSynthesis.cancel();
      const a = new SpeechSynthesisUtterance(e);
      a.lang = "ar-SA", a.rate = 0.88, a.pitch = 1, a.onstart = () => {
        this.updateSpeechState(Ge(e));
      }, a.onend = () => {
        this.updateSpeechState(wt(e)), t();
      }, a.onerror = (r) => {
        const s = new Error(`Erreur de synthèse vocale : ${r.error}`);
        this.updateSpeechState(Ce(s)), t();
      };
      try {
        window.speechSynthesis.speak(a);
      } catch (r) {
        const s = r instanceof Error ? r : new Error("Erreur de synthèse vocale");
        this.updateSpeechState(Ce(s)), t();
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
(function i(e, t, a, r) {
  var s = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL), l = typeof Path2D == "function" && typeof DOMMatrix == "function", o = (function() {
    if (!e.OffscreenCanvas)
      return !1;
    try {
      var u = new OffscreenCanvas(1, 1), n = u.getContext("2d");
      n.fillRect(0, 0, 1, 1);
      var b = u.transferToImageBitmap();
      n.createPattern(b, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  })();
  function d() {
  }
  function c(u) {
    var n = t.exports.Promise, b = n !== void 0 ? n : e.Promise;
    return typeof b == "function" ? new b(u) : (u(d, d), null);
  }
  var v = /* @__PURE__ */ (function(u, n) {
    return {
      transform: function(b) {
        if (u)
          return b;
        if (n.has(b))
          return n.get(b);
        var A = new OffscreenCanvas(b.width, b.height), k = A.getContext("2d");
        return k.drawImage(b, 0, 0), n.set(b, A), A;
      },
      clear: function() {
        n.clear();
      }
    };
  })(o, /* @__PURE__ */ new Map()), M = (function() {
    var u = Math.floor(16.666666666666668), n, b, A = {}, k = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (n = function(_) {
      var L = Math.random();
      return A[L] = requestAnimationFrame(function y(C) {
        k === C || k + u - 1 < C ? (k = C, delete A[L], _()) : A[L] = requestAnimationFrame(y);
      }), L;
    }, b = function(_) {
      A[_] && cancelAnimationFrame(A[_]);
    }) : (n = function(_) {
      return setTimeout(_, u);
    }, b = function(_) {
      return clearTimeout(_);
    }), { frame: n, cancel: b };
  })(), E = /* @__PURE__ */ (function() {
    var u, n, b = {};
    function A(k) {
      function _(L, y) {
        k.postMessage({ options: L || {}, callback: y });
      }
      k.init = function(y) {
        var C = y.transferControlToOffscreen();
        k.postMessage({ canvas: C }, [C]);
      }, k.fire = function(y, C, j) {
        if (n)
          return _(y, null), n;
        var R = Math.random().toString(36).slice(2);
        return n = c(function(D) {
          function O(H) {
            H.data.callback === R && (delete b[R], k.removeEventListener("message", O), n = null, v.clear(), j(), D());
          }
          k.addEventListener("message", O), _(y, R), b[R] = O.bind(null, { data: { callback: R } });
        }), n;
      }, k.reset = function() {
        k.postMessage({ reset: !0 });
        for (var y in b)
          b[y](), delete b[y];
      };
    }
    return function() {
      if (u)
        return u;
      if (!a && s) {
        var k = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + i.toString() + ")(this, module, true, SIZE);",
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
          u = new Worker(URL.createObjectURL(new Blob([k])));
        } catch (_) {
          return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", _), null;
        }
        A(u);
      }
      return u;
    };
  })(), $ = {
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
  function Q(u, n) {
    return n ? n(u) : u;
  }
  function V(u) {
    return u != null;
  }
  function N(u, n, b) {
    return Q(
      u && V(u[n]) ? u[n] : $[n],
      b
    );
  }
  function G(u) {
    return u < 0 ? 0 : Math.floor(u);
  }
  function Le(u, n) {
    return Math.floor(Math.random() * (n - u)) + u;
  }
  function z(u) {
    return parseInt(u, 16);
  }
  function re(u) {
    return u.map(je);
  }
  function je(u) {
    var n = String(u).replace(/[^0-9a-f]/gi, "");
    return n.length < 6 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), {
      r: z(n.substring(0, 2)),
      g: z(n.substring(2, 4)),
      b: z(n.substring(4, 6))
    };
  }
  function Mt(u) {
    var n = N(u, "origin", Object);
    return n.x = N(n, "x", Number), n.y = N(n, "y", Number), n;
  }
  function Tt(u) {
    u.width = document.documentElement.clientWidth, u.height = document.documentElement.clientHeight;
  }
  function It(u) {
    var n = u.getBoundingClientRect();
    u.width = n.width, u.height = n.height;
  }
  function Et(u) {
    var n = document.createElement("canvas");
    return n.style.position = "fixed", n.style.top = "0px", n.style.left = "0px", n.style.pointerEvents = "none", n.style.zIndex = u, n;
  }
  function Pt(u, n, b, A, k, _, L, y, C) {
    u.save(), u.translate(n, b), u.rotate(_), u.scale(A, k), u.arc(0, 0, 1, L, y, C), u.restore();
  }
  function jt(u) {
    var n = u.angle * (Math.PI / 180), b = u.spread * (Math.PI / 180);
    return {
      x: u.x,
      y: u.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: u.startVelocity * 0.5 + Math.random() * u.startVelocity,
      angle2D: -n + (0.5 * b - Math.random() * b),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: u.color,
      shape: u.shape,
      tick: 0,
      totalTicks: u.ticks,
      decay: u.decay,
      drift: u.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: u.gravity * 3,
      ovalScalar: 0.6,
      scalar: u.scalar,
      flat: u.flat
    };
  }
  function Nt(u, n) {
    n.x += Math.cos(n.angle2D) * n.velocity + n.drift, n.y += Math.sin(n.angle2D) * n.velocity + n.gravity, n.velocity *= n.decay, n.flat ? (n.wobble = 0, n.wobbleX = n.x + 10 * n.scalar, n.wobbleY = n.y + 10 * n.scalar, n.tiltSin = 0, n.tiltCos = 0, n.random = 1) : (n.wobble += n.wobbleSpeed, n.wobbleX = n.x + 10 * n.scalar * Math.cos(n.wobble), n.wobbleY = n.y + 10 * n.scalar * Math.sin(n.wobble), n.tiltAngle += 0.1, n.tiltSin = Math.sin(n.tiltAngle), n.tiltCos = Math.cos(n.tiltAngle), n.random = Math.random() + 2);
    var b = n.tick++ / n.totalTicks, A = n.x + n.random * n.tiltCos, k = n.y + n.random * n.tiltSin, _ = n.wobbleX + n.random * n.tiltCos, L = n.wobbleY + n.random * n.tiltSin;
    if (u.fillStyle = "rgba(" + n.color.r + ", " + n.color.g + ", " + n.color.b + ", " + (1 - b) + ")", u.beginPath(), l && n.shape.type === "path" && typeof n.shape.path == "string" && Array.isArray(n.shape.matrix))
      u.fill(Rt(
        n.shape.path,
        n.shape.matrix,
        n.x,
        n.y,
        Math.abs(_ - A) * 0.1,
        Math.abs(L - k) * 0.1,
        Math.PI / 10 * n.wobble
      ));
    else if (n.shape.type === "bitmap") {
      var y = Math.PI / 10 * n.wobble, C = Math.abs(_ - A) * 0.1, j = Math.abs(L - k) * 0.1, R = n.shape.bitmap.width * n.scalar, D = n.shape.bitmap.height * n.scalar, O = new DOMMatrix([
        Math.cos(y) * C,
        Math.sin(y) * C,
        -Math.sin(y) * j,
        Math.cos(y) * j,
        n.x,
        n.y
      ]);
      O.multiplySelf(new DOMMatrix(n.shape.matrix));
      var H = u.createPattern(v.transform(n.shape.bitmap), "no-repeat");
      H.setTransform(O), u.globalAlpha = 1 - b, u.fillStyle = H, u.fillRect(
        n.x - R / 2,
        n.y - D / 2,
        R,
        D
      ), u.globalAlpha = 1;
    } else if (n.shape === "circle")
      u.ellipse ? u.ellipse(n.x, n.y, Math.abs(_ - A) * n.ovalScalar, Math.abs(L - k) * n.ovalScalar, Math.PI / 10 * n.wobble, 0, 2 * Math.PI) : Pt(u, n.x, n.y, Math.abs(_ - A) * n.ovalScalar, Math.abs(L - k) * n.ovalScalar, Math.PI / 10 * n.wobble, 0, 2 * Math.PI);
    else if (n.shape === "star")
      for (var T = Math.PI / 2 * 3, J = 4 * n.scalar, K = 8 * n.scalar, Y = n.x, ie = n.y, de = 5, X = Math.PI / de; de--; )
        Y = n.x + Math.cos(T) * K, ie = n.y + Math.sin(T) * K, u.lineTo(Y, ie), T += X, Y = n.x + Math.cos(T) * J, ie = n.y + Math.sin(T) * J, u.lineTo(Y, ie), T += X;
    else
      u.moveTo(Math.floor(n.x), Math.floor(n.y)), u.lineTo(Math.floor(n.wobbleX), Math.floor(k)), u.lineTo(Math.floor(_), Math.floor(L)), u.lineTo(Math.floor(A), Math.floor(n.wobbleY));
    return u.closePath(), u.fill(), n.tick < n.totalTicks;
  }
  function Dt(u, n, b, A, k) {
    var _ = n.slice(), L = u.getContext("2d"), y, C, j = c(function(R) {
      function D() {
        y = C = null, L.clearRect(0, 0, A.width, A.height), v.clear(), k(), R();
      }
      function O() {
        a && !(A.width === r.width && A.height === r.height) && (A.width = u.width = r.width, A.height = u.height = r.height), !A.width && !A.height && (b(u), A.width = u.width, A.height = u.height), L.clearRect(0, 0, A.width, A.height), _ = _.filter(function(H) {
          return Nt(L, H);
        }), _.length ? y = M.frame(O) : D();
      }
      y = M.frame(O), C = D;
    });
    return {
      addFettis: function(R) {
        return _ = _.concat(R), j;
      },
      canvas: u,
      promise: j,
      reset: function() {
        y && M.cancel(y), C && C();
      }
    };
  }
  function et(u, n) {
    var b = !u, A = !!N(n || {}, "resize"), k = !1, _ = N(n, "disableForReducedMotion", Boolean), L = s && !!N(n || {}, "useWorker"), y = L ? E() : null, C = b ? Tt : It, j = u && y ? !!u.__confetti_initialized : !1, R = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, D;
    function O(T, J, K) {
      for (var Y = N(T, "particleCount", G), ie = N(T, "angle", Number), de = N(T, "spread", Number), X = N(T, "startVelocity", Number), $t = N(T, "decay", Number), zt = N(T, "gravity", Number), Ft = N(T, "drift", Number), at = N(T, "colors", re), Ht = N(T, "ticks", Number), rt = N(T, "shapes"), Zt = N(T, "scalar"), Jt = !!N(T, "flat"), it = Mt(T), st = Y, De = [], Vt = u.width * it.x, Wt = u.height * it.y; st--; )
        De.push(
          jt({
            x: Vt,
            y: Wt,
            angle: ie,
            spread: de,
            startVelocity: X,
            color: at[st % at.length],
            shape: rt[Le(0, rt.length)],
            ticks: Ht,
            decay: $t,
            gravity: zt,
            drift: Ft,
            scalar: Zt,
            flat: Jt
          })
        );
      return D ? D.addFettis(De) : (D = Dt(u, De, C, J, K), D.promise);
    }
    function H(T) {
      var J = _ || N(T, "disableForReducedMotion", Boolean), K = N(T, "zIndex", Number);
      if (J && R)
        return c(function(X) {
          X();
        });
      b && D ? u = D.canvas : b && !u && (u = Et(K), document.body.appendChild(u)), A && !j && C(u);
      var Y = {
        width: u.width,
        height: u.height
      };
      y && !j && y.init(u), j = !0, y && (u.__confetti_initialized = !0);
      function ie() {
        if (y) {
          var X = {
            getBoundingClientRect: function() {
              if (!b)
                return u.getBoundingClientRect();
            }
          };
          C(X), y.postMessage({
            resize: {
              width: X.width,
              height: X.height
            }
          });
          return;
        }
        Y.width = Y.height = null;
      }
      function de() {
        D = null, A && (k = !1, e.removeEventListener("resize", ie)), b && u && (document.body.contains(u) && document.body.removeChild(u), u = null, j = !1);
      }
      return A && !k && (k = !0, e.addEventListener("resize", ie, !1)), y ? y.fire(T, Y, de) : O(T, Y, de);
    }
    return H.reset = function() {
      y && y.reset(), D && D.reset();
    }, H;
  }
  var Ne;
  function tt() {
    return Ne || (Ne = et(null, { useWorker: !0, resize: !0 })), Ne;
  }
  function Rt(u, n, b, A, k, _, L) {
    var y = new Path2D(u), C = new Path2D();
    C.addPath(y, new DOMMatrix(n));
    var j = new Path2D();
    return j.addPath(C, new DOMMatrix([
      Math.cos(L) * k,
      Math.sin(L) * k,
      -Math.sin(L) * _,
      Math.cos(L) * _,
      b,
      A
    ])), j;
  }
  function Ot(u) {
    if (!l)
      throw new Error("path confetti are not supported in this browser");
    var n, b;
    typeof u == "string" ? n = u : (n = u.path, b = u.matrix);
    var A = new Path2D(n), k = document.createElement("canvas"), _ = k.getContext("2d");
    if (!b) {
      for (var L = 1e3, y = L, C = L, j = 0, R = 0, D, O, H = 0; H < L; H += 2)
        for (var T = 0; T < L; T += 2)
          _.isPointInPath(A, H, T, "nonzero") && (y = Math.min(y, H), C = Math.min(C, T), j = Math.max(j, H), R = Math.max(R, T));
      D = j - y, O = R - C;
      var J = 10, K = Math.min(J / D, J / O);
      b = [
        K,
        0,
        0,
        K,
        -Math.round(D / 2 + y) * K,
        -Math.round(O / 2 + C) * K
      ];
    }
    return {
      type: "path",
      path: n,
      matrix: b
    };
  }
  function Bt(u) {
    var n, b = 1, A = "#000000", k = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof u == "string" ? n = u : (n = u.text, b = "scalar" in u ? u.scalar : b, k = "fontFamily" in u ? u.fontFamily : k, A = "color" in u ? u.color : A);
    var _ = 10 * b, L = "" + _ + "px " + k, y = new OffscreenCanvas(_, _), C = y.getContext("2d");
    C.font = L;
    var j = C.measureText(n), R = Math.ceil(j.actualBoundingBoxRight + j.actualBoundingBoxLeft), D = Math.ceil(j.actualBoundingBoxAscent + j.actualBoundingBoxDescent), O = 2, H = j.actualBoundingBoxLeft + O, T = j.actualBoundingBoxAscent + O;
    R += O + O, D += O + O, y = new OffscreenCanvas(R, D), C = y.getContext("2d"), C.font = L, C.fillStyle = A, C.fillText(n, H, T);
    var J = 1 / b;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: y.transferToImageBitmap(),
      matrix: [J, 0, 0, J, -R * J / 2, -D * J / 2]
    };
  }
  t.exports = function() {
    return tt().apply(this, arguments);
  }, t.exports.reset = function() {
    tt().reset();
  }, t.exports.create = et, t.exports.shapeFromPath = Ot, t.exports.shapeFromText = Bt;
})(/* @__PURE__ */ (function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
})(), Xe, !1);
const qa = Xe.exports;
Xe.exports.create;
class ka {
  static triggerGoalCelebration() {
    try {
      qa({
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
class pe {
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
    return pe.instance || (pe.instance = new pe()), pe.instance;
  }
  init() {
    this.theme = P.getTheme(), this.soundEnabled = P.getSoundEnabled(), this.hapticEnabled = P.getHapticEnabled(), this.autoDelayMs = P.getAutoDelay();
    const e = P.getCustomDhikrs();
    this.adhkars = [...nt, ...e], this.dailyCounts = P.getDailyCounts(), this.lifetimeCounts = P.getLifetimeCounts(), this.favorites = P.getFavorites(), this.historyDays = P.getHistoryDays(), this.streak = P.getStreak(), this.lastActiveDate = P.getLastActiveDate(), this.checkDailyReset();
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
      const a = t.toISOString().slice(0, 10), r = Object.values(this.dailyCounts).reduce((s, l) => s + l, 0);
      r > 0 && (this.historyDays[this.lastActiveDate] = r), this.lastActiveDate === a && r > 0 ? this.streak += 1 : this.lastActiveDate !== a && (this.streak = 1), this.dailyCounts = {};
    } else this.lastActiveDate || (this.streak = 1);
    this.lastActiveDate = e, P.saveLastActiveDate(this.lastActiveDate), P.saveStreak(this.streak), P.saveHistoryDays(this.historyDays);
  }
  increment(e) {
    const a = (this.dailyCounts[e] || 0) + 1;
    this.dailyCounts[e] = a, this.lifetimeCounts[e] = (this.lifetimeCounts[e] || 0) + 1;
    const s = this.adhkars.find((o) => o.id === e)?.target || 100, l = a % s === 0 && a > 0;
    return qe.playBeep(this.soundEnabled), l ? (qt.vibrateMilestone(this.hapticEnabled), ka.triggerGoalCelebration()) : qt.vibrateTick(this.hapticEnabled), this.persist(), this.notify(), { isMilestone: l, count: a, target: s };
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
    return t ? this.favorites = this.favorites.filter((a) => a !== e) : this.favorites.push(e), P.saveFavorites(this.favorites), this.notify(), !t;
  }
  setCategory(e) {
    this.currentCategory = e, this.notify();
  }
  setSearchQuery(e) {
    this.searchQuery = e.trim().toLowerCase(), this.notify();
  }
  setTheme(e) {
    this.theme = e, P.saveTheme(e), this.notify();
  }
  toggleSound() {
    return this.soundEnabled = !this.soundEnabled, P.saveSoundEnabled(this.soundEnabled), this.notify(), this.soundEnabled;
  }
  setHaptic(e) {
    this.hapticEnabled = e, P.saveHapticEnabled(e), this.notify();
  }
  setAutoDelay(e) {
    this.autoDelayMs = e, P.saveAutoDelay(e), this.notify();
  }
  addOrUpdateCustomDhikr(e) {
    const t = this.adhkars.findIndex((a) => a.id === e.id);
    t >= 0 ? this.adhkars[t] = e : (this.adhkars.push(e), this.dailyCounts[e.id] === void 0 && (this.dailyCounts[e.id] = 0), this.lifetimeCounts[e.id] === void 0 && (this.lifetimeCounts[e.id] = 0)), this.persistCustomDhikrs(), this.persist(), this.notify();
  }
  deleteCustomDhikr(e) {
    this.adhkars = this.adhkars.filter((t) => t.id !== e), this.favorites = this.favorites.filter((t) => t !== e), delete this.dailyCounts[e], delete this.lifetimeCounts[e], this.persistCustomDhikrs(), P.saveFavorites(this.favorites), this.persist(), this.notify();
  }
  importBackup(e) {
    this.dailyCounts = { ...e.dailyCounts }, this.lifetimeCounts = { ...e.lifetimeCounts }, this.favorites = [...e.favorites], this.historyDays = { ...e.historyDays }, this.streak = e.streak, this.theme = e.theme;
    const t = e.customDhikrs || [];
    this.adhkars = [...nt, ...t];
    for (const a of this.adhkars)
      this.dailyCounts[a.id] === void 0 && (this.dailyCounts[a.id] = 0), this.lifetimeCounts[a.id] === void 0 && (this.lifetimeCounts[a.id] = 0);
    P.saveTheme(this.theme), P.saveStreak(this.streak), P.saveFavorites(this.favorites), this.persistCustomDhikrs(), this.persist(), this.notify();
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
    P.saveCustomDhikrs(e);
  }
  persist() {
    P.saveDailyCounts(this.dailyCounts), P.saveLifetimeCounts(this.lifetimeCounts);
    const e = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    this.historyDays[e] = this.getTodayTotal(), P.saveHistoryDays(this.historyDays);
  }
}
class Ue {
  static deferredPrompt = null;
  static swState = We();
  static installableListeners = [];
  static init() {
    typeof window > "u" || ("serviceWorker" in navigator && (this.swState = Ge(), window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((e) => {
        this.swState = wt(e), console.log("[PwaService] Service Worker actif:", e.scope);
      }).catch((e) => {
        const t = e instanceof Error ? e : new Error("Erreur Service Worker");
        this.swState = Ce(t), console.warn("[PwaService] Service Worker non disponible :", t);
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
const _a = [
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
class La {
  static getTodayHijri() {
    const e = /* @__PURE__ */ new Date(), t = e.getDay(), a = e.getDate(), r = e.getMonth(), s = e.getFullYear();
    let l = r + 1, o = s;
    l < 3 && (o -= 1, l += 12);
    const d = Math.floor(o / 100), c = 2 - d + Math.floor(d / 4), E = Math.floor(365.25 * (o + 4716)) + Math.floor(30.6001 * (l + 1)) + a + c - 1524 - 19484395e-1, $ = Math.floor((30 * E + 10646) / 10631), Q = E - Math.floor((10631 * $ - 10646) / 30), V = Math.min(12, Math.max(1, Math.ceil(Q / 29.5))), N = Math.floor((V - 1) * 29.5);
    let G = Math.floor(Q - N) + 1;
    G < 1 && (G = 1), G > 30 && (G = 30);
    const Le = Math.min(11, Math.max(0, V - 1)), z = _a[Le] || "Mois Hégirien", re = G === 13 || G === 14 || G === 15, je = t === 1 || t === 4;
    return {
      day: G,
      month: V,
      year: $,
      monthNameFr: z,
      formattedString: `${G} ${z} ${$}`,
      isWhiteDay: re,
      isSunnahFastDay: je
    };
  }
}
function ee(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function m(i) {
  const e = document.getElementById(i);
  if (!e)
    throw new Error(`[DOM Error] Élément requis #${i} introuvable dans le document.`);
  return e;
}
function xe(i, e) {
  const t = m(i), a = m(e);
  t.classList.remove("hidden"), i === "focus-modal" && t.classList.add("flex"), setTimeout(() => {
    t.classList.remove("opacity-0"), t.classList.remove("translate-y-full"), a.classList.remove("translate-y-full", "scale-95");
  }, 10);
}
function Ae(i, e) {
  const t = m(i), a = m(e);
  t.classList.add("opacity-0"), i === "focus-modal" ? t.classList.add("translate-y-full") : window.innerWidth < 640 ? a.classList.add("translate-y-full") : a.classList.add("scale-95"), setTimeout(() => {
    t.classList.add("hidden"), i === "focus-modal" && t.classList.remove("flex");
  }, 280);
}
class Ca {
  store;
  constructor(e) {
    this.store = e;
  }
  init() {
    this.renderHijriInfo(), this.bindEvents(), this.updateSoundIcon();
  }
  renderHijriInfo() {
    const e = La.getTodayHijri(), t = m("hijri-date-badge"), a = m("hijri-fast-badge");
    t.textContent = e.formattedString, e.isWhiteDay ? (a.innerHTML = '<i class="ph-fill ph-moon-stars text-amber-400"></i> Jours Blancs (Jeûne conseillé)', a.classList.remove("hidden")) : e.isSunnahFastDay ? (a.innerHTML = '<i class="ph-fill ph-sun text-amber-400"></i> Jeûne prophétique (Lundi/Jeudi)', a.classList.remove("hidden")) : a.classList.add("hidden");
  }
  bindEvents() {
    const e = m("btn-toggle-search"), t = m("search-bar-container"), a = m("search-input"), r = m("btn-search-clear");
    e.addEventListener("click", () => {
      t.classList.toggle("hidden"), t.classList.contains("hidden") || a.focus();
    }), a.addEventListener("input", (l) => {
      const o = l.target.value;
      this.store.setSearchQuery(o);
    }), r.addEventListener("click", () => {
      a.value = "", this.store.setSearchQuery("");
    }), m("btn-toggle-sound").addEventListener("click", () => {
      this.store.toggleSound(), this.updateSoundIcon();
    });
  }
  updateSoundIcon() {
    const e = m("btn-toggle-sound"), t = this.store.soundEnabled;
    e.innerHTML = t ? '<i class="ph ph-speaker-high text-lg"></i>' : '<i class="ph ph-speaker-slash text-lg text-rose-400"></i>', e.title = t ? "Son activé" : "Son coupé";
  }
}
class wa {
  onOpenModal;
  constructor(e) {
    this.onOpenModal = e;
  }
  init() {
    m("btn-open-names-banner").addEventListener("click", () => {
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
class Ta {
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
    const e = this.store.currentCategory, t = this.store.getCategoryCounts(), a = m("category-summary");
    a.textContent = Ma[e] || "Invocations", document.querySelectorAll(".cat-pill").forEach((s) => {
      const l = s.getAttribute("data-cat"), o = l === e, d = s.querySelector(".cat-badge");
      d && l && (d.textContent = (t[l] || 0).toString()), o ? (s.className = "cat-pill px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 bg-primary-500 text-white border-primary-400 shadow-neon tap-effect", d && (d.className = "cat-badge px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-white/25 text-white tabular-nums")) : (s.className = "cat-pill px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 bg-surface/70 text-textmuted border-bordercolor hover:text-textmain hover:bg-surface hover:border-primary-500/30 tap-effect", d && (d.className = "cat-badge px-1.5 py-0.2 rounded-md text-[10px] font-bold bg-bordercolor/60 text-textmuted tabular-nums"));
    });
  }
}
class Ia {
  store;
  constructor(e) {
    this.store = e;
  }
  render() {
    const e = this.store.getTodayTotal(), t = this.store.getLifetimeTotal(), a = this.store.streak, r = m("daily-total-counter"), s = m("lifetime-counter-banner"), l = m("streak-counter");
    r.textContent = `${e.toLocaleString("fr-FR")} invocation${e > 1 ? "s" : ""}`, s.textContent = t.toLocaleString("fr-FR"), l.textContent = a.toString();
  }
}
class W {
  static timeoutId = null;
  static show(e, t = 3200) {
    const a = m("toast"), r = m("toast-msg");
    r.textContent = e, a.classList.remove("hidden"), a.offsetWidth, a.classList.add("toast-show"), this.timeoutId !== null && window.clearTimeout(this.timeoutId), this.timeoutId = window.setTimeout(() => {
      a.classList.remove("toast-show"), a.classList.add("hidden"), this.timeoutId = null;
    }, t);
  }
}
class Ea {
  static render(e, t, a) {
    const r = t.dailyCounts[e.id] || 0, s = e.target || 100, l = Math.floor(r / s), o = r % s, d = r > 0 && o === 0 ? 100 : o / s * 100, c = t.favorites.includes(e.id), v = e.id.startsWith("custom_"), M = document.createElement("div");
    return M.className = "glass-card rounded-[28px] overflow-hidden flex flex-col relative group transition-all duration-300 hover:border-primary-500/30", M.setAttribute("data-dhikr-id", e.id), M.innerHTML = `
      <!-- En-tête de carte -->
      <div class="p-5 pb-2 flex justify-between items-start z-10 gap-3">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="px-2 py-0.5 rounded-full bg-surface text-[10px] font-bold text-primary-400 border border-bordercolor">
              ${ee(e.targetLabel || `Objectif : ${s}`)}
            </span>
            ${l > 0 ? `<span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-400 border border-amber-500/30 flex items-center gap-1 animate-pulse">
                     <i class="ph-fill ph-check-circle"></i> ${l} accompli${l > 1 ? "s" : ""}
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
            <i class="${c ? "ph-fill ph-star text-amber-400" : "ph ph-star"} text-sm"></i>
          </button>
          <button class="btn-reset-dhikr w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-rose-400 tap-effect transition-colors" title="Réinitialiser">
            <i class="ph ph-arrow-counter-clockwise text-sm"></i>
          </button>
        </div>
      </div>

      <!-- Corps : Calligraphie Arabe (cliquable vers mode focus) -->
      ${e.arabic ? `<div class="px-5 py-3 text-center cursor-pointer card-open-focus tap-effect" title="Ouvrir en plein écran (Tasbih)">
               <p class="font-arabic text-2xl sm:text-3xl text-primary-400 leading-loose select-none" dir="rtl">${ee(e.arabic)}</p>
             </div>` : '<div class="py-2"></div>'}

      <!-- Translittération phonétique & sens (cliquable vers mode focus) -->
      ${e.phonetic || e.translation ? `<div class="px-5 pb-3 flex flex-col gap-1 text-center cursor-pointer card-open-focus tap-effect" title="Ouvrir en plein écran (Tasbih)">
               ${e.phonetic ? `<p class="text-[11px] text-textmain italic leading-relaxed opacity-90">${ee(e.phonetic)}</p>` : ""}
               ${e.translation ? `<p class="text-[11px] text-textmuted leading-relaxed">${ee(e.translation)}</p>` : ""}
             </div>` : ""}

      <!-- Mérite / Source -->
      ${e.merit ? `<div class="mx-5 mb-3 p-2 rounded-xl bg-surface/40 border border-bordercolor/60 text-[10px] text-textmuted flex items-start gap-1.5 leading-normal">
               <i class="ph-fill ph-info text-primary-400 text-xs mt-0.5 shrink-0"></i>
               <span>${ee(e.merit)}</span>
             </div>` : ""}

      <!-- Bas de carte : Progression & Actions -->
      <div class="p-3.5 bg-surface/40 mt-auto border-t border-bordercolor relative overflow-hidden">
        <div class="absolute top-0 left-0 h-1.5 w-full bg-surface">
          <div class="h-full bg-primary-500 transition-all duration-300 ease-out" style="width: ${d}%; box-shadow: 0 0 10px var(--color-primary-500);"></div>
        </div>

        <div class="flex items-center gap-2.5 pt-1.5">
          <!-- Compteur & Ratio journalier compact et moderne -->
          <div class="flex flex-col justify-center px-3 py-1.5 rounded-2xl bg-surface/80 border border-bordercolor/80 min-w-[74px] shrink-0">
            <span class="text-[9px] text-textmuted font-extrabold uppercase tracking-wider flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full ${r >= s ? "bg-amber-400 shadow-[0_0_6px_#f59e0b]" : "bg-primary-400 shadow-[0_0_6px_var(--color-primary-400)]"}"></span>
              Auj.
            </span>
            <div class="flex items-baseline gap-1 mt-0.5">
              <span class="text-xl font-black text-textmain tabular-nums tracking-tight count-num-val transition-all duration-150">${r}</span>
              <span class="text-[10px] text-textmuted font-bold opacity-70">/${s}</span>
            </div>
          </div>

          <!-- Bouton Tactile Moderne Tasbih (+1) -->
          <button class="btn-increment group relative overflow-hidden flex-1 h-[52px] rounded-2xl bg-gradient-to-r from-primary-600 via-primary-500 to-emerald-500 hover:from-primary-500 hover:to-emerald-400 active:scale-[0.96] text-white shadow-[0_4px_20px_-2px_var(--color-primary-500-alpha)] flex items-center justify-center gap-2 px-3 tap-effect transition-all select-none border border-white/10 cursor-pointer" title="Faire le Tasbih (+1)">
            <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div class="w-7 h-7 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner group-active:scale-115 transition-transform">
              <i class="ph-bold ph-plus text-sm text-white"></i>
            </div>
            <span class="font-bold text-sm tracking-wide">Tasbih</span>
            <span class="text-[10px] font-extrabold bg-black/25 text-white/95 px-2 py-0.5 rounded-full border border-white/15 font-mono shadow-sm">+1</span>
          </button>

          <!-- Bouton Mode Focus Plein Écran -->
          <button class="btn-focus w-[52px] h-[52px] rounded-2xl bg-surface/80 hover:bg-surface active:scale-95 text-primary-400 hover:text-primary-300 border border-bordercolor flex items-center justify-center tap-effect transition-all shrink-0 shadow-sm cursor-pointer" title="Mode Plein Écran (Tasbih Immersif)">
            <i class="ph ph-corners-out text-xl"></i>
          </button>
        </div>
      </div>
    `, M.querySelector(".btn-increment")?.addEventListener("click", () => {
      const z = t.increment(e.id), re = M.querySelector(".count-num-val");
      re && (re.classList.add("scale-125", "text-primary-400"), setTimeout(() => {
        re.classList.remove("scale-125", "text-primary-400");
      }, 150)), z.isMilestone && W.show(`Objectif atteint pour "${e.french}" ! 🎉`);
    }), M.querySelector(".btn-focus")?.addEventListener("click", () => {
      a.onOpenFocus(e.id);
    }), M.querySelectorAll(".card-open-focus").forEach((z) => {
      z.addEventListener("click", () => {
        a.onOpenFocus(e.id);
      });
    }), M.querySelector(".btn-fav")?.addEventListener("click", (z) => {
      z.stopPropagation();
      const re = t.toggleFavorite(e.id);
      W.show(re ? "Ajouté aux favoris ⭐" : "Retiré des favoris");
    }), M.querySelector(".btn-reset-dhikr")?.addEventListener("click", (z) => {
      z.stopPropagation(), confirm(
        `Remettre à zéro le compteur d'aujourd'hui pour "${e.french}" ? L'historique global est conservé.`
      ) && (t.resetDhikr(e.id), W.show("Compteur réinitialisé"));
    }), M.querySelector(".btn-edit-custom")?.addEventListener("click", (z) => {
      z.stopPropagation(), a.onEditCustom(e.id);
    }), M.querySelector(".btn-delete-custom")?.addEventListener("click", (z) => {
      z.stopPropagation(), confirm(`Supprimer définitivement l'invocation "${e.french}" ?`) && (t.deleteCustomDhikr(e.id), W.show("Invocation supprimée"));
    }), M;
  }
}
class Pa {
  store;
  callbacks;
  constructor(e, t) {
    this.store = e, this.callbacks = t;
  }
  render() {
    const e = m("app-container");
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
      const r = Ea.render(a, this.store, this.callbacks);
      e.appendChild(r);
    }
  }
}
class ja {
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
    m("focus-close-btn").addEventListener("click", () => {
      this.close();
    }), m("focus-tap-zone").addEventListener("click", () => {
      this.currentId && (this.store.increment(this.currentId), this.renderCurrentFocus());
    }), m("focus-autoplay-btn").addEventListener("click", (d) => {
      d.stopPropagation(), this.toggleAutoPlay();
    }), m("focus-speaker-btn").addEventListener("click", (d) => {
      d.stopPropagation(), this.speakCurrent();
    }), m("focus-font-minus").addEventListener("click", (d) => {
      d.stopPropagation(), this.changeFontSize(-2);
    }), m("focus-font-plus").addEventListener("click", (d) => {
      d.stopPropagation(), this.changeFontSize(2);
    }), m("focus-details-btn").addEventListener("click", (d) => {
      d.stopPropagation(), this.toggleDetails();
    }), window.addEventListener("keydown", (d) => {
      const c = document.getElementById("focus-modal");
      c && !c.classList.contains("hidden") && (d.code === "Space" || d.key === "Enter" ? (d.preventDefault(), this.currentId && (this.store.increment(this.currentId), this.renderCurrentFocus())) : d.key === "Escape" && this.close());
    });
  }
  open(e) {
    this.currentId = e, this.renderCurrentFocus(), xe("focus-modal", "focus-box");
  }
  close() {
    this.stopAutoPlay(), qe.stopSpeech(), Ae("focus-modal", "focus-box"), this.currentId = null;
  }
  renderCurrentFocus() {
    if (!this.currentId) return;
    const e = this.store.adhkars.find((V) => V.id === this.currentId);
    if (!e) return;
    const t = this.store.dailyCounts[e.id] || 0, a = e.target || 100, r = Math.floor(t / a) + 1, s = t % a, l = t > 0 && s === 0 ? 1 : s / a, o = m("focus-title"), d = m("focus-arabic"), c = m("focus-phonetic"), v = m("focus-translation"), M = m("focus-counter"), E = m("focus-progress-text"), $ = m("focus-round-badge"), Q = document.getElementById("focus-ring");
    if (o.textContent = e.french, d.textContent = e.arabic || "", d.style.fontSize = `${this.arabicFontSize}px`, c.textContent = e.phonetic || "", v.textContent = e.translation || "", M.textContent = t.toString(), E.textContent = `${s} / ${a}`, $.textContent = `Tour ${r}`, Q) {
      const N = 276.46 - l * 276.46;
      Q.style.strokeDashoffset = N.toFixed(1);
    }
    this.updateFocusBeads(t);
  }
  changeFontSize(e) {
    this.arabicFontSize = Math.min(52, Math.max(22, this.arabicFontSize + e));
    const t = m("focus-arabic");
    t.style.fontSize = `${this.arabicFontSize}px`;
  }
  toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
    const e = m("focus-extra-content"), t = m("focus-details-label");
    this.detailsVisible ? (e.classList.remove("hidden"), t.textContent = "Détails") : (e.classList.add("hidden"), t.textContent = "Masqué");
  }
  initFocusBeads() {
    const e = document.getElementById("focus-beads-group");
    if (!e) return;
    e.innerHTML = "";
    const t = 33, a = 44;
    for (let r = 0; r < t; r++) {
      const s = r / t * 2 * Math.PI, l = 50 + a * Math.cos(s), o = 50 + a * Math.sin(s), d = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      d.setAttribute("cx", l.toFixed(2)), d.setAttribute("cy", o.toFixed(2)), d.setAttribute("r", "2.2"), d.setAttribute("class", "bead fill-bordercolor transition-all duration-200"), d.setAttribute("id", `bead-${r}`), e.appendChild(d);
    }
  }
  updateFocusBeads(e) {
    const a = (e - 1) % 33;
    for (let r = 0; r < 33; r++) {
      const s = document.getElementById(`bead-${r}`);
      s && (e === 0 ? (s.setAttribute("class", "bead fill-bordercolor transition-all duration-200"), s.setAttribute("r", "2.2")) : r === a ? (s.setAttribute(
        "class",
        "bead fill-amber-400 transition-all duration-200 filter drop-shadow-[0_0_4px_#fbbf24]"
      ), s.setAttribute("r", "3.8")) : r < a ? (s.setAttribute("class", "bead fill-primary-400 transition-all duration-200"), s.setAttribute("r", "2.5")) : (s.setAttribute("class", "bead fill-bordercolor transition-all duration-200"), s.setAttribute("r", "2.2")));
    }
  }
  speakCurrent() {
    if (!this.currentId) return;
    const e = this.store.adhkars.find((a) => a.id === this.currentId);
    if (!e) return;
    const t = e.arabic || e.phonetic || e.french;
    qe.speakText(t);
  }
  toggleAutoPlay() {
    this.isAutoPlaying ? this.stopAutoPlay() : this.startAutoPlay();
  }
  startAutoPlay() {
    this.currentId && (this.isAutoPlaying = !0, this.updateAutoPlayUI(!0), W.show("Mode Mains-Libres activé ▶️"), this.runAutoPlayStep());
  }
  stopAutoPlay() {
    this.isAutoPlaying = !1, this.autoPlayTimer !== null && (window.clearTimeout(this.autoPlayTimer), this.autoPlayTimer = null), qe.stopSpeech(), this.updateAutoPlayUI(!1);
  }
  updateAutoPlayUI(e) {
    const t = m("focus-autoplay-btn"), a = m("focus-autoplay-icon"), r = m("focus-autoplay-label");
    e ? (t.className = "px-3 py-2 rounded-2xl bg-amber-500 text-black text-xs font-bold border border-amber-400 tap-effect flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse", a.className = "ph-bold ph-pause text-sm", r.textContent = "Pause") : (t.className = "px-3 py-2 rounded-2xl bg-card text-textmuted hover:text-amber-400 text-xs font-semibold border border-bordercolor tap-effect flex items-center gap-1.5", a.className = "ph-bold ph-play text-sm", r.textContent = "Auto");
  }
  runAutoPlayStep() {
    if (!this.isAutoPlaying || !this.currentId) return;
    const e = this.store.adhkars.find((l) => l.id === this.currentId);
    if (!e) {
      this.stopAutoPlay();
      return;
    }
    const t = this.store.dailyCounts[e.id] || 0, a = e.target || 100;
    if (t >= a) {
      this.stopAutoPlay(), W.show(`Objectif atteint pour "${e.french}" ! 🎉`);
      return;
    }
    const r = this.store.increment(e.id);
    if (this.renderCurrentFocus(), r.isMilestone) {
      this.stopAutoPlay(), W.show(`Objectif de ${a} atteint ! 🎉`);
      return;
    }
    const s = e.arabic || e.phonetic || e.french;
    qe.speakText(s).then(() => {
      this.isAutoPlaying && (this.autoPlayTimer = window.setTimeout(() => {
        this.runAutoPlayStep();
      }, this.store.autoDelayMs));
    });
  }
}
const $e = [
  {
    n: 1,
    a: "الرَّحْمَنُ",
    p: "Ar-Rahman",
    f: "Le Tout-Miséricordieux",
    m: "Celui dont la miséricorde infinie englobe toute la création dans ce monde.",
    detailedMeaning: "Issu de la racine 'R-H-M' (رحمة), Ar-Rahman est un Nom exclusif à Allah exprimant la plénitude et l'immensité de Sa miséricorde universelle envers toutes Ses créatures, croyants comme mécréants, qu'Il pourvoit, protège et soutient sans discontinuer.",
    quran: {
      arabic: "الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ",
      translation: "Le Tout-Miséricordieux S'est établi sur le Trône.",
      surah: "Sourate Ta-Ha (20:5)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Quand Allah a décrété la Création, Il a écrit dans Son Livre auprès de Lui au-dessus du Trône : 'Certes, Ma miséricorde l'emporte sur Ma colère.' »",
      source: "Sahih Al-Bukhari (n°3194) et Sahih Muslim (n°2751)"
    }
  },
  {
    n: 2,
    a: "الرَّحِيمُ",
    p: "Ar-Rahim",
    f: "Le Très-Miséricordieux",
    m: "Celui qui accorde Sa miséricorde spéciale et perpétuelle aux croyants.",
    detailedMeaning: "Alors qu'Ar-Rahman désigne l'essence même de la miséricorde infinie, Ar-Rahim caractérise la manifestation bienveillante et continue de cette miséricorde, particulièrement envers les croyants qu'Il guide ici-bas et récompense éternellement dans l'au-delà.",
    quran: {
      arabic: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
      translation: "Et Il est très miséricordieux envers les croyants.",
      surah: "Sourate Al-Ahzab (33:43)"
    },
    hadith: {
      text: "Le Prophète ﷺ a vu une femme cherchant son enfant parmi des prisonniers, dès qu'elle le trouva, elle le serra contre sa poitrine et l'allaita. Il dit alors : « Pensez-vous que cette femme jetterait son enfant au feu ? Certainement non ! Allah est plus miséricordieux envers Ses serviteurs que cette femme envers son enfant. »",
      source: "Sahih Al-Bukhari (n°5999) et Sahih Muslim (n°2754)"
    }
  },
  {
    n: 3,
    a: "الْمَلِكُ",
    p: "Al-Malik",
    f: "Le Souverain Suprême",
    m: "Le Roi absolu de l'univers, possesseur exclusif de toute souveraineté.",
    detailedMeaning: "Al-Malik désigne Celui dont le pouvoir royal est sans limite. Il dispose de Sa création selon Sa volonté sans que nul ne puisse s'opposer à Ses décrets. Tous les rois et souverains terrestres sont Ses sujets dépendants et éphémères.",
    quran: {
      arabic: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۖ لَا إِلَٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْكَرِيمِ",
      translation: "Que soit exalté Allah, le vrai Souverain ! Pas de divinité en dehors de Lui, le Seigneur du Trône sublime !",
      surah: "Sourate Al-Mu'minun (23:116)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Au Jour de la Résurrection, Allah pliera les cieux puis les prendra dans Sa main droite et dira : 'Je suis le Roi ! Où sont les tyrans ? Où sont les orgueilleux ?' »",
      source: "Sahih Muslim (n°2787)"
    }
  },
  {
    n: 4,
    a: "الْقُدُّوسُ",
    p: "Al-Quddus",
    f: "Le Pur et Sanctifié",
    m: "Le Purifié de tout défaut, faiblesse, ressemblance ou imperfection.",
    detailedMeaning: "Du terme 'Quds' signifiant la pureté absolue et l'éloignement de toute souillure. Al-Quddus est exempt de tout ce qui ne sied pas à Sa majesté : ni fatigue, ni oubli, ni injustice, ni besoin de progéniture ou d'associé.",
    quran: {
      arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ",
      translation: "C'est Lui, Allah. Nulle divinité que Lui; Le Souverain, Le Pur, L'Apaisant...",
      surah: "Sourate Al-Hashr (59:23)"
    },
    hadith: {
      text: "Après avoir terminé la prière du Witr, le Messager d'Allah ﷺ disait trois fois : « Subhâna al-Maliki al-Quddûs » (Gloire au Souverain, le Pur), en élevant la voix et en allongeant la dernière fois.",
      source: "Sunan An-Nasa'i (n°1732), authentifié par Al-Albani"
    }
  },
  {
    n: 5,
    a: "السَّلَامُ",
    p: "As-Salam",
    f: "La Paix et la Source de Paix",
    m: "Celui qui est indemne de tout défaut et qui diffuse la sécurité et la sérénité.",
    detailedMeaning: "As-Salam incarne la paix par essence. Ses actes sont exempts d'injustice, Ses attributs sont préservés de toute déficience, et c'est de Lui seul qu'émane toute paix intérieure, salut dans ce bas-monde et salut éternel au Paradis (Dar as-Salam).",
    quran: {
      arabic: "وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
      translation: "Allah appelle à la demeure de la paix et guide qui Il veut vers un droit chemin.",
      surah: "Sourate Yunus (10:25)"
    },
    hadith: {
      text: "Lorsque le Prophète ﷺ terminait sa prière obligatoire, il demandait pardon trois fois puis disait : « Allâhumma Antas-Salâm wa minkas-Salâm, tabârakta yâ dhal-Jalâli wal-Ikrâm » (Ô Allah ! Tu es la Paix et de Toi vient la Paix, béni sois-Tu, Ô Détenteur de Majesté et de Générosité).",
      source: "Sahih Muslim (n°591)"
    }
  },
  {
    n: 6,
    a: "الْمُؤْمِنُ",
    p: "Al-Mu'min",
    f: "Le Rassurant / Le Fidèle",
    m: "Celui qui accorde la foi, la sécurité aux cœurs et confirme Ses promesses.",
    detailedMeaning: "Al-Mu'min est Celui qui a rendu témoignage de Sa propre véracité et de celle de Ses envoyés par les miracles. Il est le Dispensateur de la paix de l'âme et de la sécurité contre Ses tourments pour quiconque croit en Lui.",
    quran: {
      arabic: "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ",
      translation: "Qui les a nourris contre la faim et rassurés de la peur !",
      surah: "Sourate Quraysh (106:4)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Le croyant est celui auprès de qui les gens se sentent en sécurité (amân) pour leurs biens et leurs personnes. »",
      source: "Jami' At-Tirmidhi (n°2627), authentique"
    }
  },
  {
    n: 7,
    a: "الْمُهَيْمِنُ",
    p: "Al-Muhaymin",
    f: "Le Protecteur / Surveillant",
    m: "Celui qui veille sur toute chose, témoin vigilant et gardien absolu.",
    detailedMeaning: "Al-Muhaymin combine trois significations sublimes : la connaissance exhaustive de toute action, la garde protectrice infaillible et le témoignage impartial au Jour du Jugement. Rien ne saurait échapper à Son regard pénétrant.",
    quran: {
      arabic: "الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ",
      translation: "Le Souverain, Le Pur, La Paix, Le Rassurant, Le Gardien vigilant, Le Tout-Puissant...",
      surah: "Sourate Al-Hashr (59:23)"
    },
    hadith: {
      text: "Le Prophète ﷺ invoquait : « Ô Allah ! C'est Toi le Compagnon de voyage et le Gardien protecteur de la famille laissée derrière soi. »",
      source: "Sahih Muslim (n°1342)"
    }
  },
  {
    n: 8,
    a: "الْعَزِيزُ",
    p: "Al-'Aziz",
    f: "Le Tout-Puissant",
    m: "L'Invincible que nul ne peut surpasser et auprès de qui se trouve toute gloire.",
    detailedMeaning: "La racine 'Izz' désigne la puissance victorieuse, l'inaccessibilité au mal et la rareté précieuse. Al-'Aziz est le Majestueux dont la volonté s'impose toujours, et dont personne ne peut entraver le jugement.",
    quran: {
      arabic: "وَإِنَّ رَبَّكَ لَهُوَ الْعَزِيزُ الرَّحِيمُ",
      translation: "Et certes, ton Seigneur est le Tout-Puissant, le Très-Miséricordieux.",
      surah: "Sourate Ash-Shu'ara (26:9)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait lors des épreuves : « Je cherche refuge auprès de Ta Puissance ('Izzatika), nulle divinité en dehors de Toi, afin que Tu ne m'égares point. Tu es le Vivant qui ne meurt jamais, tandis que les djinns et les hommes meurent. »",
      source: "Sahih Al-Bukhari (n°7383) et Sahih Muslim (n°2717)"
    }
  },
  {
    n: 9,
    a: "الْجَبَّارُ",
    p: "Al-Jabbar",
    f: "L'Imposant / Le Réparateur",
    m: "Celui qui soumet toute la création à Sa volonté et qui panse les cœurs brisés.",
    detailedMeaning: "Al-Jabbar comporte une double dimension spirituelle : d'une part la toute-puissance qui plie et soumet les tyrans orgueilleux ; d'autre part, la tendresse infinie du 'Jabr' qui répare les fractures de l'âme, console les affligés et enrichit les pauvres.",
    quran: {
      arabic: "الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ ۚ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ",
      translation: "Le Tout-Puissant, Celui qui soumet tout, Le Superbe. Gloire à Allah ! Il transcende ce qu'ils Lui associent.",
      surah: "Sourate Al-Hashr (59:23)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait entre les deux prosternations de la prière : « Rabbi-ghfir lî, warhamnî, wajburnî, warfa'nî, warzuqnî » (Seigneur, pardonne-moi, fais-moi miséricorde, répare mes faiblesses, élève-moi et accorde-moi ma subsistance).",
      source: "Sunan Abi Dawud (n°850) et Jami' At-Tirmidhi (n°284)"
    }
  },
  {
    n: 10,
    a: "الْمُتَكَبِّرُ",
    p: "Al-Mutakabbir",
    f: "Le Majestueux / Le Superbe",
    m: "Celui à qui appartient la grandeur suprême et exclusive, au-dessus de tout mal.",
    detailedMeaning: "La fierté et la grandeur légitime n'appartiennent qu'au Créateur. Al-Mutakabbir est Celui qui s'élève au-dessus des attributs de Ses créatures, dédaigne toute injustice et anéantit la vanité des créatures qui tentent d'usurper Sa fierté.",
    quran: {
      arabic: "وَلَهُ الْكِبْرِيَاءُ فِي السَّمَاوَاتِ وَالْأَرْضِ ۖ وَهُوَ الْعَزِيزُ الْحَكِيمُ",
      translation: "Et à Lui la Grandeur dans les cieux et la terre. Et c'est Lui le Puissant, le Sage.",
      surah: "Sourate Al-Jathiya (45:37)"
    },
    hadith: {
      text: "Allah le Très-Haut a dit dans un Hadith Qudsi : « La Grandeur est Mon manteau et la Majesté Mon habit. Quiconque Me dispute l'un d'eux, Je le châtierai. »",
      source: "Sahih Muslim (n°2620)"
    }
  },
  {
    n: 11,
    a: "الْخَالِقُ",
    p: "Al-Khaliq",
    f: "Le Créateur",
    m: "Celui qui détermine l'existence et fait surgir toute chose à partir du néant.",
    detailedMeaning: "Al-Khaliq est Celui qui conçoit, mesure avec une rigueur absolue et donne existence à ce qui n'était rien auparavant selon Son dessein et Sa pré-détermination parfaite.",
    quran: {
      arabic: "اللَّهُ خَالِقُ كُلِّ شَيْءٍ ۖ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ وَكِيلٌ",
      translation: "Allah est le Créateur de toute chose, et de toute chose Il est le Garant.",
      surah: "Sourate Az-Zumar (39:62)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Nulle créature n'a droit à l'obéissance dans la désobéissance au Créateur (Al-Khâliq). »",
      source: "Musnad Ahmad (n°1095), authentifié par Al-Albani"
    }
  },
  {
    n: 12,
    a: "الْبَارِئُ",
    p: "Al-Bari'",
    f: "Le Novateur / Le Producteur",
    m: "Celui qui tire la création du néant et l'agence avec harmonie sans défaut.",
    detailedMeaning: "Du verbe 'Bara'a' signifiant séparer et façonner. Al-Bari' extirpe la création du vide pour lui donner une forme matérielle harmonieuse, parfaitement adaptée à son rôle dans l'écosystème cosmique.",
    quran: {
      arabic: "هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ",
      translation: "C'est Lui Allah, le Créateur, le Novateur, le Façonneur. À Lui les plus beaux Noms.",
      surah: "Sourate Al-Hashr (59:24)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait dans ses invocations au coucher : « Louange à Allah qui m'a suffi et m'a abrité, et louange à Allah qui m'a nourri et abreuvé... »",
      source: "Sahih Muslim (n°2715)"
    }
  },
  {
    n: 13,
    a: "الْمُصَوِّرُ",
    p: "Al-Musawwir",
    f: "Le Façonneur",
    m: "Celui qui donne à chaque être sa silhouette, son visage et ses traits distincts.",
    detailedMeaning: "Al-Musawwir confère à chaque créature son apparence extérieure et intérieure unique. Des empreintes digitales aux galaxies, Il conçoit une diversité infinie sans jamais épuiser Son art divin.",
    quran: {
      arabic: "هُوَ الَّذِي يُصَوِّرُكُمْ فِي الْأَرْحَامِ كَيْفَ يَشَاءُ ۚ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ",
      translation: "C'est Lui qui vous façonne dans les matrices comme Il veut. Point de divinité sinon Lui, le Puissant, le Sage.",
      surah: "Sourate Ali 'Imran (3:6)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait en prosternation : « Mon visage s'est prosterné devant Celui qui l'a créé, l'a façonné et lui a fendu son ouïe et sa vue. Béni soit Allah, le Meilleur des créateurs ! »",
      source: "Sahih Muslim (n°771)"
    }
  },
  {
    n: 14,
    a: "الْغَفَّارُ",
    p: "Al-Ghaffar",
    f: "Le Pardonneur Indulgent",
    m: "Celui qui dissimule inlassablement les péchés et pardonne à répétition.",
    detailedMeaning: "Al-Ghaffar est la forme intensive de 'Ghafar' (couvrir, préserver). Il voile les turpitudes de Ses serviteurs dans ce monde et efface leurs sanctions dans l'autre, quel que soit le nombre de fois où le serviteur retombe puis se repent.",
    quran: {
      arabic: "وَإِنِّي لَغَفَّارٌ لِّمَن تَابَ وَآمَنَ وَعَمِلَ صَالِحًا ثُمَّ اهْتَدَىٰ",
      translation: "Et Je suis Grand Pardonneur envers celui qui se repent, croit, fait bonne œuvre puis se met sur le bon chemin.",
      surah: "Sourate Ta-Ha (20:82)"
    },
    hadith: {
      text: "Allah le Très-Haut a dit : « Ô fils d'Adam ! Si tes péchés atteignaient les cimes du ciel et qu'ensuite tu Me demandais pardon, Je te pardonnerais sans Me soucier de leur nombre. »",
      source: "Jami' At-Tirmidhi (n°3540), authentifié par Al-Albani"
    }
  },
  {
    n: 15,
    a: "الْقَهَّارُ",
    p: "Al-Qahhar",
    f: "Le Dominateur Suprême",
    m: "Celui devant la majesté de qui tout être ploie, vaincu et soumis.",
    detailedMeaning: "Al-Qahhar brise les desseins des orgueilleux et soumet toute créature vivante aux lois inexorables de la vie, de la maladie et de la mort. Nulle force ne saurait échapper à Son emprise universelle.",
    quran: {
      arabic: "يَوْمَ هُم بَارِزُونَ ۖ لَا يَخْفَىٰ عَلَى اللَّهِ مِنْهُمْ شَيْءٌ ۚ لِّمَنِ الْمُلْكُ الْيَوْمَ ۖ لِلَّهِ الْوَاحِدِ الْقَهَّارِ",
      translation: "Le jour où ils comparaîtront sans que rien d'eux n'échappe à Allah. 'À qui la royauté aujourd'hui ? À Allah, l'Unique, le Dominateur Suprême.'",
      surah: "Sourate Ghafir (40:16)"
    },
    hadith: {
      text: "Lorsque le Prophète ﷺ se retournait la nuit dans son lit, il disait : « Nulle divinité en dehors d'Allah, l'Unique, le Dominateur Suprême, Seigneur des cieux et de la terre et de ce qui se trouve entre eux, le Tout-Puissant, le Grand Pardonneur. »",
      source: "Sahih Ibn Hibban (n°5530), authentique selon An-Nawawi"
    }
  },
  {
    n: 16,
    a: "الْوَهَّابُ",
    p: "Al-Wahhab",
    f: "Le Grand Donateur",
    m: "Celui qui donne continuellement sans compensation ni contrepartie attendue.",
    detailedMeaning: "Issu de la 'Hiba' (don gratuit et désintéressé). Al-Wahhab comble Ses créatures de grâces immenses, de foi, de santé et de clairvoyance sans qu'elles n'aient de droit préalable sur Lui ni qu'Il n'attende d'avantage en retour.",
    quran: {
      arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
      translation: "Seigneur ! Ne laisse pas dévier nos cœurs après nous avoir guidés, et accorde-nous de Ta part une miséricorde. Car c'est Toi le Grand Donateur.",
      surah: "Sourate Ali 'Imran (3:8)"
    },
    hadith: {
      text: "Le Prophète ﷺ invoquait : « Seigneur, accorde-moi une foi inébranlable et une certitude véridique... C'est Toi qui combles de bienfaits. »",
      source: "Musnad Ahmad (n°2420)"
    }
  },
  {
    n: 17,
    a: "الرَّزَّاقُ",
    p: "Ar-Razzaq",
    f: "Le Pourvoyeur",
    m: "Celui qui assure et répartit la subsistance matérielle et spirituelle de chaque âme.",
    detailedMeaning: "Ar-Razzaq nourrit aussi bien les corps par les aliments et la santé, que les cœurs et les esprits par la sagesse, le savoir et la lumière de la foi. Aucun être ne meurt avant d'avoir consommé l'intégralité du 'Rizq' qui lui était destiné.",
    quran: {
      arabic: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
      translation: "En vérité, c'est Allah qui est le Grand Pourvoyeur, le Détenteur de la force inébranlable.",
      surah: "Sourate Adh-Dhariyat (51:58)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Si vous vous en remettiez à Allah d'une confiance véridique, Il vous pourvoirait comme Il pourvoit l'oiseau : il part le matin le ventre vide et rentre le soir rassasié. »",
      source: "Jami' At-Tirmidhi (n°2344), authentique"
    }
  },
  {
    n: 18,
    a: "الْفَتَّاحُ",
    p: "Al-Fattah",
    f: "Celui qui ouvre / L'Arbitre Suprême",
    m: "Celui qui ouvre les portes fermées, résout les difficultés et juge avec équité.",
    detailedMeaning: "Al-Fattah ouvre les portes des solutions, de la compréhension spirituelle et du secours providentiel là où tout semblait bloqué. Il est également le Juge Suprême qui départage avec clarté la vérité du mensonge.",
    quran: {
      arabic: "قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا ثُمَّ يَفْتَحُ بَيْنَنَا بِالْحَقِّ وَهُوَ الْفَتَّاحُ الْعَلِيمُ",
      translation: "Dis : 'Notre Seigneur nous réunira, puis Il tranchera entre nous avec la vérité. Car Il est l'Arbitre Suprême, l'Omniscient.'",
      surah: "Sourate Saba (34:26)"
    },
    hadith: {
      text: "En entrant dans la mosquée, le Prophète ﷺ enseignait de dire : « Ô Allah ! Ouvre-moi les portes de Ta miséricorde » (Allâhummaftah lî abwâba rahmatik).",
      source: "Sahih Muslim (n°713)"
    }
  },
  {
    n: 19,
    a: "الْعَلِيمُ",
    p: "Al-'Alim",
    f: "L'Omniscient",
    m: "Celui dont le savoir parfait embrasse l'invisible, le visible, le passé et l'avenir.",
    detailedMeaning: "La science d'Allah précède toute création, pénètre les replis les plus secrets de la conscience et perçoit le mouvement d'un atome dans l'immensité cosmique sans jamais subir d'oubli ni d'inattention.",
    quran: {
      arabic: "وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
      translation: "Et Il est Omniscient de toute chose.",
      surah: "Sourate Al-Baqarah (2:29)"
    },
    hadith: {
      text: "Le Prophète ﷺ enseignait la prière de consultation (Istikhâra) : « Ô Allah ! Je Te consulte de par Ta science et je prends puissance de par Ta puissance... Tu sais et je ne sais pas, et Tu es le Grand Connaisseur des mystères. »",
      source: "Sahih Al-Bukhari (n°1162)"
    }
  },
  {
    n: 20,
    a: "الْقَابِضُ",
    p: "Al-Qabid",
    f: "Celui qui retient et restreint",
    m: "Celui qui restreint la subsistance, retient les âmes et resserre selon Sa sagesse.",
    detailedMeaning: "Al-Qabid éprouve Ses serviteurs par la retenue et le resserrement passager afin d'éveiller leur humilité et leur repentir. Cette retenue découle d'une sagesse infinie et d'une bienveillance préservatrice.",
    quran: {
      arabic: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ وَإِلَيْهِ تُرْجَعُونَ",
      translation: "Allah restreint ou étend Ses dons. Et c'est vers Lui que vous serez ramenés.",
      surah: "Sourate Al-Baqarah (2:245)"
    },
    hadith: {
      text: "Le Messager d'Allah ﷺ a dit : « Certes, c'est Allah qui fixe les prix, qui retient (Al-Qâbid), qui dispense largement (Al-Bâsit) et qui pourvoit. »",
      source: "Sunan Abi Dawud (n°3451) et Jami' At-Tirmidhi (n°1314), authentique"
    }
  },
  {
    n: 21,
    a: "الْبَاسِطُ",
    p: "Al-Basit",
    f: "Celui qui dilate et dispense avec largesse",
    m: "Celui qui répand Ses bienfaits avec abondance, élargit les cœurs et rassérène.",
    detailedMeaning: "Complémentaire d'Al-Qabid, Al-Basit étend la subsistance matérielle, console les âmes et ouvre largement les horizons spirituels par la joie de la foi et la libération de toute détresse.",
    quran: {
      arabic: "اللَّهُ يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ مِنْ عِبَادِهِ وَيَقْدِرُ لَهُ",
      translation: "Allah dispense largement Sa subsistance à qui Il veut parmi Ses serviteurs, ou la restreint.",
      surah: "Sourate Al-'Ankabut (29:62)"
    },
    hadith: {
      text: "Le Prophète ﷺ invoquait : « Ô Allah ! Nul ne peut retenir ce que Tu as étendu, et nul ne peut étendre ce que Tu as retenu. »",
      source: "Musnad Ahmad (n°15492) et Al-Adab Al-Mufrad (n°699)"
    }
  },
  {
    n: 22,
    a: "الْخَافِضُ",
    p: "Al-Khafid",
    f: "Celui qui abaisse",
    m: "Celui qui abaisse les arrogants, les oppresseurs et les égarés infatués d'eux-mêmes.",
    detailedMeaning: "Al-Khafid brise l'orgueil des tyrans et prive d'honneur ceux qui méprisent la justice divine. Il réduit à néant les faux prestiges terrestres face à la grandeur de la vérité.",
    quran: {
      arabic: "إِذَا وَقَعَتِ الْوَاقِعَةُ ... خَافِضَةٌ رَّافِعَةٌ",
      translation: "Quand l'Événement inéluctable arrivera... Il abaissera [les uns] et élèvera [les autres].",
      surah: "Sourate Al-Waqi'ah (56:1-3)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Certes, Allah n'élève une chose de ce monde sans ensuite la redescendre (pour enseigner l'humilité). »",
      source: "Sahih Al-Bukhari (n°2872)"
    }
  },
  {
    n: 23,
    a: "الرَّافِعُ",
    p: "Ar-Rafi'",
    f: "Celui qui élève",
    m: "Celui qui hausse les rangs des humbles, des savants et des serviteurs sincères.",
    detailedMeaning: "Ar-Rafi' accorde une distinction noble et pérenne à ceux qui se soumettent avec dévotion. Il élève leurs cœurs par la lumière de la foi et leur confère une place éminente au Paradis.",
    quran: {
      arabic: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
      translation: "Allah élèvera en degrés ceux d'entre vous qui ont cru et ceux qui ont reçu le savoir.",
      surah: "Sourate Al-Mujadila (58:11)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Jamais une personne ne fait preuve d'humilité par amour pour Allah sans qu'Allah ne l'élève. »",
      source: "Sahih Muslim (n°2588)"
    }
  },
  {
    n: 24,
    a: "الْمُعِزُّ",
    p: "Al-Mu'izz",
    f: "Celui qui accorde la puissance et l'honneur",
    m: "Celui qui confère la véritable noblesse, le secours et la dignité.",
    detailedMeaning: "L'honneur véritable ne provient ni de la lignée ni des trésors périssables, mais de la proximité avec le Créateur. Al-Mu'izz rend invincible le cœur qui ne cherche sa gloire qu'en Allah.",
    quran: {
      arabic: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ",
      translation: "Dis : 'Ô Allah, Maître de l'autorité ! Tu donnes le pouvoir à qui Tu veux et Tu l'arraches à qui Tu veux; Tu rends puissant qui Tu veux...'",
      surah: "Sourate Ali 'Imran (3:26)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « La fierté et la dignité de l'homme résident dans sa foi, et son honneur réside dans ses œuvres de bienfaisance. »",
      source: "Musnad Ahmad (n°8747)"
    }
  },
  {
    n: 25,
    a: "الْمُذِلُّ",
    p: "Al-Mudhill",
    f: "Celui qui humilie",
    m: "Celui qui prive d'honneur ceux qui se rebellent contre la rectitude et la vérité.",
    detailedMeaning: "Al-Mudhill abandonne les orgueilleux à leurs illusions trompeuses jusqu'à ce que leur châtiment et leur disgrâce éclatent aux yeux du monde.",
    quran: {
      arabic: "وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      translation: "Tu honores qui Tu veux et Tu humilies qui Tu veux. Le bien est en Ta main et Tu es Omnipotent sur toute chose.",
      surah: "Sourate Ali 'Imran (3:26)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Quiconque cherche la gloire dans le péché, Allah ne manquera pas de l'humilier. »",
      source: "Al-Bayhaqi dans Shu'ab Al-Iman"
    }
  },
  {
    n: 26,
    a: "السَّمِيعُ",
    p: "As-Sami'",
    f: "L'Audient",
    m: "Celui qui entend tout soupir, chuchotement, invocation secrète et parole prononcée.",
    detailedMeaning: "L'ouïe divine transcende le temps, les distances et les barrières physiques. La simultanéité des prières de milliards d'êtres dans toutes les langues ne crée nulle confusion pour As-Sami'.",
    quran: {
      arabic: "لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ",
      translation: "Il n'y a rien qui Lui ressemble; et c'est Lui l'Audient, le Clairvoyant.",
      surah: "Sourate Ash-Shura (42:11)"
    },
    hadith: {
      text: "'Aïcha (qu'Allah l'agrée) a dit : « Louange à Allah dont l'ouïe embrasse toutes les voix ! La femme qui plaidait avec le Prophète était dans un coin de la pièce et je ne saisissais pas tout ce qu'elle disait, mais Allah a révélé : 'Allah a bien entendu la parole de celle qui discutait avec toi...' »",
      source: "Sahih Al-Bukhari (n°7386) et Sunan An-Nasa'i"
    }
  },
  {
    n: 27,
    a: "الْبَصِيرُ",
    p: "Al-Basir",
    f: "Le Clairvoyant",
    m: "Celui qui voit toute chose dans l'infiniment grand comme dans l'infiniment petit.",
    detailedMeaning: "Al-Basir perçoit la démarche d'une fourmi noire sur un rocher obscur au cœur de la nuit noire. Il voit les arrière-pensées, les intentions cachées et les moindres mouvements de l'univers.",
    quran: {
      arabic: "إِنَّ اللَّهَ يَعْلَمُ غَيْبَ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَاللَّهُ بَصِيرٌ بِمَا تَعْمَلُونَ",
      translation: "Allah connaît l'inconnaissable des cieux et de la terre et Allah est Clairvoyant sur ce que vous faites.",
      surah: "Sourate Al-Hujurat (49:18)"
    },
    hadith: {
      text: "Le Prophète ﷺ a défini l'excellence de la foi (Al-Ihsân) : « C'est d'adorer Allah comme si tu Le voyais, car si toi tu ne Le vois pas, certes Lui te voit. »",
      source: "Sahih Muslim (n°8) et Sahih Al-Bukhari (n°50)"
    }
  },
  {
    n: 28,
    a: "الْحَكَمُ",
    p: "Al-Hakam",
    f: "Le Juge Arbitre",
    m: "L'Arbitre impartial suprême dont les jugements ne souffrent aucun appel.",
    detailedMeaning: "Al-Hakam tranche souverainement les litiges entre les hommes. Ses lois sont pure justice, Ses promesses sont vérités et nulle iniquité ne peut entacher Ses décrets.",
    quran: {
      arabic: "أَفَغَيْرَ اللَّهِ أَبْتَغِي حَكَمًا وَهُوَ الَّذِي أَنزَلَ إِلَيْكُمُ الْكِتَابَ مُفَصَّلًا",
      translation: "Chercherai-je un autre juge qu'Allah, alors que c'est Lui qui a fait descendre vers vous ce Livre explicité ?",
      surah: "Sourate Al-An'am (6:114)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit au compagnon Hani' dont le surnom était Abul-Hakam : « Certes, Allah est le Juge (Al-Hakam) et c'est à Lui qu'appartient le jugement. »",
      source: "Sunan Abi Dawud (n°4955), authentique"
    }
  },
  {
    n: 29,
    a: "الْعَدْلُ",
    p: "Al-'Adl",
    f: "Le Juste Absolu",
    m: "L'Équité absolue, exempt de toute ombre d'injustice ou de partialité.",
    detailedMeaning: "Al-'Adl met chaque chose à sa juste place. Il récompense l'obéissance par Sa grâce et ne sanctionne la faute que selon sa juste proportion sans jamais léser quiconque du poids d'un grain de moutarde.",
    quran: {
      arabic: "وَتَمَّتْ كَلِمَتُ رَبِّكَ صِدْقًا وَعَدْلًا ۚ لَّا مُبَدِّلَ لِكَلِمَاتِهِ",
      translation: "Et la parole de ton Seigneur s'est accomplie en toute vérité et justice. Nul ne peut modifier Ses paroles.",
      surah: "Sourate Al-An'am (6:115)"
    },
    hadith: {
      text: "Allah le Très-Haut a dit dans un Hadith Qudsi : « Ô Mes serviteurs ! Je Me suis interdit l'injustice à Moi-même et Je l'ai déclarée interdite entre vous : ne soyez donc pas injustes les uns envers les autres ! »",
      source: "Sahih Muslim (n°2577)"
    }
  },
  {
    n: 30,
    a: "اللَّطِيفُ",
    p: "Al-Latif",
    f: "Le Subtil / Le Bienveillant",
    m: "Celui qui dispense Ses grâces avec une infinie délicatesse par des voies insoupçonnées.",
    detailedMeaning: "Al-Latif connaît les finesses les plus subtiles de Ses créatures et leur achemine la délivrance et le réconfort à travers des moyens discrets et inattendus, transformant les épreuves en trésors de bénédictions.",
    quran: {
      arabic: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
      translation: "Ne connaît-Il pas ce qu'Il a créé, alors qu'Il est le Subtil, le Parfaitement Informé ?",
      surah: "Sourate Al-Mulk (67:14)"
    },
    hadith: {
      text: "Le Prophète Joseph (Yusuf) disait : « Mon Seigneur est plein de douceur et de bienveillance (Latîf) pour ce qu'Il veut, car c'est Lui l'Omniscient, le Sage. »",
      source: "Sourate Yusuf (12:100)"
    }
  },
  {
    n: 31,
    a: "الْخَبِيرُ",
    p: "Al-Khabir",
    f: "Le Parfaitement Informé",
    m: "Celui qui pénètre les réalités profondes et les secrets intimes de toute chose.",
    detailedMeaning: "Tandis que la science générale est désignée par Al-'Alim, Al-Khabir met en valeur la perception de la vérité intrinsèque, la cause secrète et la finalité dissimulée derrière chaque phénomène.",
    quran: {
      arabic: "وَهُوَ الْحَكِيمُ الْخَبِيرُ",
      translation: "Et c'est Lui le Sage, le Parfaitement Informé.",
      surah: "Sourate Al-An'am (6:18)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit à 'Aïcha : « Tu m'informeras ou bien c'est le Subtil, le Parfaitement Informé (Al-Latîf Al-Khabîr) qui m'en informera. »",
      source: "Sahih Muslim (n°974)"
    }
  },
  {
    n: 32,
    a: "الْحَلِيمُ",
    p: "Al-Halim",
    f: "Le Très-Clément / Le Patient",
    m: "Celui qui ne précipite pas le châtiment et laisse au pécheur le répit du repentir.",
    detailedMeaning: "Al-Halim voit Ses créatures désobéir à Ses commandements mais n'est pas emporté par la colère. Il accorde des délais bienveillants afin que les égarés reviennent vers Sa grâce.",
    quran: {
      arabic: "وَاعْلَمُوا أَنَّ اللَّهَ غَفُورٌ حَلِيمٌ",
      translation: "Et sachez qu'Allah est Pardonneur et Plein de mansuétude.",
      surah: "Sourate Al-Baqarah (2:235)"
    },
    hadith: {
      text: "Lors de l'angoisse ou de l'affliction, le Prophète ﷺ invoquait : « Lâ ilâha illallâhul-'Adhîmul-Halîm... » (Nulle divinité en dehors d'Allah, l'Immense, le Très-Clément).",
      source: "Sahih Al-Bukhari (n°6345) et Sahih Muslim (n°2730)"
    }
  },
  {
    n: 33,
    a: "الْعَظِيمُ",
    p: "Al-'Azim",
    f: "L'Incommensurable / Le Majestueux",
    m: "Celui dont la grandeur transcende l'imagination humaine et la raison.",
    detailedMeaning: "Al-'Azim possède une grandeur absolue dans Son essence, Ses attributs et Ses actes. Tout ce qui est grand dans l'univers s'amenuise en une poussière négligeable face à Sa souveraineté.",
    quran: {
      arabic: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      translation: "Et Il est le Très-Haut, l'Incommensurable.",
      surah: "Sourate Al-Baqarah (2:255)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Quant à l'inclinaison (Rukû'), glorifiez-y le Seigneur l'Incommensurable (Subhâna Rabbiyal-'Adhîm). »",
      source: "Sahih Muslim (n°479)"
    }
  },
  {
    n: 34,
    a: "الْغَفُورُ",
    p: "Al-Ghafur",
    f: "Le Tout-Pardonnant",
    m: "Celui qui pardonne avec abondance et ensevelit les péchés sous Sa miséricorde.",
    detailedMeaning: "Al-Ghafur est Celui auprès de qui aucun péché n'est trop grave pour être effacé si le serviteur implore sincèrement Sa clémence. Il protège le repenti du déshonneur et des remords destructeurs.",
    quran: {
      arabic: "نَبِّئْ عِبَادِي أَنِّي أَنَا الْغَفُورُ الرَّحِيمُ",
      translation: "Informe Mes serviteurs que c'est Moi le Pardonneur, le Très-Miséricordieux.",
      surah: "Sourate Al-Hijr (15:49)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Par Celui qui détient mon âme dans Sa main, si vous ne commettiez pas de péchés, Allah vous ferait disparaître pour amener un peuple qui pécherait puis Lui demanderait pardon, et Il leur pardonnerait. »",
      source: "Sahih Muslim (n°2749)"
    }
  },
  {
    n: 35,
    a: "الشَّكُورُ",
    p: "Ash-Shakur",
    f: "Le Très-Reconnaissant",
    m: "Celui qui récompense magnifiquement le moindre acte pieux et multiplie les mérites.",
    detailedMeaning: "Ash-Shakur apprécie la modeste dévotion de Ses créatures et la rétribue par une béatitude infinie au Paradis. Il n'oublie aucune aumône, aucun sourire ni aucune invocation formulée pour Sa face.",
    quran: {
      arabic: "لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ ۚ إِنَّهُ غَفُورٌ شَكُورٌ",
      translation: "Afin qu'Il les récompense pleinement et leur ajoute de Sa grâce. Il est certes Pardonneur et Reconnaissant.",
      surah: "Sourate Fatir (35:30)"
    },
    hadith: {
      text: "Le Prophète ﷺ a raconté qu'un homme écarta une branche d'épines de la route : « Allah lui en fut reconnaissant (fashakara-llâhu lahu) et lui pardonna ses péchés. »",
      source: "Sahih Al-Bukhari (n°652) et Sahih Muslim (n°1914)"
    }
  },
  {
    n: 36,
    a: "الْعَلِيُّ",
    p: "Al-'Aliyy",
    f: "Le Très-Haut",
    m: "L'Élevé au zénith de la transcendance, au-dessus de toute création.",
    detailedMeaning: "Al-'Aliyy possède la suprématie de rang, d'essence et de domination. Il transcende toute ressemblance matérielle et trône avec majesté au-dessus des sept cieux.",
    quran: {
      arabic: "فَالْحُكْمُ لِلَّهِ الْعَلِيِّ الْكَبِيرِ",
      translation: "Le jugement appartient donc à Allah, le Très-Haut, le Grand.",
      surah: "Sourate Ghafir (40:12)"
    },
    hadith: {
      text: "Le Prophète ﷺ a ordonné lors de la prosternation : « Dites : Gloire à mon Seigneur le Très-Haut (Subhâna Rabbiyal-A'lâ). »",
      source: "Sunan Abi Dawud (n°869) et Sahih Muslim"
    }
  },
  {
    n: 37,
    a: "الْكَبِيرُ",
    p: "Al-Kabir",
    f: "L'Infiniment Grand",
    m: "Le Plus Grand que tout ce qui peut être conçu ou imaginé par l'esprit.",
    detailedMeaning: "Al-Kabir domine l'immensité de l'espace et du temps. C'est en vertu de ce Nom sacré que chaque prière, appel à la prière et fête musulmane s'ouvre par le cri de libération : 'Allahu Akbar' (Allah est plus Grand).",
    quran: {
      arabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
      translation: "Le Connaisseur de l'invisible et du visible, le Grand, le Sublime.",
      surah: "Sourate Ar-Ra'd (13:9)"
    },
    hadith: {
      text: "Un compagnon dit en ouvrant la prière : 'Allâhu Akbaru kabîrâ, wal-hamdu lillâhi kathîrâ...' Le Prophète ﷺ dit : « J'ai été émerveillé par cette parole, car les portes du ciel se sont ouvertes pour elle ! »",
      source: "Sahih Muslim (n°601)"
    }
  },
  {
    n: 38,
    a: "الْحَفِيظُ",
    p: "Al-Hafiz",
    f: "Le Préservateur / Le Gardien",
    m: "Celui qui sauvegarde l'ordre de l'univers et protège les œuvres et la foi des croyants.",
    detailedMeaning: "Al-Hafiz préserve les astres de la collision, sauvegarde les écritures célestes et garde les croyants des ruses sataniques. Aucune action humaine n'est oubliée de Ses registres éternels.",
    quran: {
      arabic: "إِنَّ رَبِّي عَلَىٰ كُلِّ شَيْءٍ حَفِيظٌ",
      translation: "Certes, mon Seigneur veille sur toute chose et la préserve.",
      surah: "Sourate Hud (11:57)"
    },
    hadith: {
      text: "Le Prophète ﷺ a enseigné au jeune Ibn 'Abbas : « Préserve les commandements d'Allah, Il te préservera (Ihfazillâha yahfazk). »",
      source: "Jami' At-Tirmidhi (n°2516), authentique"
    }
  },
  {
    n: 39,
    a: "الْمُقِيتُ",
    p: "Al-Muqit",
    f: "Le Nourricier / Le Dispensateur",
    m: "Celui qui dote chaque créature des provisions matérielles et spirituelles nécessaires.",
    detailedMeaning: "Al-Muqit calcule avec précision l'énergie, l'eau et le souffle nécessaires à chaque cellule vivante et préserve l'équilibre vital des espèces vivantes à travers les âges.",
    quran: {
      arabic: "وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ مُّقِيتًا",
      translation: "Et Allah est le Dispensateur et le Gardien vigilant de toute chose.",
      surah: "Sourate An-Nisa (4:85)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Il suffit comme péché à un homme d'abandonner ceux dont il a la charge nourricière (man yaqût). »",
      source: "Sunan Abi Dawud (n°1692), authentifié par Al-Albani"
    }
  },
  {
    n: 40,
    a: "الْحَسِيبُ",
    p: "Al-Hasib",
    f: "Le Comptable / Le Protecteur Suffisant",
    m: "Celui qui suffit amplement à Son serviteur et dénombre les comptes avec célérité.",
    detailedMeaning: "Al-Hasib comble le cœur de sérénité au point que le croyant ne craint plus rien des créatures. Au Jour dernier, Il effectuera le bilan de chaque vie avec une rapidité et une équité sans faille.",
    quran: {
      arabic: "وَكَفَىٰ بِاللَّهِ حَسِيبًا",
      translation: "Et Allah suffit amplement pour tenir les comptes.",
      surah: "Sourate An-Nisa (4:6)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Quand Abraham fut jeté dans le brasier, il dit : 'Hasbunallâhu wa ni'mal-Wakîl' (Allah nous suffit, et quel excellent Protecteur !). Et le Prophète Muhammad ﷺ a dit de même lorsque les coalisés menaçaient Médine. »",
      source: "Sahih Al-Bukhari (n°4563)"
    }
  },
  {
    n: 41,
    a: "الْجَلِيلُ",
    p: "Al-Jalil",
    f: "Le Majestueux",
    m: "Celui qui est drapé de dignité sublime, de magnificence et d'honneur souverain.",
    detailedMeaning: "Al-Jalil inspire la vénération respectueuse des cœurs purs. La contemplation de Sa splendeur emplit l'âme d'admiration, de crainte révérencielle et de paix sublime.",
    quran: {
      arabic: "تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ",
      translation: "Béni soit le Nom de ton Seigneur, Plein de Majesté et de Noblesse !",
      surah: "Sourate Ar-Rahman (55:78)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Attachez-vous fermement dans vos invocations à la formule : 'Yâ Dhal-Jalâli wal-Ikrâm' (Ô Détenteur de Majesté et de Générosité !). »",
      source: "Jami' At-Tirmidhi (n°3525), authentifié par Al-Albani"
    }
  },
  {
    n: 42,
    a: "الْكَرِيمُ",
    p: "Al-Karim",
    f: "Le Noble Généreux",
    m: "Celui qui donne sans compter, pardonne les fautes et honore sans exiger de tribut.",
    detailedMeaning: "Al-Karim comble Ses serviteurs même lorsqu'ils négligent Ses rappels. Sa bienveillance devance la demande, Ses largesses surpassent les mérites et Sa miséricorde dépasse les espoirs.",
    quran: {
      arabic: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
      translation: "Ô homme ! Qu'est-ce qui t'a trompé au sujet de ton Seigneur, le Noble Généreux ?",
      surah: "Sourate Al-Infitar (82:6)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Certes, votre Seigneur est Pudique et Généreux (Karîm) ; Il a honte, lorsque Son serviteur lève les mains vers Lui en prière, de les lui renvoyer vides et déçues. »",
      source: "Sunan Abi Dawud (n°1488) et Jami' At-Tirmidhi (n°3556)"
    }
  },
  {
    n: 43,
    a: "الرَّقِيبُ",
    p: "Ar-Raqib",
    f: "Le Vigilant / L'Observateur",
    m: "Celui qui observe sans relâche les battements des cœurs et les actes humains.",
    detailedMeaning: "Ar-Raqib ne s'assoupit jamais. Conscient de cette présence vigilante, le cœur du croyant cultive la pudeur spirituelle ('Al-Murâqaba') dans le secret le plus absolu comme en public.",
    quran: {
      arabic: "إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
      translation: "Certes, Allah est un Observateur vigilant sur vous.",
      surah: "Sourate An-Nisa (4:1)"
    },
    hadith: {
      text: "Jésus ('Issa) dira au Jour du Jugement : « ...Et quand Tu m'as rappelé vers Toi, c'est Toi qui étais leur Gardien vigilant (Ar-Raqîb), et Tu es témoin de toute chose. »",
      source: "Sourate Al-Ma'idah (5:117)"
    }
  },
  {
    n: 44,
    a: "الْمُجِيبُ",
    p: "Al-Mujib",
    f: "Celui qui exauce",
    m: "Celui qui accueille et répond avec amour à l'appel de celui qui L'invoque.",
    detailedMeaning: "Al-Mujib ne laisse aucune prière sincère se perdre. Il exauce la demande immédiatement, la réserve sous forme de grâce supérieure pour l'au-delà, ou détourne en échange un mal équivalent.",
    quran: {
      arabic: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ",
      translation: "Certes, mon Seigneur est tout proche et Il répond toujours aux prières.",
      surah: "Sourate Hud (11:61)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Nul croyant n'invoque Allah par une prière sans qu'Allah ne lui accorde sa demande, ne lui détourne un malheur semblable, ou ne la lui garde en récompense pour l'au-delà. »",
      source: "Jami' At-Tirmidhi (n°3573), authentique"
    }
  },
  {
    n: 45,
    a: "الْوَاسِعُ",
    p: "Al-Wasi'",
    f: "L'Immense / L'Infini",
    m: "Celui dont la miséricorde, la richesse, la science et le pardon englobent tout.",
    detailedMeaning: "Aucune limite ne circonscrit les attributs d'Al-Wasi'. Sa richesse ne s'amenuise jamais par Ses dons, et Sa miséricorde accueille les repentis les plus accablés sans jamais se tarir.",
    quran: {
      arabic: "وَلِلَّهِ الْمَشْرِقُ وَالْمَغْرِبُ ۚ فَأَيْنَمَا تُوَلُّوا فَثَمَّ وَجْهُ اللَّهِ ۚ إِنَّ اللَّهَ وَاسِعٌ عَلِيمٌ",
      translation: "À Allah appartiennent l'Orient et l'Occident. Où que vous vous tourniez, la Face d'Allah est là. Car Allah est Immense et Omniscient.",
      surah: "Sourate Al-Baqarah (2:115)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « La miséricorde d'Allah a embrassé toute chose, et Sa grâce est infinie. »",
      source: "Sahih Al-Bukhari (n°7453)"
    }
  },
  {
    n: 46,
    a: "الْحَكِيمُ",
    p: "Al-Hakim",
    f: "Le Sage Suprême",
    m: "Celui qui dispose toute chose à sa place idéale avec une perfection absolue.",
    detailedMeaning: "Al-Hakim n'accomplit rien au hasard. Même les difficultés et les épreuves de l'existence recèlent des bienfaits cachés et des leçons spirituelles que la raison humaine découvre avec reconnaissance.",
    quran: {
      arabic: "وَهُوَ الْعَزِيزُ الْحَكِيمُ",
      translation: "Et c'est Lui le Puissant, le Sage.",
      surah: "Sourate Ibrahim (14:4)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Ce qu'Allah a décrété pour le croyant est toujours un bien : s'il lui arrive un bonheur, il remercie et c'est un bien ; s'il lui arrive un malheur, il patiente et c'est un bien. »",
      source: "Sahih Muslim (n°2999)"
    }
  },
  {
    n: 47,
    a: "الْوَدُودُ",
    p: "Al-Wadud",
    f: "Le Tout-Aimant",
    m: "Celui qui aime tendrement Ses serviteurs fidèles et Se fait chérir d'eux.",
    detailedMeaning: "Le 'Wudd' est l'amour pur qui se manifeste par la tendresse, les délicatesses et la proximité. Al-Wadud déverse Son affection dans le cœur de ceux qui se tournent vers Lui avec sincérité.",
    quran: {
      arabic: "وَاسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ ۚ إِنَّ رَبِّي رَحِيمٌ وَدُودٌ",
      translation: "Et implorez le pardon de votre Seigneur, puis revenez à Lui. Mon Seigneur est certes Très-Miséricordieux et Plein d'amour.",
      surah: "Sourate Hud (11:90)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Quand Allah aime un serviteur, Il appelle l'ange Gabriel et lui dit : 'J'aime untel, aime-le donc !' Alors Gabriel l'aime, puis il lance l'appel dans les cieux : 'Allah aime untel, aimez-le !' Alors les habitants du ciel l'aiment, et on lui accorde l'agrément sur la terre. »",
      source: "Sahih Al-Bukhari (n°3209) et Sahih Muslim (n°2637)"
    }
  },
  {
    n: 48,
    a: "الْمَجِيدُ",
    p: "Al-Majid",
    f: "Le Très-Glorieux",
    m: "Le Souverain d'une gloire insigne, d'une noblesse parfaite et de bienfaits infinis.",
    detailedMeaning: "Al-Majid réunit la grandeur absolue et la générosité infinie. Sa royauté est immaculée et Sa munificence resplendit sur toutes les créatures des cieux et de la terre.",
    quran: {
      arabic: "ذُو الْعَرْشِ الْمَجِيدُ",
      translation: "Le Maître du Trône, le Très-Glorieux.",
      surah: "Sourate Al-Buruj (85:15)"
    },
    hadith: {
      text: "Dans la prière Abrahamique récitée à chaque Tashahhud : « Allâhumma salli 'alâ Muhammadin... Innaka Hamîdun Majîd » (Tu es certes digne de louange et Très-Glorieux).",
      source: "Sahih Al-Bukhari (n°3370) et Sahih Muslim (n°405)"
    }
  },
  {
    n: 49,
    a: "الْبَاعِثُ",
    p: "Al-Ba'ith",
    f: "Le Résurrecteur",
    m: "Celui qui réveillera les morts de leurs tombes et envoie les prophètes avec guidance.",
    detailedMeaning: "Al-Ba'ith insuffle la vie aux ossements devenus poussière au Jour dernier et ressuscite les consciences endormies par l'envoi des prophètes et la révélation des saintes écritures.",
    quran: {
      arabic: "وَأَنَّ السَّاعَةَ آتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَن فِي الْقُبُورِ",
      translation: "Et que l'Heure viendra sans aucun doute, et qu'Allah ressuscitera ceux qui sont dans les tombeaux.",
      surah: "Sourate Al-Hajj (22:7)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait à son réveil : « Louange à Allah qui nous a rendu la vie après nous avoir fait mourir (le sommeil), et c'est vers Lui que se fera la résurrection (An-Nushûr). »",
      source: "Sahih Al-Bukhari (n°6312)"
    }
  },
  {
    n: 50,
    a: "الشَّهِيدُ",
    p: "Ash-Shahid",
    f: "Le Témoin Infini",
    m: "Celui à qui rien n'échappe, présent et témoin de chaque parole et acte.",
    detailedMeaning: "Ash-Shahid constate toute réalité extérieure avec la même netteté qu'Il connaît les secrets de l'invisible. Au Jour du Jugement, Son témoignage souverain scellera le sort des créatures avec équité.",
    quran: {
      arabic: "قُلْ كَفَىٰ بِاللَّهِ شَهِيدًا بَيْنِي وَبَيْنَكُمْ ۚ إِنَّهُ كَانَ بِعِبَادِهِ خَبِيرًا بَصِيرًا",
      translation: "Dis : 'Allah suffit comme témoin entre vous et moi. Il est sur Ses serviteurs Parfaitement Informé et Clairvoyant.'",
      surah: "Sourate Al-Isra (17:96)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit lors de son prêche d'adieu : « Ai-je transmis le message ? » Les compagnons répondirent : « Oui ! » Il leva le doigt vers le ciel puis le baissa vers eux en disant : « Ô Allah, sois Témoin ! (Allâhumma sh-had). »",
      source: "Sahih Muslim (n°1218)"
    }
  },
  {
    n: 51,
    a: "الْحَقُّ",
    p: "Al-Haqq",
    f: "La Vérité Absolue",
    m: "L'Éternel immuable dont l'existence, la souveraineté et la parole sont vérités.",
    detailedMeaning: "Al-Haqq est l'Être réel par excellence : Son existence ne connaît ni début ni fin, Ses promesses se réalisent sans faillir et toute vérité émanant de la création n'est qu'un pâle reflet de Sa lumière.",
    quran: {
      arabic: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۖ لَا إِلَٰهَ إِلَّا هُوَ",
      translation: "Que soit exalté Allah, le Vrai Souverain ! Nulle divinité digne d'adoration en dehors de Lui.",
      surah: "Sourate Al-Mu'minun (23:116)"
    },
    hadith: {
      text: "Dans la prière nocturne, le Prophète ﷺ invoquait : « Tu es la Vérité (Antal-Haqq), Ta promesse est vérité, Ta parole est vérité, la rencontre avec Toi est vérité, le Paradis est vérité, et l'Enfer est vérité... »",
      source: "Sahih Al-Bukhari (n°1120) et Sahih Muslim (n°769)"
    }
  },
  {
    n: 52,
    a: "الْوَكِيلُ",
    p: "Al-Wakil",
    f: "Le Digne de Confiance / Le Garant",
    m: "Le Tuteur suprême à qui l'on peut confier avec sérénité la conduite de son destin.",
    detailedMeaning: "Al-Wakil gère les affaires de Ses serviteurs avec une perfection infiniment supérieure à ce qu'ils pourraient accomplir par eux-mêmes. Se reposer sur Lui (Tawakkul) décharge l'âme de toute anxiété futile.",
    quran: {
      arabic: "الَّذِينَ قَالَ لَهُمُ النَّاسُ إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا وَقَالُوا حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      translation: "Ceux à qui l'on disait : 'Les gens se sont rassemblés contre vous, craignez-les !' Cela accrut leur foi et ils dirent : 'Allah nous suffit, et quel excellent Garant !'",
      surah: "Sourate Ali 'Imran (3:173)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait en sortant de sa maison : « Au nom d'Allah, je m'en remets à Allah, il n'y a de force ni de puissance que par Allah » (Bismillâhi tawakkaltu 'alallâh, lâ hawla wa lâ quwwata illâ billâh).",
      source: "Sunan Abi Dawud (n°5095) et Jami' At-Tirmidhi (n°3426)"
    }
  },
  {
    n: 53,
    a: "الْقَوِيُّ",
    p: "Al-Qawiyy",
    f: "Le Tout-Fort",
    m: "Celui dont l'énergie et la force sont infinies, sans défaillance ni épuisement.",
    detailedMeaning: "Al-Qawiyy possède la pleine capacité motrice et créatrice. Rien dans les immensités galactiques ne peut opposer de résistance à Sa détermination souveraine.",
    quran: {
      arabic: "إِنَّ اللَّهَ لَقَوِيٌّ عَزِيزٌ",
      translation: "Certes, Allah est Fort et Puissant.",
      surah: "Sourate Al-Hajj (22:40)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Le croyant fort est meilleur et plus aimé d'Allah que le croyant faible, bien que dans les deux il y ait du bien. »",
      source: "Sahih Muslim (n°2664)"
    }
  },
  {
    n: 54,
    a: "الْمَتِينُ",
    p: "Al-Matin",
    f: "L'Inébranlable / Le Solide",
    m: "Celui dont la vigueur est inaltérable, incapable d'éprouver la moindre lassitude.",
    detailedMeaning: "Al-Matin désigne l'intensité indéfectible de la force divine. Ni l'effort, ni le passage des millénaires n'altèrent Son pouvoir qui demeure à jamais éclatant.",
    quran: {
      arabic: "إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ",
      translation: "En vérité, c'est Allah qui est le Grand Pourvoyeur, le Détenteur de la force inébranlable.",
      surah: "Sourate Adh-Dhariyat (51:58)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Certes, cette religion est solide et profonde (matîn), pénétrez-y donc avec douceur. »",
      source: "Musnad Ahmad (n°13052)"
    }
  },
  {
    n: 55,
    a: "الْوَلِيُّ",
    p: "Al-Waliyy",
    f: "Le Protecteur Allié / Le Bienfaiteur",
    m: "L'Ami intime, le Secoureur dévoué et le Défenseur bienveillant des croyants.",
    detailedMeaning: "Al-Waliyy prend en charge les affaires de ceux qui L'aiment : Il les tire des ténèbres vers la clarté lumineuse, guide leurs pas dans l'adversité et leur octroie Sa victoire.",
    quran: {
      arabic: "اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
      translation: "Allah est le Protecteur de ceux qui ont la foi : Il les fait sortir des ténèbres à la lumière.",
      surah: "Sourate Al-Baqarah (2:257)"
    },
    hadith: {
      text: "Allah le Très-Haut a dit dans un Hadith Qudsi : « Quiconque prend pour ennemi un de Mes alliés dévoués (walî), Je lui déclare la guerre ! »",
      source: "Sahih Al-Bukhari (n°6502)"
    }
  },
  {
    n: 56,
    a: "الْحَمِيدُ",
    p: "Al-Hamid",
    f: "Le Digne de Louange",
    m: "Celui qui est universellement loué pour Son essence, Ses attributs et Ses bienfaits.",
    detailedMeaning: "Al-Hamid mérite la louange éternelle même si aucune créature ne prononçait Son éloge. Tous les atomes de l'univers célèbrent Sa magnificence par leur simple existence harmonieuse.",
    quran: {
      arabic: "يَا أَيُّهَا النَّاسُ أَنتُمُ الْفُقَرَاءُ إِلَى اللَّهِ ۖ وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ",
      translation: "Ô hommes ! C'est vous les indigents envers Allah, tandis qu'Allah est le Riche et le Digne de louange.",
      surah: "Sourate Fatir (35:15)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait en se relevant de l'inclinaison : « Sami'allâhu liman hamidah... Rabbanâ wa lakal-hamd » (Allah entend celui qui Le loue... Ô notre Seigneur, à Toi la louange !).",
      source: "Sahih Al-Bukhari (n°795) et Sahih Muslim (n°409)"
    }
  },
  {
    n: 57,
    a: "الْمُحْصِي",
    p: "Al-Muhsi",
    f: "Celui qui dénombre et recense tout",
    m: "Celui dont le calcul exhaustif cerne chaque grain de poussière, souffle et pensée.",
    detailedMeaning: "Al-Muhsi possède un registre parfait où tout est consigné. Nulle goutte de pluie ni aucun battement d'aile d'oiseau ne quitte l'inventaire minutieux de Sa science infaillible.",
    quran: {
      arabic: "لَّقَدْ أَحْصَاهُمْ وَعَدَّهُمْ عَدًّا",
      translation: "Il les a dénombrés et bien comptés un à un.",
      surah: "Sourate Maryam (19:94)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Certes, Allah a 99 Noms... Quiconque les dénombre et les médite avec piété (ahsâha) entrera au Paradis. »",
      source: "Sahih Al-Bukhari (n°2736) et Sahih Muslim (n°2677)"
    }
  },
  {
    n: 58,
    a: "الْمُبْدِئُ",
    p: "Al-Mubdi'",
    f: "L'Auteur de la création initiale",
    m: "Celui qui initie la création sans modèle préexistant ni exemple antérieur.",
    detailedMeaning: "Al-Mubdi' conçoit l'univers ex nihilo par Sa seule parole créatrice 'Koun' (Sois !). Il inaugure les lois physiques et la vie avec une pureté originelle absolue.",
    quran: {
      arabic: "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ",
      translation: "C'est Lui certes qui commence la création et la refait.",
      surah: "Sourate Al-Buruj (85:13)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Allah existait alors qu'il n'y avait rien avant Lui, et Son Trône était sur l'eau, puis Il créa les cieux et la terre. »",
      source: "Sahih Al-Bukhari (n°3191)"
    }
  },
  {
    n: 59,
    a: "الْمُعِيدُ",
    p: "Al-Mu'id",
    f: "Le Réintégrateur / Le Restaurateur",
    m: "Celui qui redonnera vie à toute la création après sa mort pour le Jugement.",
    detailedMeaning: "Celui qui a fait surgir la création sans précédent est capable à plus forte raison de la rassembler et de la restaurer après sa décomposition physique dans la terre.",
    quran: {
      arabic: "كَمَا بَدَأْنَا أَوَّلَ خَلْقٍ نُّعِيدُهُ ۚ وَعْدًا عَلَيْنَا ۚ إِنَّا كُنَّا فَاعِلِينَ",
      translation: "Tout comme Nous avons commencé la première création, Nous la recommencerons. C'est une promesse qui Nous incombe !",
      surah: "Sourate Al-Anbiya (21:104)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Tout le corps du fils d'Adam sera dévoré par la terre sauf le coccyx (l'os minuscule de la base), c'est à partir de lui que la création sera reconstituée au Jour dernier. »",
      source: "Sahih Al-Bukhari (n°4935) et Sahih Muslim (n°2955)"
    }
  },
  {
    n: 60,
    a: "الْمُحْيِي",
    p: "Al-Muhyi",
    f: "Celui qui donne la vie",
    m: "Celui qui insuffle l'esprit vital dans la matière inerte et fait revivre les cœurs.",
    detailedMeaning: "Al-Muhyi fait verdir la terre aride après la pluie, fertilise l'embryon dans le sein maternel et ressuscite les âmes desséchées par la lumière vivifiante du Coran.",
    quran: {
      arabic: "فَانظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا ۚ إِنَّ ذَٰلِكَ لَمُحْيِي الْمَوْتَىٰ",
      translation: "Regarde donc les effets de la miséricorde d'Allah, comment Il redonne la vie à la terre après sa mort. C'est Lui en vérité qui fera revivre les morts.",
      surah: "Sourate Ar-Rum (30:50)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « L'exemple de celui qui se rappelle son Seigneur et de celui qui ne se Le rappelle point est comparable à l'exemple du vivant et du mort. »",
      source: "Sahih Al-Bukhari (n°6407) et Sahih Muslim (n°779)"
    }
  },
  {
    n: 61,
    a: "الْمُمِيتُ",
    p: "Al-Mumit",
    f: "Celui qui donne la mort",
    m: "Le Souverain qui décrète l'arrêt du souffle terrestre au terme fixé sans retard.",
    detailedMeaning: "Al-Mumit rappelle à Lui les âmes créées. La mort n'est pas un anéantissement mais une passerelle vers la vie véritable de l'au-delà, rappelant la caducité de l'orgueil humain.",
    quran: {
      arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۖ ثُمَّ إِلَيْنَا تُرْجَعُونَ",
      translation: "Toute âme goûtera la mort. Ensuite, c'est vers Nous que vous serez ramenés.",
      surah: "Sourate Al-'Ankabut (29:57)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Multipliez le souvenir de celle qui brise les plaisirs : la mort. »",
      source: "Jami' At-Tirmidhi (n°2307) et Sunan An-Nasa'i, authentique"
    }
  },
  {
    n: 62,
    a: "الْحَيُّ",
    p: "Al-Hayy",
    f: "Le Vivant Éternel",
    m: "Celui qui possède une vie parfaite, continue, sans commencement ni fin.",
    detailedMeaning: "La vie d'Allah n'est précédée d'aucun néant et suivie d'aucune fin. Elle est la source de toute existence, exempte de sommeil, de fatigue ou de dégénérescence.",
    quran: {
      arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
      translation: "Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent.",
      surah: "Sourate Al-Baqarah (2:255)"
    },
    hadith: {
      text: "Le Prophète ﷺ a entendu un homme invoquer : 'Ô Allah, je Te demande en attestant que c'est Toi le Vivant, le Subsistant par Soi (Yâ Hayyu yâ Qayyûm)...' Le Prophète ﷺ dit alors : « Il a certes invoqué Allah par Son Nom Suprême avec lequel, lorsqu'Il est prié, Il exauce ! »",
      source: "Sunan Abi Dawud (n°1495) et Jami' At-Tirmidhi (n°3544)"
    }
  },
  {
    n: 63,
    a: "الْقَيُّومُ",
    p: "Al-Qayyum",
    f: "L'Immuable / L'Autonome",
    m: "Celui qui subsiste par Lui-même et par qui subsiste l'ensemble de l'univers.",
    detailedMeaning: "Al-Qayyum n'a besoin d'aucun soutien, d'aucune nourriture ni d'aucun lieu pour être. En revanche, le moindre atome de la création a besoin de Son maintien perpétuel pour ne pas s'effondrer.",
    quran: {
      arabic: "وَعَنَتِ الْوُجُوهُ لِلْحَيِّ الْقَيُّومِ ۖ وَقَدْ خَابَ مَنْ حَمَلَ ظُلْمًا",
      translation: "Et les visages s'humilieront devant le Vivant, Celui qui subsiste par Lui-même. Et sera déçu quiconque porte une injustice.",
      surah: "Sourate Ta-Ha (20:111)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait dans son invocation de secours : « Yâ Hayyu yâ Qayyûm, bi-rahmatika astaghîth » (Ô Vivant, Ô Subsistant par Toi-même, par Ta miséricorde j'appelle au secours !).",
      source: "Jami' At-Tirmidhi (n°3524), authentifié par Al-Albani"
    }
  },
  {
    n: 64,
    a: "الْوَاجِدُ",
    p: "Al-Wajid",
    f: "L'Opulent / Celui qui trouve tout",
    m: "Celui qui ne manque de rien et dont aucune chose ne saurait échapper au vouloir.",
    detailedMeaning: "Al-Wajid ne connaît nulle pénurie. Tout ce qu'Il désire se trouve instantanément à Sa portée sans recherche laborieuse ni obstacle.",
    quran: {
      arabic: "وَمَا كَانَ اللَّهُ لِيُعْجِزَهُ مِن شَيْءٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ",
      translation: "Et rien dans les cieux ni sur terre ne saurait réduire Allah à l'impuissance.",
      surah: "Sourate Fatir (35:44)"
    },
    hadith: {
      text: "Allah dit dans le Hadith Qudsi : « Ô Mes serviteurs ! Si du premier au dernier d'entre vous... vous vous teniez sur une même terre pour Me demander et que J'accordais à chacun sa demande, cela ne diminuerait en rien ce que Je possède, pas plus qu'une aiguille plongée dans la mer n'en diminue l'eau. »",
      source: "Sahih Muslim (n°2577)"
    }
  },
  {
    n: 65,
    a: "الْمَاجِدُ",
    p: "Al-Majid",
    f: "L'Illustre / Le Noble",
    m: "Le Magnifique en bienfaits, en gloire, en largesses et en bonté infinie.",
    detailedMeaning: "Ce Nom exprime la surabondance de la générosité divine unie au faîte de la noblesse d'être. Ses présents ne tarissent jamais et Sa magnanimité est incomparable.",
    quran: {
      arabic: "قَالُوا أَتَعْجَبِينَ مِنْ أَمْرِ اللَّهِ ۖ رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ ۚ إِنَّهُ حَمِيدٌ مَّجِيدٌ",
      translation: "Ils dirent : 'T'étonnes-tu de l'ordre d'Allah ? Que la miséricorde d'Allah et Ses bénédictions soient sur vous, gens de cette demeure ! Il est digne de louange et Très-Noble.'",
      surah: "Sourate Hud (11:73)"
    },
    hadith: {
      text: "Le Prophète ﷺ enseignait la prière sur lui-même en concluant : « Innaka Hamîdun Majîd » (Tu es certes digne de louange et de gloire).",
      source: "Sahih Al-Bukhari (n°3370)"
    }
  },
  {
    n: 66,
    a: "الْوَاحِدُ",
    p: "Al-Wahid",
    f: "L'Unique",
    m: "L'Un sans second, sans égal et sans associé dans Sa royauté.",
    detailedMeaning: "Al-Wahid réfute le polythéisme sous toutes ses formes : Il est seul créateur, seul législateur et seul digne d'amour inconditionnel et d'adoration pieuse.",
    quran: {
      arabic: "وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
      translation: "Et votre Divinité est une Divinité Unique. Pas de divinité que Lui, le Tout-Miséricordieux, le Très-Miséricordieux.",
      surah: "Sourate Al-Baqarah (2:163)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « La meilleure parole que j'ai prononcée, moi ainsi que les prophètes avant moi, est : 'Lâ ilâha illallâhu wahdahu lâ sharîka lah' (Nulle divinité en dehors d'Allah, Seul et sans associé). »",
      source: "Muwatta Malik et Jami' At-Tirmidhi (n°3585)"
    }
  },
  {
    n: 67,
    a: "الْأَحَدُ",
    p: "Al-Ahad",
    f: "L'Un Absolu",
    m: "L'Indivisible, sans partie, sans commencement et sans descendance.",
    detailedMeaning: "Alors qu'Al-Wahid exclut la pluralité d'associés, Al-Ahad exprime l'indivisibilité absolue de Son essence sainte : Il n'a pas été engendré et n'engendre point, et nul n'est Son semblable.",
    quran: {
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ",
      translation: "Dis : 'Lui, Allah est Unique. Allah, le Refuge Universel.'",
      surah: "Sourate Al-Ikhlas (112:1-2)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « La récitation de 'Qul Huwa Allâhu Ahad' équivaut au tiers du Coran tout entier. »",
      source: "Sahih Al-Bukhari (n°5015) et Sahih Muslim (n°811)"
    }
  },
  {
    n: 68,
    a: "الصَّمَدُ",
    p: "As-Samad",
    f: "Le Soutien Universel / L'Impénétrable",
    m: "Celui dont toute créature a besoin et qui n'a besoin de rien ni de personne.",
    detailedMeaning: "As-Samad est le roc vers lequel toutes les créatures se tournent dans leurs détresses et leurs espoirs. Il n'a besoin ni de nourriture ni de repos, tandis que tout dépend de Sa pérennité.",
    quran: {
      arabic: "اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      translation: "Allah, Le Seul à être imploré pour ce que nous désirons. Il n'a jamais engendré, n'a pas été engendré non plus. Et nul n'est égal à Lui.",
      surah: "Sourate Al-Ikhlas (112:2-4)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit au sujet d'un homme qui invoquait en disant : 'Allâhumma innî as'aluka bi-annî ashhadu annaka Antallâhul-Ahadus-Samad...' : « Il a juré par le Nom Suprême d'Allah avec lequel toute demande est accordée ! »",
      source: "Sunan Abi Dawud (n°1493) et Jami' At-Tirmidhi (n°3475)"
    }
  },
  {
    n: 69,
    a: "الْقَادِرُ",
    p: "Al-Qadir",
    f: "Le Capable / Le Puissant",
    m: "Celui qui possède la capacité intégrale d'accomplir tout ce qu'Il décrète.",
    detailedMeaning: "Al-Qadir peut créer ou anéantir selon Sa volonté sans qu'aucun décret ne Le prenne au dépourvu ni ne rencontre la moindre difficulté d'exécution.",
    quran: {
      arabic: "قُلْ هُوَ الْقَادِرُ عَلَىٰ أَن يَبْعَثَ عَلَيْكُمْ عَذَابًا مِّن فَوْقِكُمْ أَوْ مِن تَحْتِ أَرْجُلِكُمْ",
      translation: "Dis : 'Il est capable d'envoyer sur vous un châtiment venant du haut ou de dessous vos pieds...'",
      surah: "Sourate Al-An'am (6:65)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Nul ne saurait devancer la volonté du Capable Suprême. »",
      source: "Musnad Ahmad (n°14321)"
    }
  },
  {
    n: 70,
    a: "الْمُقْتَدِرُ",
    p: "Al-Muqtadir",
    f: "L'Omnipotent Prédominant",
    m: "Le Dominateur absolu dont la puissance domine et subjugue toutes les forces.",
    detailedMeaning: "Al-Muqtadir est la forme superlative d'Al-Qadir. Sa puissance triomphe des complots des puissants de la terre et mène le destin universel à son accomplissement inéluctable.",
    quran: {
      arabic: "فَأَخَذْنَاهُمْ أَخْذَ عَزِيزٍ مُّقْتَدِرٍ",
      translation: "Nous les saisîmes donc du châtiment d'un Tout-Puissant, d'un Omnipotent.",
      surah: "Sourate Al-Qamar (54:42)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Les cœurs des fils d'Adam sont tous entre deux doigts des Doigts du Miséricordieux, comme un seul cœur, Il le tourne comme Il veut. »",
      source: "Sahih Muslim (n°2654)"
    }
  },
  {
    n: 71,
    a: "الْمُقَدِّمُ",
    p: "Al-Muqaddim",
    f: "Celui qui avance et donne priorité",
    m: "Celui qui élève, rapproche et favorise les êtres selon Sa justice souveraine.",
    detailedMeaning: "Al-Muqaddim avance dans le temps et dans les rangs spirituels les croyants dévoués et les prophètes, leur accordant la primauté sur la terre et dans les degrés célestes.",
    quran: {
      arabic: "يُقَدِّمُ مَن يَشَاءُ وَيُؤَخِّرُ مَن يَشَاءُ بِمَا قَدَّمَتْ أَيْدِيهِمْ",
      translation: "Il accorde priorité à qui Il veut et relègue qui Il veut en toute justice.",
      surah: "Sens coranique récurrent (Sourate Al-Qaf et Fatir)"
    },
    hadith: {
      text: "Le Prophète ﷺ invoquait à la fin de sa prière : « Antal-Muqaddimu wa Antal-Mu'akhkhiru, lâ ilâha illâ Ant » (Tu es Celui qui avance et Tu es Celui qui retarde, point de divinité en dehors de Toi).",
      source: "Sahih Al-Bukhari (n°1120) et Sahih Muslim (n°771)"
    }
  },
  {
    n: 72,
    a: "الْمُؤَخِّرُ",
    p: "Al-Mu'akhkhir",
    f: "Celui qui retarde et relègue",
    m: "Celui qui repousse dans le temps et abaisse les rangs des coupables.",
    detailedMeaning: "Al-Mu'akhkhir retarde le terme des peuples pour leur laisser la chance de se réformer ou relègue au dernier rang ceux qui ont méprisé Sa guidance et Ses commandements.",
    quran: {
      arabic: "إِنَّ أَجَلَ اللَّهِ إِذَا جَاءَ لَا يُؤَخَّرُ ۖ لَوْ كُنتُمْ تَعْلَمُونَ",
      translation: "Certes, le terme fixé par Allah, quand il vient, ne peut être retardé, si seulement vous saviez !",
      surah: "Sourate Nuh (71:4)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Seigneur ! Pardonne-moi ce que j'ai avancé et ce que j'ai retardé... C'est Toi qui avances et c'est Toi qui retardes. »",
      source: "Sahih Muslim (n°769)"
    }
  },
  {
    n: 73,
    a: "الْأَوَّلُ",
    p: "Al-Awwal",
    f: "Le Premier",
    m: "Celui avant qui rien n'existait, sans commencement temporel.",
    detailedMeaning: "Al-Awwal est la cause première de toute existence sans avoir Lui-même été causé. L'univers entier est né de Son décret, tandis que Lui est prééternel.",
    quran: {
      arabic: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ ۖ وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ",
      translation: "C'est Lui le Premier et le Dernier, l'Apparent et le Caché et Il est Omniscient de toute chose.",
      surah: "Sourate Al-Hadid (57:3)"
    },
    hadith: {
      text: "Le Prophète ﷺ invoquait avant de dormir : « Ô Allah ! Tu es le Premier, rien n'était avant Toi ; et Tu es le Dernier, rien ne sera après Toi ! »",
      source: "Sahih Muslim (n°2713)"
    }
  },
  {
    n: 74,
    a: "الْآخِرُ",
    p: "Al-Akhir",
    f: "Le Dernier",
    m: "Celui qui subsistera pour toujours lorsque tout aura disparu de l'univers.",
    detailedMeaning: "Quand les étoiles s'éteindront et que les créatures retourneront au néant, Al-Akhir demeurera dans Sa gloire impérissable, sans fin ni déclin.",
    quran: {
      arabic: "كُلُّ مَنْ عَلَيْهَا فَانٍ ۝ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
      translation: "Tout ce qui est sur elle (la terre) doit disparaître, seule subsistera la Face de ton Seigneur, Plein de Majesté et de Noblesse.",
      surah: "Sourate Ar-Rahman (55:26-27)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Tu es le Dernier et rien n'est après Toi. Règle pour nous notre dette et enrichis-nous contre la pauvreté. »",
      source: "Sahih Muslim (n°2713)"
    }
  },
  {
    n: 75,
    a: "الظَّاهِرُ",
    p: "Az-Zahir",
    f: "Le Manifeste / L'Éclatant",
    m: "Celui dont l'existence est révélée avec splendeur par les signes de l'univers.",
    detailedMeaning: "Az-Zahir se manifeste avec une éclatante certitude à travers l'ordonnancement mathématique du cosmos, la beauté des cieux et la vie qui foisonne dans la nature.",
    quran: {
      arabic: "سَنُرِيهِمْ آيَاتِنَا فِي الْآفَاقِ وَفِي أَنفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ",
      translation: "Nous leur montrerons Nos signes dans les horizons et en eux-mêmes, jusqu'à ce qu'il leur apparaisse clairement que c'est la vérité.",
      surah: "Sourate Fussilat (41:53)"
    },
    hadith: {
      text: "Le Prophète ﷺ a enseigné : « Tu es le Manifeste (Az-Zhâhir), nul n'est au-dessus de Toi ! »",
      source: "Sahih Muslim (n°2713)"
    }
  },
  {
    n: 76,
    a: "الْبَاطِنُ",
    p: "Al-Batin",
    f: "Le Caché / L'Insondable",
    m: "L'Invisible aux regards matériels et le Connaisseur des secrets les plus intimes.",
    detailedMeaning: "Les yeux de chair ne peuvent contempler Al-Batin dans ce monde, mais Son regard pénètre la trame invisible des pensées et de l'âme humaine.",
    quran: {
      arabic: "لَّا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ ۖ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
      translation: "Les regards ne peuvent l'atteindre, cependant qu'Il saisit tous les regards. Et Il est le Subtil, le Parfaitement Informé.",
      surah: "Sourate Al-An'am (6:103)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Et Tu es l'Insondable (Al-Bâtin), rien n'est plus impénétrable que Toi ! »",
      source: "Sahih Muslim (n°2713)"
    }
  },
  {
    n: 77,
    a: "الْوَالِي",
    p: "Al-Wali",
    f: "Le Maître Souverain / Le Gouverneur",
    m: "Le Maître unique qui administre et gouverne toute la création avec sagesse.",
    detailedMeaning: "Al-Wali ordonne le cours des événements, gère les royautés et pourvoit au destin de chaque créature sans avoir besoin de conseillers ni de délégués.",
    quran: {
      arabic: "لَهُ مُعَقِّبَاتٌ مِّن بَيْنِ يَدَيْهِ وَمِنْ خَلْفِهِ يَحْفَظُونَهُ مِنْ أَمْرِ اللَّهِ ... وَمَا لَهُم مِّن دُونِهِ مِن وَالٍ",
      translation: "...Et ils n'ont en dehors de Lui aucun maître ni protecteur souverain.",
      surah: "Sourate Ar-Ra'd (13:11)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Ô Allah, c'est Toi qui diriges les cœurs, dirige nos cœurs vers Ton obéissance ! »",
      source: "Sahih Muslim (n°2654)"
    }
  },
  {
    n: 78,
    a: "الْمُتَعَالِي",
    p: "Al-Muta'ali",
    f: "Le Sublime Transcendant",
    m: "L'Élevé infiniment au-dessus de toute calomnie, imperfection ou faiblesse.",
    detailedMeaning: "Al-Muta'ali transcende les fausses représentations humaines. Sa perfection surpasse infiniment ce que les négateurs ou les polythéistes Lui attribuent.",
    quran: {
      arabic: "عَالِمُ الْغَيْبِ وَالشَّهَادَةِ الْكَبِيرُ الْمُتَعَالِ",
      translation: "Le Connaisseur de ce qui est caché et de ce qui est visible, le Grand, le Très-Sublime.",
      surah: "Sourate Ar-Ra'd (13:9)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait dans ses louanges : « Que soit béni et exalté notre Seigneur (Tabâraka wa Ta'âlâ Rabbunâ), à Lui appartient la majesté suprême. »",
      source: "Sahih Al-Bukhari (n°1145)"
    }
  },
  {
    n: 79,
    a: "الْبَرُّ",
    p: "Al-Barr",
    f: "Le Bienfaisant / La Source de Bonté",
    m: "La Source originelle de toute bienveillance, compassion et loyauté fidèle.",
    detailedMeaning: "Al-Barr tient toutes Ses promesses avec fidélité et traite Ses serviteurs avec une mansuétude et une générosité paternelle infiniment douce et bienveillante.",
    quran: {
      arabic: "إِنَّا كُنَّا مِن قَبْلُ نَدْعُوهُ ۖ إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ",
      translation: "Nous L'invoquions auparavant. C'est Lui certes le Bienfaisant, le Très-Miséricordieux.",
      surah: "Sourate At-Tur (52:28)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « La piété et la vraie bienfaisance (Al-Birr) résident dans le bon comportement, et le péché est ce qui trouble ton for intérieur. »",
      source: "Sahih Muslim (n°2553)"
    }
  },
  {
    n: 80,
    a: "التَّوَّابُ",
    p: "At-Tawwab",
    f: "L'Accueillant au Repentir",
    m: "Celui qui inspire le repentir et l'agrée avec effusion sans jamais s'en lasser.",
    detailedMeaning: "At-Tawwab suscite d'abord le remords sincère dans le cœur du pécheur, puis lorsque celui-ci revient vers Lui en pleurant sa faute, Il le reçoit avec miséricorde et efface son passé.",
    quran: {
      arabic: "أَلَمْ يَعْلَمُوا أَنَّ اللَّهَ هُوَ يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَأْخُذُ الصَّدَقَاتِ وَأَنَّ اللَّهَ هُوَ التَّوَّابُ الرَّحِيمُ",
      translation: "Ne savent-ils pas que c'est Allah qui accueille le repentir de Ses serviteurs et reçoit les aumônes, et qu'Allah est l'Accueillant au repentir, le Très-Miséricordieux ?",
      surah: "Sourate At-Tawbah (9:104)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Certes, Allah se réjouit du repentir de Son serviteur plus que l'un d'entre vous qui retrouve sa chamelle égarée au milieu du désert avec ses vivres ! »",
      source: "Sahih Al-Bukhari (n°6309) et Sahih Muslim (n°2747)"
    }
  },
  {
    n: 81,
    a: "الْمُنْتَقِمُ",
    p: "Al-Muntaqim",
    f: "Le Justicier Vengeur",
    m: "Celui qui brise avec équité les tyrans obstinés après leur avoir laissé avertissement.",
    detailedMeaning: "La vengeance d'Allah n'a rien d'une passion aveugle : elle constitue l'application de la justice suprême pour venger les orphelins, les opprimés et restaurer l'ordre moral brisé par les criminels endurcis.",
    quran: {
      arabic: "إِنَّا مِنَ الْمُجْرِمِينَ مُنتَقِمُونَ",
      translation: "Nous Nous vengerons certes des criminels endurcis.",
      surah: "Sourate As-Sajdah (32:22)"
    },
    hadith: {
      text: "Le Prophète ﷺ a averti : « Prenez garde à l'invocation de l'opprimé, car il n'y a pas entre elle et Allah de voile ! »",
      source: "Sahih Al-Bukhari (n°2448) et Sahih Muslim (n°19)"
    }
  },
  {
    n: 82,
    a: "الْعَفُوُّ",
    p: "Al-'Afuww",
    f: "L'Indulgent / L'Effaceur des péchés",
    m: "Celui qui efface totalement les fautes sans laisser la moindre trace ni stigmate.",
    detailedMeaning: "La notion de ''Afw' est plus profonde que le simple pardon : elle implique d'effacer la faute comme le vent balaie une trace de pas dans le sable jusqu'à ce qu'il n'en subsiste plus rien.",
    quran: {
      arabic: "فَأُولَٰئِكَ عَسَى اللَّهُ أَن يَعْفُوَ عَنْهُمْ ۚ وَكَانَ اللَّهُ عَفُوًّا غَفُورًا",
      translation: "Pour ceux-là, il se peut qu'Allah leur pardonne. Et Allah est Indulgent et Grand Pardonneur.",
      surah: "Sourate An-Nisa (4:99)"
    },
    hadith: {
      text: "'Aïcha a demandé au Prophète ﷺ : « Si je sais quelle nuit est Laylatul-Qadr, que dois-je dire ? » Il répondit : « Dis : Allâhumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'annî (Ô Allah, Tu es l'Effaceur des péchés, Tu aimes effacer les fautes, alors efface mes péchés !). »",
      source: "Jami' At-Tirmidhi (n°3513) et Sunan Ibn Majah, authentique"
    }
  },
  {
    n: 83,
    a: "الرَّؤُوفُ",
    p: "Ar-Ra'uf",
    f: "Le Très-Compatissant",
    m: "Celui dont la tendresse, la pitié et la bienveillance sont au degré le plus touchant.",
    detailedMeaning: "La 'Ra'fa' est une miséricorde particulièrement délicate et protectrice qui préserve le serviteur des fardeaux insupportables et veille sur son bien-être avec une douceur infinie.",
    quran: {
      arabic: "وَإِنَّ اللَّهَ بِكُمْ لَرَءُوفٌ رَّحِيمٌ",
      translation: "Et certes, Allah est envers vous Compatissant et Très-Miséricordieux.",
      surah: "Sourate Al-Hadid (57:9)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « La compassion n'entre dans une chose sans la parer de beauté, et elle ne s'en retire sans l'enlaidir. »",
      source: "Sahih Muslim (n°2594)"
    }
  },
  {
    n: 84,
    a: "مَالِكُ الْمُلْكِ",
    p: "Malik-ul-Mulk",
    f: "Le Maître du Royaume Céleste et Terrestre",
    m: "Le Détenteur souverain et perpétuel de toute l'autorité dans l'univers.",
    detailedMeaning: "Tous les empires du monde ne sont que des ombres éphémères. Malik-ul-Mulk confère la royauté à qui Il veut pour l'éprouver, puis la reprend souverainement au moment décidé.",
    quran: {
      arabic: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ",
      translation: "Dis : 'Ô Allah, Maître de l'autorité suprême ! Tu donnes le pouvoir à qui Tu veux, et Tu l'arraches à qui Tu veux...'",
      surah: "Sourate Ali 'Imran (3:26)"
    },
    hadith: {
      text: "Le Prophète ﷺ a enseigné : « Nul n'a de titre plus répréhensible auprès d'Allah qu'un homme s'autoproclamant 'Roi des rois', car il n'y a de Roi Souverain qu'Allah. »",
      source: "Sahih Al-Bukhari (n°6205) et Sahih Muslim (n°2143)"
    }
  },
  {
    n: 85,
    a: "ذُو الْجَلَالِ وَالْإِكْرَامِ",
    p: "Dhul-Jalali wal-Ikram",
    f: "Détenteur de Majesté et de Générosité",
    m: "Celui qui est à la fois craint pour Sa grandeur et aimé pour Ses immenses grâces.",
    detailedMeaning: "Ce Nom illustre unit les deux pôles de la foi : la révérence sacrée inspirée par Sa grandeur (Jalal) et l'amour reconnaissant suscité par Ses bienfaits inépuisables (Ikram).",
    quran: {
      arabic: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
      translation: "Et seule subsistera la Face de ton Seigneur, Détenteur de la Majesté et de la Noblesse.",
      surah: "Sourate Ar-Rahman (55:27)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Persévérez avec insistance dans vos prières par la formule : 'Yâ Dhal-Jalâli wal-Ikrâm' ! »",
      source: "Jami' At-Tirmidhi (n°3525), authentique"
    }
  },
  {
    n: 86,
    a: "الْمُقْسِطُ",
    p: "Al-Muqsit",
    f: "L'Équitable",
    m: "Celui qui établit la justice parfaite et rend droit aux personnes opprimées.",
    detailedMeaning: "Al-Muqsit compense les victimes avec magnificence et ôte la rancœur des cœurs des fidèles au Paradis afin qu'ils y vivent en frères réconciliés dans la paix.",
    quran: {
      arabic: "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ",
      translation: "Allah atteste, et aussi les Anges et les doués de savoir, qu'il n'y a de divinité que Lui, maintenant la justice avec équité.",
      surah: "Sourate Ali 'Imran (3:18)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Les personnes équitables (Al-Muqsitûn) seront auprès d'Allah sur des estrades de lumière à la droite du Tout-Miséricordieux. »",
      source: "Sahih Muslim (n°1827)"
    }
  },
  {
    n: 87,
    a: "الْجَامِعُ",
    p: "Al-Jami'",
    f: "Le Rassembleur",
    m: "Celui qui réunira l'humanité entière au Jour du Jugement et unit les cœurs dispersés.",
    detailedMeaning: "Al-Jami' rassemble les contraires dans la nature, unit les cœurs dans la fraternité de la foi et rassemblera les générations humaines passées et futures pour l'Ultime Jugement.",
    quran: {
      arabic: "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَّا رَيْبَ فِيهِ ۚ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ",
      translation: "Seigneur ! C'est Toi qui rassembleras les gens en un Jour dont la venue ne fait aucun doute. Certes, Allah ne manque jamais à Sa promesse.",
      surah: "Sourate Ali 'Imran (3:9)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Vous serez rassemblés au Jour de la Résurrection pieds nus, nus et incirconcis... tout comme Nous avons commencé la première création. »",
      source: "Sahih Al-Bukhari (n°3349) et Sahih Muslim (n°2860)"
    }
  },
  {
    n: 88,
    a: "الْغَنِيُّ",
    p: "Al-Ghaniyy",
    f: "Le Suffisant à Soi-même / L'Infiniment Riche",
    m: "Le Riche absolu qui ne dépend de rien tandis que toute créature dépend de Lui.",
    detailedMeaning: "L'obéissance de tous les habitants des cieux et de la terre n'ajoute rien à Sa majesté, pas plus que leur désobéissance ne saurait Lui nuire. Sa richesse est auto-suffisante.",
    quran: {
      arabic: "وَرَبُّكَ الْغَنِيُّ ذُو الرَّحْمَةِ",
      translation: "Et ton Seigneur est le Suffisant à Soi-même, le Détenteur de la miséricorde.",
      surah: "Sourate Al-An'am (6:133)"
    },
    hadith: {
      text: "Allah le Très-Haut dit dans le Hadith Qudsi : « Ô Mes serviteurs ! Vous ne sauriez Me nuire en quoi que ce soit, ni M'être utiles en quoi que ce soit... »",
      source: "Sahih Muslim (n°2577)"
    }
  },
  {
    n: 89,
    a: "الْمُغْنِي",
    p: "Al-Mughni",
    f: "Celui qui enrichit et comble",
    m: "Celui qui octroie la plénitude du cœur et verse la subsistance matérielle et spirituelle.",
    detailedMeaning: "La richesse suprême accordée par Al-Mughni n'est pas l'accumulation des biens terrestres, mais le sentiment apaisé de contentement intérieur (Ghina an-Nafs).",
    quran: {
      arabic: "وَأَنَّهُ هُوَ أَغْنَىٰ وَأَقْنَىٰ",
      translation: "Et c'est Lui qui a enrichi et qui a fait acquérir.",
      surah: "Sourate An-Najm (53:48)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « La vraie richesse ne réside pas dans l'abondance des biens matériels, mais la vraie richesse est la richesse de l'âme. »",
      source: "Sahih Al-Bukhari (n°6446) et Sahih Muslim (n°1051)"
    }
  },
  {
    n: 90,
    a: "الْمَانِعُ",
    p: "Al-Mani'",
    f: "Le Défenseur / Celui qui préserve et retient",
    m: "Celui qui empêche le mal de nuire et refuse certains désirs par pure bienveillance.",
    detailedMeaning: "Lorsqu'Allah refuse un bien matériel à un serviteur croyant, ce refus est en réalité un don protecteur (Man'uhu 'Ata') afin d'éviter qu'il ne se perde dans l'égarement ou la vanité.",
    quran: {
      arabic: "مَّا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ فَلَا مُمْسِكَ لَهَا ۖ وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ مِن بَعْدِهِ",
      translation: "Ce qu'Allah accorde en miséricorde aux hommes, nul ne peut le retenir. Et ce qu'Il retient, nul ne peut le relâcher après Lui.",
      surah: "Sourate Fatir (35:2)"
    },
    hadith: {
      text: "Après chaque prière, le Prophète ﷺ proclamait : « Ô Allah ! Nul ne peut empêcher ce que Tu as donné, et nul ne peut donner ce que Tu as retenu (Lâ mâni'a limâ a'tayta wa lâ mu'tiya limâ mana'ta). »",
      source: "Sahih Al-Bukhari (n°844) et Sahih Muslim (n°593)"
    }
  },
  {
    n: 91,
    a: "الضَّارُّ",
    p: "Ad-Darr",
    f: "Le Maître des épreuves",
    m: "Celui qui décrète les difficultés pour purifier, éveiller et forger les âmes.",
    detailedMeaning: "Rien de pénible ne survient dans l'univers sans Sa permission souveraine. Ces épreuves sont destinées à guérir l'âme de l'orgueil et à l'orienter vers la patience et la quête de délivrance.",
    quran: {
      arabic: "وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ",
      translation: "Et si Allah fait qu'un mal te touche, nul ne peut l'écarter en dehors de Lui.",
      surah: "Sourate Yunus (10:107)"
    },
    hadith: {
      text: "Le Prophète ﷺ a enseigné : « Sache que si la communauté entière s'unissait pour te nuire en quelque chose, ils ne te nuiraient qu'en ce qu'Allah a déjà prescrit à ton encontre. »",
      source: "Jami' At-Tirmidhi (n°2516)"
    }
  },
  {
    n: 92,
    a: "النَّافِعُ",
    p: "An-Nafi'",
    f: "La Source de tout profit et bienfaisance",
    m: "Celui qui procure tout bénéfice véritable, toute guérison et toute félicité.",
    detailedMeaning: "Tout ce qui procure une joie pure, une santé recouvrée, une nourriture saine ou une inspiration lumineuse prend sa source auprès d'An-Nafi'.",
    quran: {
      arabic: "وَإِن يُرِدْكَ بِخَيْرٍ فَلَا رَادَّ لِفَضْلِهِ ۚ يُصِيبُ بِهِ مَن يَشَاءُ مِنْ عِبَادِهِ",
      translation: "Et s'Il veut pour toi un bien, nul ne peut repousser Sa grâce. Il en gratifie qui Il veut parmi Ses serviteurs.",
      surah: "Sourate Yunus (10:107)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Sache que si les hommes s'unissaient pour te faire bénéficier d'une chose, ils ne te feraient bénéficier que de ce qu'Allah a déjà écrit pour toi. »",
      source: "Jami' At-Tirmidhi (n°2516)"
    }
  },
  {
    n: 93,
    a: "النُّورُ",
    p: "An-Nur",
    f: "La Lumière Suprême",
    m: "La Lumière divine des cieux et de la terre qui éclaire et guide les égarés.",
    detailedMeaning: "An-Nur dissipe les ténèbres de l'ignorance par la révélation du Coran, illumine la raison humaine et éclaire le cœur des croyants par la clarté éclatante de la vérité.",
    quran: {
      arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",
      translation: "Allah est la Lumière des cieux et de la terre. L'exemple de Sa lumière est semblable à une niche où se trouve une lampe...",
      surah: "Sourate An-Nur (24:35)"
    },
    hadith: {
      text: "Le Prophète ﷺ invoquait : « Ô Allah ! Mets dans mon cœur une lumière, dans ma vue une lumière, dans mon ouïe une lumière, à ma droite une lumière, à ma gauche une lumière, et accorde-moi une immense lumière ! »",
      source: "Sahih Muslim (n°763)"
    }
  },
  {
    n: 94,
    a: "الْهَادِي",
    p: "Al-Hadi",
    f: "Le Guide Suprême",
    m: "Celui qui éclaire les cœurs et conduit sur la voie droite du salut éternel.",
    detailedMeaning: "Al-Hadi oriente les oiseaux migrateurs dans le ciel, instruit l'enfant nouveau-né à téter sa mère et inspire aux êtres de lumière le chemin de la sagesse et de l'adoration sincère.",
    quran: {
      arabic: "وَكَفَىٰ بِرَبِّكَ هَادِيًا وَنَصِيرًا",
      translation: "Et ton Seigneur suffit amplement comme Guide et comme Soutien.",
      surah: "Sourate Al-Furqan (25:31)"
    },
    hadith: {
      text: "Le Prophète ﷺ invoquait quotidiennement : « Ô Allah ! Je Te demande la guidance (Al-Hudâ), la piété, la retenue et la richesse de l'âme. »",
      source: "Sahih Muslim (n°2721)"
    }
  },
  {
    n: 95,
    a: "الْبَدِيعُ",
    p: "Al-Badi'",
    f: "L'Incomparable Créateur",
    m: "Celui qui donne naissance à une création admirable d'une originalité stupéfiante.",
    detailedMeaning: "Al-Badi' est Celui dont les œuvres ne souffrent aucune répétition banale. Chaque fleur, chaque galaxie et chaque flocon de neige est une œuvre d'art sans modèle préexistant.",
    quran: {
      arabic: "بَدِيعُ السَّمَاوَاتِ وَالْأَرْضِ ۖ وَإِذَا قَضَىٰ أَمْرًا فَإِنَّمَا يَقُولُ لَهُ كُن فَيَكُونُ",
      translation: "Créateur incomparable des cieux et de la terre ! Quand Il décide d'une chose, Il dit seulement : 'Sois !', et elle est aussitôt.",
      surah: "Sourate Al-Baqarah (2:117)"
    },
    hadith: {
      text: "Un compagnon invoqua : 'Ô Allah, je Te prie par le fait que Tu es le Créateur Incomparable des cieux et de la terre (Badî'as-samâwâti wal-ard)...' Le Prophète ﷺ dit : « Il a prié par le Nom Suprême avec lequel Allah exauce assurément. »",
      source: "Sunan Abi Dawud (n°1495) et Jami' At-Tirmidhi (n°3544)"
    }
  },
  {
    n: 96,
    a: "الْبَاقِي",
    p: "Al-Baqi",
    f: "L'Éternel Subsistant",
    m: "Celui qui ne périt jamais, demeurant à perpétuité par-delà la fin des temps.",
    detailedMeaning: "Toutes les beautés terrestres et les royaumes humains ne sont que des éclats passagers voués au déclin. Seul Al-Baqi subsiste avec splendeur dans une éternité inaltérable.",
    quran: {
      arabic: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
      translation: "Seule subsistera la Face de ton Seigneur, Plein de Majesté et de Noblesse.",
      surah: "Sourate Ar-Rahman (55:27)"
    },
    hadith: {
      text: "Le Prophète ﷺ disait : « Ce qui est auprès de vous s'épuise, mais ce qui est auprès d'Allah est permanent et éternel (Bâq). »",
      source: "En référence au verset de la Sourate An-Nahl (16:96)"
    }
  },
  {
    n: 97,
    a: "الْوَارِثُ",
    p: "Al-Warith",
    f: "L'Héritier Suprême",
    m: "Celui à qui reviendra la royauté et la possession intégrale après l'anéantissement du monde.",
    detailedMeaning: "Au terme de la création, tous les possesseurs terrestres lâcheront leurs richesses éphémères. C'est à Al-Warith que revient la royauté totale, car Il en est le Propriétaire originel et final.",
    quran: {
      arabic: "وَإِنَّا لَنَحْنُ نُحْيِي وَنُمِيتُ وَنَحْنُ الْوَارِثُونَ",
      translation: "Et c'est bien Nous qui donnons la vie et donnons la mort, et c'est Nous l'Héritier Suprême.",
      surah: "Sourate Al-Hijr (15:23)"
    },
    hadith: {
      text: "Le Prophète Zacharie (Zakariyya) invoquait : « Seigneur, ne me laisse pas seul, bien que Tu sois le Meilleur des héritiers (Wa Anta Khayrul-Wârithîn). »",
      source: "Sourate Al-Anbiya (21:89)"
    }
  },
  {
    n: 98,
    a: "الرَّشِيدُ",
    p: "Ar-Rashid",
    f: "Le Guide Parfait / Le Juste Concepteur",
    m: "Celui dont tous les décrets et ordonnances mènent infailliblement à la rectitude.",
    detailedMeaning: "Ar-Rashid agit toujours selon la sagesse suprême sans nulle erreur d'appréciation. Il dirige Ses serviteurs avec rectitude vers leur bien spirituel et terrestre.",
    quran: {
      arabic: "إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
      translation: "Quand les jeunes gens se réfugièrent dans la caverne, ils dirent : 'Ô notre Seigneur, donne-nous de Ta part une miséricorde et prépare-nous un chemin de rectitude !'",
      surah: "Sourate Al-Kahf (18:10)"
    },
    hadith: {
      text: "Le Prophète ﷺ enseignait dans le sermon du besoin (Khutbatul-Hâjah) : « Celui qu'Allah guide, nul ne peut l'égarer ; et celui qu'Il égare, nul ne peut le guider avec rectitude (Murshidâ). »",
      source: "Sahih Muslim (n°867)"
    }
  },
  {
    n: 99,
    a: "الصَّبُورُ",
    p: "As-Sabur",
    f: "Le Patient Suprême",
    m: "Celui qui ne précipite rien et agit avec une endurance et une patience infinies.",
    detailedMeaning: "As-Sabur endure les blasphèmes des hommes tout en continuant à leur accorder la vie, la santé et la nourriture. Sa patience permet aux pécheurs de s'éveiller et de se repentir avant l'heure fixée.",
    quran: {
      arabic: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ",
      translation: "Et endure patiemment ! Ton endurance n'est possible qu'avec l'aide d'Allah.",
      surah: "Sourate An-Nahl (16:127)"
    },
    hadith: {
      text: "Le Prophète ﷺ a dit : « Nul n'est plus patient face à une offense qu'il entend qu'Allah : ils Lui attribuent un fils et des associés, et pourtant Il les préserve et leur accorde leur subsistance ! »",
      source: "Sahih Al-Bukhari (n°7378) et Sahih Muslim (n°2804)"
    }
  }
];
class Na {
  onSelectName;
  constructor(e) {
    this.onSelectName = e;
  }
  init() {
    m("names-close-btn").addEventListener("click", () => {
      this.close();
    }), m("names-search-input").addEventListener("input", (a) => {
      const r = a.target.value;
      this.filter(r);
    });
  }
  open() {
    const e = m("names-search-input");
    e.value = "", this.renderList($e), xe("names-modal", "names-box");
  }
  close() {
    Ae("names-modal", "names-box");
  }
  filter(e) {
    const t = e.trim().toLowerCase();
    if (!t) {
      this.renderList($e);
      return;
    }
    const a = $e.filter(
      (r) => r.p.toLowerCase().includes(t) || r.f.toLowerCase().includes(t) || r.m.toLowerCase().includes(t) || r.detailedMeaning.toLowerCase().includes(t) || r.a.includes(t) || r.n.toString() === t
    );
    this.renderList(a);
  }
  renderList(e) {
    const t = m("names-list-container");
    if (t.innerHTML = "", e.length === 0) {
      t.innerHTML = `
        <div class="text-center py-8 text-textmuted text-xs">
          <i class="ph ph-magnifying-glass text-3xl mb-2 block text-textmuted/60"></i>
          Aucun Nom d'Allah ne correspond à votre recherche.
        </div>
      `;
      return;
    }
    for (const a of e) {
      const r = document.createElement("div");
      r.className = "name-card p-3.5 rounded-2xl bg-surface/50 border border-bordercolor/70 hover:border-amber-500/50 hover:bg-surface/80 flex items-center justify-between gap-3 tap-effect transition-all cursor-pointer group shadow-sm", r.setAttribute("data-name-num", a.n.toString()), r.innerHTML = `
        <!-- Partie Gauche : Numéro, Translittération & Signification -->
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center font-bold text-xs border border-amber-500/20 shrink-0 transition-colors">
            ${a.n}
          </div>
          <div class="min-w-0">
            <div class="flex items-baseline gap-1.5 flex-wrap">
              <span class="font-bold text-sm text-textmain group-hover:text-amber-400 transition-colors">${ee(a.p)}</span>
              <span class="text-xs text-textmuted font-medium">· ${ee(a.f)}</span>
            </div>
            <p class="text-[11px] text-textmuted mt-0.5 leading-relaxed line-clamp-2">${ee(a.m)}</p>
          </div>
        </div>

        <!-- Partie Droite : Calligraphie Arabe & Lien Détails -->
        <div class="text-right shrink-0 pl-2">
          <span class="font-arabic text-2xl sm:text-3xl text-amber-400 font-bold leading-none select-none block drop-shadow-sm" dir="rtl">${ee(a.a)}</span>
          <span class="text-[10px] text-amber-400 font-semibold group-hover:text-amber-300 transition-colors flex items-center justify-end gap-0.5 mt-1">
            <span>Détails & Coran</span>
            <i class="ph ph-caret-right text-[10px]"></i>
          </span>
        </div>
      `, r.addEventListener("click", () => {
        this.close(), this.onSelectName(a);
      }), t.appendChild(r);
    }
  }
}
class Da {
  store;
  onStartTasbih;
  onBackToCatalog;
  currentName = null;
  constructor(e, t, a) {
    this.store = e, this.onStartTasbih = t, this.onBackToCatalog = a;
  }
  init() {
    m("name-detail-close-btn").addEventListener("click", () => {
      this.close();
    }), m("name-detail-back-btn").addEventListener("click", () => {
      this.close(), this.onBackToCatalog();
    }), m("name-detail-tasbih-btn").addEventListener("click", () => {
      this.currentName && this.meditateName(this.currentName);
    });
  }
  open(e) {
    this.currentName = e, this.render(e), xe("name-detail-modal", "name-detail-box");
  }
  close() {
    Ae("name-detail-modal", "name-detail-box");
  }
  render(e) {
    m("name-detail-badge").textContent = `Nom n° ${e.n} sur 99`, m("name-detail-arabic").textContent = e.a, m("name-detail-phonetic").textContent = e.p, m("name-detail-french").textContent = e.f, m("name-detail-meaning").textContent = e.detailedMeaning || e.m, m("name-detail-quran-surah").textContent = e.quran.surah, m("name-detail-quran-arabic").textContent = e.quran.arabic, m("name-detail-quran-translation").textContent = `« ${e.quran.translation} »`, m("name-detail-hadith-text").textContent = e.hadith.text, m("name-detail-hadith-source").textContent = e.hadith.source;
  }
  meditateName(e) {
    this.close();
    const t = `name_${e.n}`;
    let a = this.store.adhkars.find((r) => r.id === t);
    if (!a) {
      const r = e.a.replace(/^ال/, "");
      a = {
        id: t,
        category: "daily",
        arabic: `يَا ${r}`,
        french: `Nom d'Allah : ${e.p}`,
        phonetic: `Yā ${e.p}`,
        translation: `${e.f} - ${e.m}`,
        merit: `« C'est à Allah qu'appartiennent les plus beaux Noms. Invoquez-Le par ces Noms. » (${e.quran.surah})`,
        target: 33,
        targetLabel: "Boucle de 33"
      }, this.store.addOrUpdateCustomDhikr(a);
    }
    this.onStartTasbih(a.id);
  }
}
const Ra = Ke({
  french: F().trim().min(2, "Le nom de l'invocation doit comporter au moins 2 caractères.").max(120, "Le nom de l'invocation ne doit pas dépasser 120 caractères."),
  arabic: F().trim().max(1e3, "Le texte arabe ne doit pas dépasser 1000 caractères.").optional().or(Be("")),
  phonetic: F().trim().max(1e3, "La phonétique ne doit pas dépasser 1000 caractères.").optional().or(Be("")),
  translation: F().trim().max(1e3, "La traduction ne doit pas dépasser 1000 caractères.").optional().or(Be("")),
  target: me({ invalid_type_error: "L'objectif de répétition doit être un nombre." }).int("L'objectif doit être un entier.").min(1, "L'objectif doit être d'au moins 1 répétition.").max(1e4, "L'objectif ne peut pas dépasser 10 000 répétitions."),
  category: Ye(["daily", "morning_evening", "prayer", "sleep", "custom"], {
    errorMap: () => ({ message: "Catégorie sélectionnée invalide." })
  })
});
class Oa {
  store;
  editingId = null;
  constructor(e) {
    this.store = e;
  }
  init() {
    m("btn-open-add-modal").addEventListener("click", () => {
      this.open();
    }), m("add-close-btn").addEventListener("click", () => {
      this.close();
    }), m("add-save-btn").addEventListener("click", () => {
      this.save();
    });
  }
  open(e) {
    this.editingId = e || null;
    const t = m("add-modal-title"), a = m("add-title"), r = m("add-arabic"), s = m("add-phonetic"), l = m("add-translation"), o = m("add-target"), d = m("add-category");
    if (e) {
      const c = this.store.adhkars.find((v) => v.id === e);
      c && (t.textContent = "Modifier l'invocation", a.value = c.french, r.value = c.arabic || "", s.value = c.phonetic || "", l.value = c.translation || "", o.value = c.target.toString(), d.value = c.category);
    } else
      t.textContent = "Nouvelle Invocation", a.value = "", r.value = "", s.value = "", l.value = "", o.value = "100", d.value = "daily";
    xe("add-modal", "add-box");
  }
  close() {
    Ae("add-modal", "add-box"), this.editingId = null;
  }
  save() {
    const e = m("add-title"), t = m("add-arabic"), a = m("add-phonetic"), r = m("add-translation"), s = m("add-target"), l = m("add-category"), o = {
      french: e.value,
      arabic: t.value,
      phonetic: a.value,
      translation: r.value,
      target: parseInt(s.value, 10),
      category: l.value
    }, d = Ra.safeParse(o);
    if (!d.success) {
      const E = d.error.errors[0]?.message || "Données invalides.";
      alert(`Erreur de validation : ${E}`);
      return;
    }
    const c = d.data, M = {
      id: this.editingId || `custom_${Date.now()}`,
      french: c.french,
      arabic: c.arabic || void 0,
      phonetic: c.phonetic || void 0,
      translation: c.translation || void 0,
      target: c.target,
      targetLabel: `Boucle de ${c.target}`,
      category: c.category
    };
    this.store.addOrUpdateCustomDhikr(M), this.close(), W.show(this.editingId ? "Invocation mise à jour !" : "Nouvelle invocation ajoutée !");
  }
}
class Ba {
  store;
  constructor(e) {
    this.store = e;
  }
  init() {
    m("btn-open-stats").addEventListener("click", () => {
      this.open();
    }), m("stats-close-btn").addEventListener("click", () => {
      this.close();
    });
  }
  open() {
    this.renderStats(), xe("stats-modal", "stats-box");
  }
  close() {
    Ae("stats-modal", "stats-box");
  }
  renderStats() {
    const e = m("stats-streak"), t = m("stats-lifetime"), a = m("stats-chart");
    e.textContent = this.store.streak.toString(), t.textContent = this.store.getLifetimeTotal().toLocaleString("fr-FR"), a.innerHTML = "";
    const r = [];
    for (let d = 6; d >= 0; d--) {
      const c = /* @__PURE__ */ new Date();
      c.setDate(c.getDate() - d), r.push(c.toISOString().slice(0, 10));
    }
    const s = r.map((d) => d === (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) ? this.store.getTodayTotal() : this.store.historyDays[d] || 0), l = Math.max(...s, 10), o = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    r.forEach((d, c) => {
      const v = s[c] || 0, M = Math.min(100, Math.max(8, v / l * 100)), E = new Date(d), $ = o[E.getDay()] || "", Q = c === 6, V = document.createElement("div");
      V.className = "flex-1 flex flex-col items-center gap-1.5 h-full justify-end", V.innerHTML = `
        <span class="text-[9px] font-bold text-textmuted tabular-nums">${v > 0 ? v > 999 ? (v / 1e3).toFixed(1) + "k" : v : ""}</span>
        <div class="w-full max-w-[28px] rounded-t-lg transition-all duration-500 ${Q ? "bg-primary-500 shadow-neon" : "bg-surface border border-bordercolor"}" style="height: ${M}%;"></div>
        <span class="text-[10px] font-bold ${Q ? "text-primary-400" : "text-textmuted"} uppercase">${$}</span>
      `, a.appendChild(V);
    });
  }
}
class $a {
  store;
  constructor(e) {
    this.store = e;
  }
  init() {
    m("btn-open-settings").addEventListener("click", () => {
      this.open();
    }), m("settings-close-btn").addEventListener("click", () => {
      this.close();
    }), document.querySelectorAll(".theme-card").forEach((E) => {
      E.addEventListener("click", () => {
        const $ = E.getAttribute("data-theme");
        $ && (this.store.setTheme($), this.applyThemeDOM($), this.updateThemeCards($), W.show(`Thème ${$} appliqué`));
      });
    });
    const r = m("sound-toggle");
    r.checked = this.store.soundEnabled, r.addEventListener("change", () => {
      this.store.toggleSound();
    });
    const s = m("haptic-toggle");
    s.checked = this.store.hapticEnabled, s.addEventListener("change", () => {
      this.store.setHaptic(s.checked);
    });
    const l = m("auto-delay-select");
    l.value = this.store.autoDelayMs.toString(), l.addEventListener("change", () => {
      const E = parseInt(l.value, 10) || 2e3;
      this.store.setAutoDelay(E), W.show(`Délai réglé à ${E / 1e3}s`);
    }), m("btn-reset-all-daily").addEventListener("click", () => {
      confirm("Voulez-vous réinitialiser tous les compteurs du jour à zéro ?") && (this.store.resetAllDaily(), this.close(), W.show("Tous les compteurs du jour ont été remis à zéro"));
    }), m("btn-export-backup").addEventListener("click", () => {
      this.exportBackup();
    }), m("import-file-input").addEventListener("change", (E) => {
      const $ = E.target.files?.[0];
      $ && this.importBackup($);
    });
    const v = m("pwa-install-container"), M = m("btn-pwa-install");
    Ue.onInstallableChange((E) => {
      E ? v.classList.remove("hidden") : v.classList.add("hidden");
    }), M.addEventListener("click", () => {
      Ue.promptInstall();
    }), this.applyThemeDOM(this.store.theme), this.updateThemeCards(this.store.theme);
  }
  open() {
    xe("settings-modal", "settings-box");
  }
  close() {
    Ae("settings-modal", "settings-box");
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
    const e = this.store.exportBackup(), t = JSON.stringify(e, null, 2), a = new Blob([t], { type: "application/json" }), r = URL.createObjectURL(a), s = document.createElement("a");
    s.href = r, s.download = `dhikr-pro-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, s.click(), URL.revokeObjectURL(r), W.show("Sauvegarde exportée avec succès ! 💾");
  }
  importBackup(e) {
    const t = new FileReader();
    t.onload = (a) => {
      try {
        const r = a.target?.result, s = P.validateAndParseBackup(r);
        confirm("Importer cette sauvegarde ? Vos données actuelles seront mises à jour.") && (this.store.importBackup(s), this.applyThemeDOM(this.store.theme), this.updateThemeCards(this.store.theme), this.close(), W.show("Données restaurées avec succès ! 🎉"));
      } catch (r) {
        const s = r instanceof Error ? r.message : "Fichier invalide.";
        alert(`Erreur d'importation : ${s}`);
      }
    }, t.readAsText(e);
  }
}
function kt() {
  try {
    const i = pe.getInstance();
    Ue.init();
    const e = new ja(i);
    e.init();
    const t = new Da(
      i,
      (E) => e.open(E),
      () => a.open()
    );
    t.init();
    const a = new Na((E) => {
      t.open(E);
    });
    a.init();
    const r = new Oa(i);
    r.init(), new Ba(i).init(), new $a(i).init(), new Ca(i).init(), new wa(() => {
      a.open();
    }).init();
    const c = new Ta(i);
    c.init();
    const v = new Ia(i), M = new Pa(i, {
      onOpenFocus: (E) => e.open(E),
      onEditCustom: (E) => r.open(E)
    });
    v.render(), c.render(), M.render(), i.subscribe(() => {
      v.render(), c.render(), M.render();
    }), console.log("[Dhikr Pro] Application modulaire v2 initialisée avec succès.");
  } catch (i) {
    console.error("[Dhikr Pro] Erreur fatale lors de l’initialisation:", i);
  }
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", kt) : kt();
