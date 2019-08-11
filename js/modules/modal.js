export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const modalOpen = document.querySelector('[data-modal="open"]');
  const modalClose = document.querySelector('[data-modal="close"]');

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('active');
  }

  function closeModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (modalContainer && modalOpen && modalClose) {
    modalOpen.addEventListener('click', toggleModal);
    modalClose.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', closeModal);
  }
}
