/**
 * Utilitaires sécurisés pour la manipulation du DOM.
 */

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function getRequiredElement<T extends HTMLElement = HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`[DOM Error] Élément requis #${id} introuvable dans le document.`);
  }
  return el as T;
}

export function openModal(modalId: string, boxId: string): void {
  const modal = getRequiredElement(modalId);
  const box = getRequiredElement(boxId);

  modal.classList.remove('hidden');
  if (modalId === 'focus-modal') {
    modal.classList.add('flex');
  }

  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.classList.remove('translate-y-full');
    box.classList.remove('translate-y-full', 'scale-95');
  }, 10);
}

export function closeModal(modalId: string, boxId: string): void {
  const modal = getRequiredElement(modalId);
  const box = getRequiredElement(boxId);

  modal.classList.add('opacity-0');
  if (modalId === 'focus-modal') {
    modal.classList.add('translate-y-full');
  } else {
    if (window.innerWidth < 640) {
      box.classList.add('translate-y-full');
    } else {
      box.classList.add('scale-95');
    }
  }

  setTimeout(() => {
    modal.classList.add('hidden');
    if (modalId === 'focus-modal') {
      modal.classList.remove('flex');
    }
  }, 280);
}
