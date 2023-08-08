import { refs } from "./refs";

refs.openModalBtn.addEventListener('click', openModal);
refs.openMobileModalBtn.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', closeModal);

 function openModal() {
   refs.menu.classList.add('is-hidden');
   refs.closeMenuBtn.classList.add('is-hidden');
   refs.modal.classList.remove('is-hidden-auth');
   document.body.classList.add('no-scroll');
}
  export function closeModal() {
     refs.modal.classList.add('is-hidden-auth');
     document.body.classList.remove('no-scroll');
  }
