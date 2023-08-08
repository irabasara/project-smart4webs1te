
import { getBooksAPI } from './getBoorkAPI';
// import { refsBooks } from './refs';
import { markupBlock, markupList, refsBooks } from '../bestSellerBooks';


const containerAll = document.querySelector('.all-categories')
const bookCategory = document.querySelector('.categories__item')

containerAll.addEventListener('click', onOpenCategory)

// export function renderAllCategories(allCategories) {

//   let markup = '';
//   allCategories.map(({ list_name }) => {
//     markup += `<li class="categories__item" data-category="${list_name}">
// 					<a class="categories__link" >
// 						${list_name}
// 					</a>
// 				</li>`;
//   });
//   document.querySelector('.all-categories').insertAdjacentHTML('beforeend', markup);
//   return markup;
// }

getBooksAPI('category-list').then(({ data }) => renderAllCategories(data));

function renderAllCategories(data) {
  let markup = data.map(({ list_name }) => {
    return `<li class="categories__item categories__link" data-category="${list_name}">${list_name}</li>`
  }).join('')
  containerAll.insertAdjacentHTML('beforeend', markup)
}

function onOpenCategory(e) {
  e.preventDefault();
    if (e.target.classList.contains('categories__item')) {
    let renderCategory = e.target.dataset.category;
    refsBooks.container = "";
    if (renderCategory === 'All categories') {
    getBooksAPI('top-books')
      .then(({ data }) => {
        markupBlock(data);
      })
      if (data === 0) {
  Notiflix.Notify.failure('There are no books in this category');
}

    } else {
      getBooksAPI(`category?category=${renderCategory}`)
        .then(({ data }) => {
          refsBooks.container = "";
          refsBooks.bestBooks.textContent = renderCategory;
          const allBooks = data.map(({ book_image, title, author, _id }) => {
            return `<li class="js-list-allBooks id=${_id}">
              <img src="${book_image}" alt="${title}" data-id="${_id}" loading="lazy" class="img-bestBooks"/>
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
}


