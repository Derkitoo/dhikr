import { getRequiredElement } from '../utils/dom.utils';

export class NamesBanner {
  private onOpenModal: () => void;

  constructor(onOpenModal: () => void) {
    this.onOpenModal = onOpenModal;
  }

  public init(): void {
    const btn = getRequiredElement('btn-open-names-banner');
    btn.addEventListener('click', () => {
      this.onOpenModal();
    });
  }
}
