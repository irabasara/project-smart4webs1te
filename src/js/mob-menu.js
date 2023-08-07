import { refs } from "./refs";

(() => {
    refs.openMenuBtn.forEach((el) => {
      el.addEventListener('click', toggleMenu);
    });
  
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
      refs.closeMenuBtn.classList.toggle('is-hidden');
     
      
    }
})();