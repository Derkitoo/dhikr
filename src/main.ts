import { AppStore } from './state/store';
import { PwaService } from './services/pwa.service';
import { Header } from './components/Header';
import { NamesBanner } from './components/NamesBanner';
import { CategoryNav } from './components/CategoryNav';
import { DailySummaryBanner } from './components/DailySummaryBanner';
import { DhikrGrid } from './components/DhikrGrid';
import { FocusModal } from './components/FocusModal';
import { NamesModal } from './components/NamesModal';
import { AddDhikrModal } from './components/AddDhikrModal';
import { StatsModal } from './components/StatsModal';
import { SettingsModal } from './components/SettingsModal';

function startApp(): void {
  try {
    // 1. Initialiser le store centralisé
    const store = AppStore.getInstance();

    // 2. Initialiser le Service Worker PWA
    PwaService.init();

    // 3. Initialiser les modaux indépendants
    const focusModal = new FocusModal(store);
    focusModal.init();

    const namesModal = new NamesModal(store, (dhikrId) => {
      focusModal.open(dhikrId);
    });
    namesModal.init();

    const addDhikrModal = new AddDhikrModal(store);
    addDhikrModal.init();

    const statsModal = new StatsModal(store);
    statsModal.init();

    const settingsModal = new SettingsModal(store);
    settingsModal.init();

    // 4. Initialiser les composants visuels
    const header = new Header(store);
    header.init();

    const namesBanner = new NamesBanner(() => {
      namesModal.open();
    });
    namesBanner.init();

    const categoryNav = new CategoryNav(store);
    categoryNav.init();

    const dailySummary = new DailySummaryBanner(store);

    const dhikrGrid = new DhikrGrid(store, {
      onOpenFocus: (id) => focusModal.open(id),
      onEditCustom: (id) => addDhikrModal.open(id)
    });

    // Premier rendu immédiat
    dailySummary.render();
    categoryNav.render();
    dhikrGrid.render();

    // 5. Abonnement réactif aux changements du store
    store.subscribe(() => {
      dailySummary.render();
      categoryNav.render();
      dhikrGrid.render();
    });

    console.log('[Dhikr Pro] Application modulaire v2 initialisée avec succès.');
  } catch (error) {
    console.error('[Dhikr Pro] Erreur fatale lors de l’initialisation:', error);
  }
}

// Démarrage sécurisé quel que soit le timing de chargement du script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
