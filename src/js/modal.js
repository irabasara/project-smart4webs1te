import { refs } from "./refs";

// const openModalBtn = document.querySelector('#js-modal-open');
// const closeModalBtn = document.querySelector('#js-modal-close');
// const modal = document.querySelector('#js-modal');

  
refs.openModalBtn.addEventListener('click', toggleModal);
refs.openMobileModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
  // console.log('refs.openModalBtn', refs.openModalBtn)

function toggleModal(e) {
  // console.log('e.curentTarget', e.currentTarget)
  if (e.currentTarget === refs.openMobileModalBtn) {
    refs.menu.classList.add('is-hidden');
    refs.closeMenuBtn.classList.add('is-hidden');
    refs.modal.classList.remove("is-hidden-auth");
    document.body.classList.remove('no-scroll');
  }
  if (e.currentTarget === refs.closeModalBtn) {
      refs.modal.classList.add("is-hidden-auth");
     document.body.classList.remove('no-scroll');

  } if (e.currentTarget === refs.openModalBtn) {
    refs.modal.classList.remove("is-hidden-auth")}
    
  
  }
