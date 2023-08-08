import { getBooksAPI } from "./getBoorkAPI";
import Notiflix from 'notiflix';
import { refsBooks } from "./refs";


refsBooks.container.addEventListener('click', onLoadSeeMore)

getBooksAPI('top-books')
  .then(({ data }) => {
    markupBlock(data);
if (data === 0) {
  Notiflix.Notify.failure('There are no books in this category');
}
})

export function markupList(books) {
  return books.map(({ book_image, title, author, _id }) => {
    return `<li class="js-list-bestBooks" id=${_id}>
            <img src="${book_image}" alt="${title}" data-id="${_id} loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${title}</h3>
            <p class="js-autor-bestBooks">${author}</p>
        </li>`}).join('');
}

export function markupBlock(data) {
    const markupBlock= data.map(({ list_name, books }) => {
      return `<h3 class="js-list-name">${list_name}</h3 >
        <ul class="js-overlow-bestBooks">${markupList(books)}</ul>
        <btn class="js-btn-bestBooks" data-js="${list_name}">See more</btn>`
    }).join('')
    refsBooks.container.insertAdjacentHTML('beforeend', markupBlock)
}
  
function onLoadSeeMore(e) {
  e.preventDefault();
  if (e.target.classList.contains('img-bestBooks')) {
    const id = e.target.dataset.id;
    e.target.addEventListener('click', openModal(id));
      }
  
  if (e.target.classList.contains('js-btn-bestBooks')) {
      let seeMoreCategory = e.target.dataset.js;
      refsBooks.container = "";
      getBooksAPI(`category?category=${seeMoreCategory}`)
        .then(({ data }) => {
          refsBooks.nameCat.textContent = seeMoreCategory;
          const allBooks = data.map(({ book_image, title, author, _id }) => {
            return `<li class="js-list-allBooks" id=${_id}>
            <img src="${book_image}" alt="${title}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${title}</h3>
            <p class="js-autor-bestBooks">${author}</p>
        </li>`}).join('')
          refsBooks.cover.innerHTML = allBooks;
          if (data === 0) {
            Notiflix.Notify.failure('There are no books in this category');
          }
        })
        .catch(error => console.error(error))
  
    }

  }
