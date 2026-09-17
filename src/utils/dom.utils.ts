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
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    if (window.innerWidth < 640) {
      box.classList.remove('translate-y-full');
    } else {
      box.classList.remove('scale-95');
    }
  }, 10);
}

export function closeModal(modalId: string, boxId: string): void {
  const modal = getRequiredElement(modalId);
  const box = getRequiredElement(boxId);

  modal.classList.add('opacity-0');
  if (window.innerWidth < 640) {
    box.classList.add('translate-y-full');
  } else {
    box.classList.add('scale-95');
  }

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 280);
}
