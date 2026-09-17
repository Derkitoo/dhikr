import type { DhikrItem } from '../types/dhikr.types';
import { AppStore } from '../state/store';
import { escapeHtml } from '../utils/dom.utils';
import { Toast } from './Toast';

export interface DhikrCardCallbacks {
  onOpenFocus: (id: string) => void;
  onEditCustom: (id: string) => void;
}

export class DhikrCard {
  public static render(
    dhikr: DhikrItem,
    store: AppStore,
    callbacks: DhikrCardCallbacks
  ): HTMLElement {
    const count = store.dailyCounts[dhikr.id] || 0;
    const target = dhikr.target || 100;
    const completedRounds = Math.floor(count / target);
    const currentRoundCount = count % target;
    const progressPercent =
      count > 0 && currentRoundCount === 0 ? 100 : (currentRoundCount / target) * 100;
    const isFav = store.favorites.includes(dhikr.id);
    const isCustom = dhikr.id.startsWith('custom_');

    const card = document.createElement('div');
    card.className =
      'glass-card rounded-[28px] overflow-hidden flex flex-col relative group transition-all duration-300 hover:border-primary-500/30';
    card.setAttribute('data-dhikr-id', dhikr.id);

    card.innerHTML = `
      <!-- En-tête de carte -->
      <div class="p-5 pb-2 flex justify-between items-start z-10 gap-3">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="px-2 py-0.5 rounded-full bg-surface text-[10px] font-bold text-primary-400 border border-bordercolor">
              ${escapeHtml(dhikr.targetLabel || `Objectif : ${target}`)}
            </span>
            ${
              completedRounds > 0
                ? `<span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-400 border border-amber-500/30 flex items-center gap-1 animate-pulse">
                     <i class="ph-fill ph-check-circle"></i> ${completedRounds} accompli${completedRounds > 1 ? 's' : ''}
                   </span>`
                : ''
            }
          </div>
          <h3 class="text-base font-extrabold text-textmain leading-tight">${escapeHtml(dhikr.french)}</h3>
        </div>

        <div class="flex items-center gap-1.5 shrink-0">
          ${
            isCustom
              ? `<button class="btn-edit-custom w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-amber-400 tap-effect" title="Modifier">
                   <i class="ph ph-pencil-simple text-sm"></i>
                 </button>
                 <button class="btn-delete-custom w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-rose-400 tap-effect" title="Supprimer">
                   <i class="ph ph-trash text-sm"></i>
                 </button>`
              : ''
          }
          <button class="btn-fav w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-amber-400 tap-effect transition-colors" title="Favori">
            <i class="${isFav ? 'ph-fill ph-star text-amber-400' : 'ph ph-star'} text-sm"></i>
          </button>
          <button class="btn-reset-dhikr w-8 h-8 flex items-center justify-center rounded-xl bg-surface/60 text-textmuted hover:text-rose-400 tap-effect transition-colors" title="Réinitialiser">
            <i class="ph ph-arrow-counter-clockwise text-sm"></i>
          </button>
        </div>
      </div>

      <!-- Corps : Calligraphie Arabe -->
      ${
        dhikr.arabic
          ? `<div class="px-5 py-3 text-center">
               <p class="font-arabic text-2xl sm:text-3xl text-primary-400 leading-loose select-none" dir="rtl">${escapeHtml(dhikr.arabic)}</p>
             </div>`
          : '<div class="py-2"></div>'
      }

      <!-- Translittération phonétique & sens -->
      ${
        dhikr.phonetic || dhikr.translation
          ? `<div class="px-5 pb-3 flex flex-col gap-1 text-center">
               ${dhikr.phonetic ? `<p class="text-[11px] text-textmain italic leading-relaxed opacity-90">${escapeHtml(dhikr.phonetic)}</p>` : ''}
               ${dhikr.translation ? `<p class="text-[11px] text-textmuted leading-relaxed">${escapeHtml(dhikr.translation)}</p>` : ''}
             </div>`
          : ''
      }

      <!-- Mérite / Source -->
      ${
        dhikr.merit
          ? `<div class="mx-5 mb-3 p-2 rounded-xl bg-surface/40 border border-bordercolor/60 text-[10px] text-textmuted flex items-start gap-1.5 leading-normal">
               <i class="ph-fill ph-info text-primary-400 text-xs mt-0.5 shrink-0"></i>
               <span>${escapeHtml(dhikr.merit)}</span>
             </div>`
          : ''
      }

      <!-- Bas de carte : Progression & Actions -->
      <div class="p-4 bg-surface/40 mt-auto border-t border-bordercolor relative overflow-hidden">
        <div class="absolute top-0 left-0 h-1.5 w-full bg-surface">
          <div class="h-full bg-primary-500 transition-all duration-300 ease-out" style="width: ${progressPercent}%; box-shadow: 0 0 10px var(--color-primary-500);"></div>
        </div>

        <div class="flex items-center justify-between gap-2.5 pt-1.5">
          <div class="flex-[1.2] bg-background/70 rounded-2xl py-2.5 px-2 flex flex-col items-center justify-center border border-bordercolor">
            <span class="text-[9px] text-primary-400 font-bold uppercase tracking-wider mb-0.5">Aujourd'hui</span>
            <span class="text-xl font-black text-textmain tabular-nums">${count}</span>
          </div>

          <button class="btn-increment flex-[2.5] h-[60px] rounded-2xl bg-primary-500 text-white shadow-neon flex items-center justify-center gap-2 tap-effect font-bold text-base uppercase tracking-wider active:bg-primary-600 transition-colors">
            <i class="ph-bold ph-plus"></i> Compter
          </button>

          <button class="btn-focus w-[60px] h-[60px] rounded-2xl bg-surface flex flex-col items-center justify-center text-primary-400 hover:text-primary-300 tap-effect border border-bordercolor" title="Mode Plein Écran">
            <i class="ph ph-corners-out text-2xl"></i>
          </button>
        </div>
      </div>
    `;

    // Événements
    const btnIncrement = card.querySelector<HTMLButtonElement>('.btn-increment');
    btnIncrement?.addEventListener('click', () => {
      const res = store.increment(dhikr.id);
      if (res.isMilestone) {
        Toast.show(`Objectif atteint pour "${dhikr.french}" ! 🎉`);
      }
    });

    const btnFocus = card.querySelector<HTMLButtonElement>('.btn-focus');
    btnFocus?.addEventListener('click', () => {
      callbacks.onOpenFocus(dhikr.id);
    });

    const btnFav = card.querySelector<HTMLButtonElement>('.btn-fav');
    btnFav?.addEventListener('click', (e) => {
      e.stopPropagation();
      const added = store.toggleFavorite(dhikr.id);
      Toast.show(added ? 'Ajouté aux favoris ⭐' : 'Retiré des favoris');
    });

    const btnReset = card.querySelector<HTMLButtonElement>('.btn-reset-dhikr');
    btnReset?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (
        confirm(
          `Remettre à zéro le compteur d'aujourd'hui pour "${dhikr.french}" ? L'historique global est conservé.`
        )
      ) {
        store.resetDhikr(dhikr.id);
        Toast.show('Compteur réinitialisé');
      }
    });

    const btnEdit = card.querySelector<HTMLButtonElement>('.btn-edit-custom');
    btnEdit?.addEventListener('click', (e) => {
      e.stopPropagation();
      callbacks.onEditCustom(dhikr.id);
    });

    const btnDelete = card.querySelector<HTMLButtonElement>('.btn-delete-custom');
    btnDelete?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Supprimer définitivement l'invocation "${dhikr.french}" ?`)) {
        store.deleteCustomDhikr(dhikr.id);
        Toast.show('Invocation supprimée');
      }
    });

    return card;
  }
}
