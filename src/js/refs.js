export const refs = {
  scrollTop: document.querySelector('.scroll'),
  openModalBtn: document.querySelector('#js-modal-open'),
  openMobileModalBtn:document.querySelector('#js-mobile-modal-open'),
  closeModalBtn: document.querySelector('#js-modal-close'),
  modal: document.querySelector('#js-modal'),
  userLogOut: document.querySelector('.btn-user-out'),
  userName: document.querySelector('.user-name'),
  formAuthorization: document.querySelector('.auth-modal'),
  signInButton: document.querySelector('#sign-in'),
  signUpButton: document.querySelector('#sign-up'),
  nameInput: document.querySelector('#input-name'),
  submitButton: document.querySelector('#submit-sign'),
  body: document.body,
  // mob-menu
  openMenuBtn: document.querySelectorAll('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  homeLinkMobile: document.querySelector('.menu-nav-link'),
  shopLinkMobile: document.querySelector('.menu-nav-shop'),
    // header
  homeLink: document.querySelector('.header-nav-link'),
  shopLink: document.querySelector('.header-nav-shop'),
  
}

// export const refsBooks = {
// bestBooks: document.querySelector('.home-title-book'),
// container: document.querySelector('.js-container-bestBooks'),
// cover: document.querySelector('.js-coverAllBooks'),
// nameCat: document.querySelector('.js-add-name-category')
// }