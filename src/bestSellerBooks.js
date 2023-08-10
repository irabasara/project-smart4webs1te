import { getBooksAPI } from "./js/getBoorkAPI";
import Notiflix, { Loading } from 'notiflix';
import { openModal } from "./js/modal-book";

export const refsBooks = {
bestBooks: document.querySelector('.home-title-book'),
container: document.querySelector('.js-container-bestBooks'),
nameCat: document.querySelector('.js-add-name-category'),
btnBack: document.querySelector('.back')
}

refsBooks.btnBack.classList.add('is-hidden');

refsBooks.container.addEventListener('click', onLoadSeeMore);
refsBooks.btnBack.addEventListener('click', onHome)

homeStart()

export function homeStart() {
return getBooksAPI('top-books')
  .then(({ data }) => {
    refsBooks.container.insertAdjacentHTML('afterbegin', `<h2 class="home-title-book">Best  Sellers <span class="books">Books</span></h2>`)
    refsBooks.container.insertAdjacentHTML('beforeend', markupBlock(data))
    Loading.remove()
    if (data === 0) {
  Notiflix.Notify.failure('There are no books in this category');
}
})
}

export function markupList(books) {
  return books.map(({ book_image, title, author, _id }) => {
    return `<li class="js-list-bestBooks" id="${_id}">
            <img src="${book_image}" alt="${title}" data-id="${_id}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${title}</h3>
            <p class="js-autor-bestBooks">${author}</p>
            <div class="card-hover-categories" data-id="${_id}"><p class="card-text-hover" data-id="${_id}">quick view</p></div>
        </li>`}).join('');
}

export function markupBlock(data) {
  return data.map(({ list_name, books }) => {
       return `<div class="wrapper"><h3 class="js-list-name">${list_name}</h3 >
        <ul class="js-overlow-bestBooks">${markupList(books)}</ul>
        <btn class="js-btn-bestBooks" data-js="${list_name}">See more</btn></div>`
  }).join('')
  
}
  
function onLoadSeeMore(e) {

  e.preventDefault();
  console.log('e.target', e.target)
  if (e.target.classList.contains('card-hover-categories')|| e.target.classList.contains('card-text-hover')) {
    const id = e.target.dataset.id;
    console.log('id', id)
    e.target.addEventListener('click', openModal(id));
    Loading.remove()
  }
  
  if (e.target.classList.contains('js-btn-bestBooks')) {
    let seeMoreCategory = e.target.dataset.js;
    refsBooks.container.innerHTML = "";
    getBooksAPI(`category?category=${seeMoreCategory}`)
      .then(({ data }) => {
        const titleCat = seeMoreCategory.split(" ");
        const allBooks = data.map(({ book_image, title, author, _id }) => {
          return `
          <li class="js-list-allBooks" id="${_id}">
          <img src="${book_image}" alt="${title}" data-id="${_id}" loading="lazy" class="img-bestBooks"/>
          <h3 class="js-named-bestBooks">${title}</h3>
          <p class="js-autor-bestBooks">${author}</p>
          <div class="card-hover-categories" data-id="${_id}"><p class="card-text-hover" data-id="${_id}">quick view</p></div>
          </li>`}).join('')
        refsBooks.container.insertAdjacentHTML('afterbegin', `<h2 class="home-title-book">${titleCat.slice(0, titleCat.length - 1).join(" ")} <span class="books">${titleCat.pop()}
          </span></h2> `)
        refsBooks.container.insertAdjacentHTML('beforeend', allBooks);
        refsBooks.btnBack.classList.remove('is-hidden')
    Loading.remove()
          if (data === 0) {
            Notiflix.Notify.failure('There are no books in this category');
        }
        })
          .catch(error => console.error(error))
    } 
}

export function onHome(e) {
  e.preventDefault();
  refsBooks.btnBack.classList.add('is-hidden')
  refsBooks.container.innerHTML = "";
  window.location.assign('./')
}
