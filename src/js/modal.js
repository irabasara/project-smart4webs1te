import { refs } from "./refs";

// const openModalBtn = document.querySelector('#js-modal-open');
// const closeModalBtn = document.querySelector('#js-modal-close');
// const modal = document.querySelector('#js-modal');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    console.log('click')  
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll');
  }
