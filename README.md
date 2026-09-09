# Dhikr Pro v2 - Adhkars & Tasbih 📿

Une version repensée, enrichie et moderne de l'application **Dhikr Pro**. Conçue comme une Progressive Web App (PWA) fluide, esthétique et 100% fonctionnelle hors-ligne, sans aucun framework ni dépendance lourde.

---

## 🌟 Nouveautés et Améliorations majeures (v2)

### 1. 📖 Richesse Spirituelle & Invocations Authentiques
- **Textes complets & soignés :** Chaque invocation intègre le texte arabe vocalisé avec une typographie coranique nette (*Amiri*), la **translittération phonétique**, la **traduction française intégrale** et la **source / mérite** (Hadiths authentiques de Bukhari, Muslim, Tirmidhi, etc.).
- **Catégorisation intuitive :**
  - 🌅 *Matin & Soir* (Adhkar As-Sabah wal-Masaa, Sayyidul Istighfar, protection).
  - 🕌 *Post-Prière* (Tasbih 33x Subhanallah, Alhamdulillah, Allahu Akbar).
  - 🌙 *Sommeil* (Ayat Al-Kursi).
  - ☀️ *Quotidien* (Salawat, Istighfar, Hawqala, Dua Yunus, Tahlil).
  - ⭐ *Favoris* (Système d'étoile pour épingler ses invocations préférées).
  - ✨ *Mes Dhikrs* (Vos créations personnalisées).
- **Recherche temps réel :** Trouvez instantanément un dhikr par mot-clé (français, arabe ou phonétique).

### 2. 📿 Expérience Tasbih & Ergonomie
- **Compteur de tours & cycles :** Affiche clairement les tours effectués (ex : *Tour 2*, *33/33*) et le total journalier.
- **Moteur Audio Web Audio API sans latence (4 options) :**
  - *Perle en Bois* (son réaliste de chapelet traditionnel).
  - *Goutte d'Eau* (son apaisant et méditatif).
  - *Clic Moderne* (retour tactile discret).
  - *Silencieux*.
- **Vibration haptique intelligente :** Légère impulsion à chaque clic et double vibration festive à la complétion du cycle d'objectif.
- **Mode Focus Plein Écran :**
  - Tapotez n'importe où sur l'écran.
  - Zoom typographique (+/-) pour adapter la taille du texte arabe.
  - Bouton pour afficher ou masquer la phonétique et la traduction.
- **Accessibilité clavier complète (Desktop) :**
  - `Espace` / `Flèche Haut` / `Entrée` : Compter.
  - `Échap` : Quitter le mode focus ou fermer les fenêtres modales.
  - `M` : Activer / couper le son.
  - `+` / `-` : Agrandir / réduire la calligraphie arabe.

### 3. 🎨 4 Thèmes Visuels Raffinés
- 🌿 **Midnight Emerald** (Vert Émeraude profond et moderne - Thème par défaut).
- 🕋 **Kaaba Gold** (Noir pur et Doré ambré luxueux).
- 🕊️ **Medina Light** (Blanc pur, vert doux et reposant pour les yeux en plein jour).
- 🌌 **Celestial Blue** (Bleu nuit profond et cyan stellaire).

### 4. 📊 Gamification Saine & Statistiques
- **Série quotidienne (Streak) équitable :** La série s'incrémente uniquement lorsque vous accomplissez des dhikrs dans la journée.
- **Graphique d'activité sur 7 jours :** Visualisez votre régularité au fil de la semaine.
- **Grand Total Historique :** Conserve précieusement chaque invocation accomplie.

### 5. 💾 Sauvegarde & Restauration (Export / Import JSON)
- **Sauvegarde 1-clic :** Téléchargez un fichier `.json` contenant tous vos compteurs, vos favoris et vos dhikrs personnalisés.
- **Restauration :** Réimportez votre fichier sur un nouveau téléphone ou navigateur sans rien perdre.

### 6. 📱 Véritable PWA Hors-Ligne (Offline Ready)
- `manifest.json` officiel avec icônes adaptatives et raccourcis rapides.
- `sw.js` (Service Worker) avec stratégie de cache intelligente pour continuer à faire son dhikr dans le train, l'avion ou sans connexion Internet.

---

## 🚀 Comment tester ou déployer

### Test local rapide
Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur moderne (Chrome, Safari, Firefox, Edge).

Pour tester le Service Worker PWA en local avec un serveur HTTP :
```powershell
# Exemple avec Python
python -m http.server 8080
# Puis ouvrir http://localhost:8080
```

### Déploiement sur GitHub Pages
1. Poussez le contenu du dossier `dhikr-v2/` sur votre dépôt GitHub (`main` ou branche `gh-pages`).
2. Dans les paramètres du dépôt GitHub (**Settings** > **Pages**), sélectionnez la branche racine.
3. Votre PWA Dhikr Pro v2 sera disponible en HTTPS avec installation PWA immédiate sur iPhone et Android !
