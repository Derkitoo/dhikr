import type { DhikrItem } from '../types/dhikr.types';

export const DEFAULT_ADHKARS: ReadonlyArray<DhikrItem> = [
            // --- Quotidien & Fondamentaux ---
            {
                id: 'salawat',
                category: 'daily',
                arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
                french: "Prière sur le Prophète",
                phonetic: "Allahumma salli wa sallim wa barik 'ala nabiyyina Muhammad",
                translation: "Ô Allah, répands Tes éloges, Ton salut et Tes bénédictions sur notre Prophète Muhammad.",
                merit: "« Celui qui prie sur moi une fois, Allah priera sur lui dix fois. » (Muslim)",
                target: 10,
                targetLabel: "Boucle de 10"
            },
            {
                id: 'istighfar',
                category: 'daily',
                arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
                french: "Demande de pardon (Istighfar)",
                phonetic: "Astaghfiru-llaha wa atubu ilayh",
                translation: "Je demande pardon à Allah et je me repens auprès de Lui.",
                merit: "« Par Allah ! Je demande pardon à Allah et me repens plus de 70 fois par jour. » (Bukhari)",
                target: 100,
                targetLabel: "Boucle de 100"
            },
            {
                id: 'subhanallahi_wa_bihamdih_100',
                category: 'daily',
                arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
                french: "Gloire et Louange à Allah (100x)",
                phonetic: "Subhanallahi wa bi-hamdih",
                translation: "Gloire et louange à Allah.",
                merit: "« Celui qui la répète 100 fois par jour, ses péchés sont effacés même s'ils étaient semblables à l'écume de la mer. » (Bukhari & Muslim)",
                target: 100,
                targetLabel: "Boucle de 100"
            },
            {
                id: 'tahlil',
                category: 'daily',
                arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                french: "L'Unicité Suprême (Tahlil)",
                phonetic: "La ilaha illa-llahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa 'ala kulli shay'in qadir",
                translation: "Il n'y a de divinité digne d'adoration qu'Allah, Seul, sans associé. À Lui la royauté et la louange, et Il est Omnipotent.",
                merit: "Équivaut à affranchir 10 esclaves, accorde 100 bienfaits et protège contre le diable. (Bukhari)",
                target: 100,
                targetLabel: "Boucle de 100"
            },
            {
                id: 'hawqala',
                category: 'daily',
                arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
                french: "La Hawqala (Secours en Allah)",
                phonetic: "La hawla wa la quwwata illa billahil-'Aliyyil-'Azim",
                translation: "Il n'y a de force ni de puissance que par Allah, le Très-Haut, le Tout-Puissant.",
                merit: "« L'un des trésors du Paradis. » (Bukhari & Muslim)",
                target: 100,
                targetLabel: "Boucle de 100"
            },
            {
                id: 'yunus',
                category: 'daily',
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
                id: 'sayyid_istighfar',
                category: 'morning_evening',
                arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
                french: "Le Maître du Repentir (Sayyidul Istighfar)",
                phonetic: "Allahumma Anta Rabbi la ilaha illa Ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika ma-stata't...",
                translation: "Ô Allah, Tu es mon Seigneur, nul dieu digne d'adoration sauf Toi. Tu m'as créé et je suis Ton serviteur...",
                merit: "Celui qui la récite le matin ou le soir avec conviction et meurt fera partie des gens du Paradis. (Bukhari)",
                target: 1,
                targetLabel: "1x Matin et Soir"
            },
            {
                id: 'protection_matin_soir',
                category: 'morning_evening',
                arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
                french: "Protection Suprême (3x)",
                phonetic: "Bismillahi-lladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim",
                translation: "Au nom d'Allah dont le Nom empêche toute chose de nuire sur terre et dans le ciel, et Il est l'Audient, l'Omniscient.",
                merit: "Répétée 3 fois matin et soir : rien ne pourra nuire à celui qui la prononce. (Abu Dawud & Tirmidhi)",
                target: 3,
                targetLabel: "3x Matin et Soir"
            },
            {
                id: 'raditu_billah',
                category: 'morning_evening',
                arabic: "رَضِيتُ بِاللَّهِ رَبّاً، وَبِالْإِسْلَامِ دِيناً، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيّاً",
                french: "L'agrément d'Allah (3x)",
                phonetic: "Raditu billahi Rabban, wa bil-Islami dinan, wa bi-Muhammadin sallallahu 'alayhi wa sallama Nabiyya",
                translation: "J'agrée Allah comme Seigneur, l'Islam comme religion et Muhammad ﷺ comme Prophète.",
                merit: "« Celui qui la répète 3 fois matin et soir, Allah Se fait un devoir de le satisfaire le Jour de la Résurrection. » (Abu Dawud n° 5072)",
                target: 3,
                targetLabel: "3x Matin et Soir"
            },
            {
                id: 'audhu_bikalimatillah',
                category: 'morning_evening',
                arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
                french: "Refuge auprès des Paroles d'Allah (3x)",
                phonetic: "A'udhu bi-kalimatillahi t-tammati min sharri ma khalaq",
                translation: "Je cherche refuge auprès des Paroles parfaites d'Allah contre le mal de ce qu'Il a créé.",
                merit: "« Celui qui la dit le soir 3 fois, rien ne lui nuira au cours de la nuit. » (Muslim n° 2709)",
                target: 3,
                targetLabel: "3x le Soir"
            },
            {
                id: 'ya_hayyu_ya_qayyum',
                category: 'morning_evening',
                arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
                french: "L'appel au Secours Divin",
                phonetic: "Ya Hayyu ya Qayyumu bi-rahmatika astaghith, aslih li sha'ni kullah, wa la takilni ila nafsi tarfata 'ayn",
                translation: "Ô Vivant, Ô Toi qui subsistes par Toi-même, par Ta miséricorde j'implore secours. Réforme toutes mes affaires et ne m'abandonne pas à moi-même le temps d'un clin d'œil.",
                merit: "Enseignée par le Prophète ﷺ à sa fille Fatima pour le matin et le soir. (An-Nasa'i & Al-Hakim, Sahih)",
                target: 1,
                targetLabel: "1x Matin et Soir"
            },
            {
                id: 'hasbiyallahu',
                category: 'morning_evening',
                arabic: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
                french: "La Suffisance en Allah (7x)",
                phonetic: "Hasbiyallahu la ilaha illa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azim",
                translation: "Allah me suffit ! Nul dieu digne d'adoration sauf Lui. En Lui je place ma confiance et Il est le Seigneur du Trône Immense.",
                merit: "« Celui qui la dit 7 fois matin et soir, Allah lui suffira face à tout ce qui le préoccupe ici-bas et dans l'au-delà. » (Abu Dawud n° 5081)",
                target: 7,
                targetLabel: "7x Matin et Soir"
            },
            {
                id: 'subhanallahi_adada_khalqihi',
                category: 'morning_evening',
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
                id: 'astaghfirullah_post_salat',
                category: 'prayer',
                arabic: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
                french: "As-Salam après la Prière",
                phonetic: "Astaghfirullah (3x), Allahumma Antas-Salamu wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram",
                translation: "Je demande pardon à Allah (3x). Ô Allah, Tu es la Paix et de Toi provient la paix. Béni sois-Tu, Ô Détenteur de Majesté et de Générosité.",
                merit: "L'invocation exacte récitée par le Prophète ﷺ dès la fin de chaque salât obligatoire. (Muslim n° 591)",
                target: 1,
                targetLabel: "Dès la fin de la Salât"
            },
            {
                id: 'tasbih_salat',
                category: 'prayer',
                arabic: "سُبْحَانَ اللَّهِ • الحَمْدُ لِلَّهِ • اللَّهُ أَكْبَرُ",
                french: "Tasbih post-prière (33x)",
                phonetic: "Subhanallah (33x) - Alhamdulillah (33x) - Allahu Akbar (33x)",
                translation: "Gloire et pureté à Allah • Louange à Allah • Allah est le Plus Grand.",
                merit: "Pardonne les péchés même s'ils égalaient l'écume de la mer. (Muslim n° 597)",
                target: 33,
                targetLabel: "33 après la prière"
            },
            {
                id: 'dua_muadh_post_salat',
                category: 'prayer',
                arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ",
                french: "Invocation enseignée à Mu'adh",
                phonetic: "Allahumma a'inni 'ala dhikrika, wa shukrika, wa husni 'ibadatik",
                translation: "Ô Allah, aide-moi à Te mentionner, à Te remercier et à T'adorer de la meilleure manière.",
                merit: "Le Prophète ﷺ dit : « Ô Mu'adh, par Allah je t'aime ! Ne manque pas de dire après chaque prière... » (Abu Dawud n° 1522)",
                target: 1,
                targetLabel: "1x après chaque prière"
            },
            {
                id: 'ayat_kursi',
                category: 'prayer',
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
                id: 'khuruj_manzil',
                category: 'daily',
                arabic: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
                french: "Sortie de la maison (Al-Khuruj)",
                phonetic: "Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah",
                translation: "Au nom d'Allah, je place ma confiance en Allah, et il n'y a de force ni de puissance que par Allah.",
                merit: "« Il lui est dit : Tu es guidé, pourvu et protégé, et le diable s'écarte de lui. » (Abu Dawud n° 5095 & Tirmidhi)",
                target: 1,
                targetLabel: "1x à la sortie"
            },
            {
                id: 'dua_karb',
                category: 'daily',
                arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ",
                french: "Face à l'angoisse et la détresse (Du'a al-Karb)",
                phonetic: "La ilaha illallahul-'Azimul-Halim, la ilaha illallahu Rabbul-'Arshil-'Azim, la ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-'Arshil-Karim",
                translation: "Nul dieu digne d'adoration qu'Allah, l'Immense, le Magnanime. Nul dieu digne d'adoration qu'Allah, Seigneur du Trône Immense. Nul dieu digne d'adoration qu'Allah, Seigneur des cieux, de la terre et du Noble Trône.",
                merit: "L'invocation prophétique en cas de souci intense ou de détresse. (Bukhari n° 6345 & Muslim n° 2730)",
                target: 1,
                targetLabel: "En cas d'épreuve"
            },
            {
                id: 'kaffarat_majlis',
                category: 'daily',
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
                id: 'nawm_janbi',
                category: 'sleep',
                arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
                french: "Avant de dormir (An-Nawm)",
                phonetic: "Bismika Rabbi wada'tu janbi wa bika arfa'uh, fa-in amsakta nafsi farhamha, wa in arsaltaha fahfaz-ha bima tahfazu bihi 'ibadakas-salihin",
                translation: "En Ton Nom mon Seigneur j'ai posé mon flanc et par Toi je le relève. Si Tu retiens mon âme, fais-lui miséricorde, et si Tu la renvoies, protège-la comme Tu protèges Tes serviteurs vertueux.",
                merit: "Invocation au coucher recommandée par le Messager d'Allah ﷺ. (Bukhari n° 6320 & Muslim n° 2714)",
                target: 1,
                targetLabel: "1x au coucher"
            },
            {
                id: 'istiqadh_ahyana',
                category: 'sleep',
                arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
                french: "Invocation au réveil (Al-Istiqadh)",
                phonetic: "Al-hamdu lillahilladhi ahyana ba'da ma amatana wa ilayhin-nushur",
                translation: "Louange à Allah qui nous a rendu la vie après nous avoir fait mourir, et c'est vers Lui que se fera la Résurrection.",
                merit: "Récitée par le Prophète ﷺ dès son réveil. (Bukhari n° 6312 & Muslim n° 2711)",
                target: 1,
                targetLabel: "1x au réveil"
            }
        ];
