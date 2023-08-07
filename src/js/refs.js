export const refs = {
    scrollTop: document.querySelector('.scroll'),
    openModalBtn: document.querySelector('#js-modal-open'),
    openMobileModalBtn:document.querySelector('#js-mobile-modal-open'),
    closeModalBtn: document.querySelector('#js-modal-close'),
    modal: document.querySelector('#js-modal'),
  userLogOut: document.querySelector('.btn-user-out'),
    userName:document.querySelector('.user-name'),
    // mob-menu
      openMenuBtn: document.querySelectorAll('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
}

export const refsBooks = {
bestBooks: document.querySelector('.home-title-book'),
container: document.querySelector('.js-container-bestBooks'),
cover: document.querySelector('.js-coverAllBooks'),
nameCat: document.querySelector('.js-add-name-category')
}