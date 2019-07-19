export default function initModal() {

  const modalContainer = document.querySelector('[data-modal="container"]');
  const modalOpen = document.querySelector('[data-modal="open"]');
  const modalClose = document.querySelector('[data-modal="close"]');
  
  if (modalContainer && modalOpen && modalClose) {

    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle('active');
    }
    
    function closeModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    modalOpen.addEventListener('click', toggleModal);
    modalClose.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', closeModal)
    
  }

}

