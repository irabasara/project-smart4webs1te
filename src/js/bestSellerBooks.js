import { getBooksAPI } from "./getBoorkAPI";
import Notiflix from 'notiflix';
// import {renderAllCategories} from "./renderAllCategories"

const bestBooks = document.querySelector('.home-title-book');
const container = document.querySelector('.js-container-bestBooks');

// container.addEventListener('click', onLoadSeeMore)

// async function onClickBooks() {
//   try {
//     const { data } = await getBooksAPI('top-books');
//     if (data === 0) {
//       Notiflix.Notify.failure('There are no books in this category');
//       console.log(data)
//     }
//     markupBlock(data)
//   }
//   catch (error) {
//     console.error(error)
// }
// }

getBooksAPI('top-books')
  .then(({ data }) => {
    markupBlock(data);
if (data === 0) {
  Notiflix.Notify.failure('There are no books in this category');
}
})
   

function markupList(books) {
  return books.map(({ book_image, title, author, _id }) => {
    return `<li class="js-list-bestBooks id=${_id}">
            <img src="${book_image}" alt="${title}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${title}</h3>
            <p class="js-autor-bestBooks">${author}</p>
        </li>`}).join('');
}

function markupBlock(data) {
   const markupBlock = data.map(({ list_name, books }) => {
    return `<h3 class="js-list-name">${list_name}</h3 >
        <ul class="js-overlow-bestBooks">${markupList(books)}</ul>
        <btn class="js-btn-bestBooks" data-js="${list_name}">See more</btn>`}).join('')
    container.insertAdjacentHTML('beforeend', markupBlock)
}

// function onLoadSeeMore(e) {
//   e.preventDefault();
//   if (e.target.classList.contains('js-btn-bestBooks')) {
//     const seeMoreCategory = e.target.dataset.js;
//     // console.log(seeMoreCategory)
//     container.innerHTML = ""
//     container.insertAdjacentHTML('beforeend', markupList(`${seeMoreCategory}`))
//     if (!seeMoreCategory) {
//       Notiflix.Notify.failure('There are no books in this category')
//     }
    
//   }
// }

