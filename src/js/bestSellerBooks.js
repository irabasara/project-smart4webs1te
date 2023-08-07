import { getBooksAPI } from "./getBoorkAPI";
import Notiflix from 'notiflix';

const bestBooks = document.querySelector('.container-bestBooks');
const container = document.querySelector('.js-container-bestBooks');


bestBooks.addEventListener('click', onClickBooks);
// container.addEventListener('click', onLoadSeeMore)

async function onClickBooks() {
  try {
    const { data } = await getBooksAPI('top-books');
    if (data === 0) {
      Notiflix.Notify.failure('There are no books in this category');
      console.log(data)
    }
    markupBlock(data)
  }
  catch (error) {
    console.error(error)
}
}

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
    return `<div class="js-container-homeBooks">
        <h3 class="js-list-name">${list_name}</h3 >
        <ul class="js-overlow-bestBooks">${markupList(books)}</ul>
        <btn class="js-btn-bestBooks" data-js="${list_name}">See more</btn>
        </div>`
  }).join('')
    container.insertAdjacentHTML('beforeend', markupBlock)
}

// function onLoadSeeMore(e) {
//   e.preventDefault();
//   if (e.target.classList.contains('js-btn-bestBooks')) {
//     const seeMoreCategory = e.target.dataset.js;
//     container.insertAdjacentHTML('afterbegin', renderAllCategories(`${seeMoreCategory}`));
//   }
// }

// async function renderAllCategories(data) {
//   try {
//     const { data } = await getBooksAPI('categoty-list');
//     let markup = '';
//     data.map(({ list_name }) => {
//       data.map(({ list_name, category_list }) => {
//         markup += `<li class="categories__item categories__item">
// 					<a class="categories__link" href="books">
// 					<a class="categories__link" href="${category_list}">
// 						${list_name}
// 					</a>
// 				</li>`;
//       })
//     })
//   }
//   catch (error) {
//     console.error(error)
//   }
// }