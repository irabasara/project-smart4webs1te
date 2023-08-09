
import { getBooksAPI } from './getBoorkAPI';
// import { refsBooks } from './refs';
import { refsBooks, onHome } from '../bestSellerBooks';
import { all } from 'axios';


const containerAll = document.querySelector('.all-categories')
const bookCategory = document.querySelector('.categories__list')
const allCat = document.querySelector('.categories__link')

containerAll.addEventListener('click', onOpenCategory)
allCat.addEventListener('click', onHome)

allCat.classList.add('categories__item--active');
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
      refsBooks.container.innerHTML = "";
      refsBooks.bestBooks = ""

      getBooksAPI(`category?category=${renderCategory}`)
        .then(({ data }) => {
          currentCategoryTogle(renderCategory);
          allCat.classList.remove('categories__item--active');
        const titleCat = renderCategory.split(" ");
        const allBooks = data.map(({ book_image, title, author, _id }) => {
          return `
          <li class="js-list-allBooks id=${_id}">
          <img src="${book_image}" alt="${title}" loading="lazy" class="img-bestBooks"/>
          <h3 class="js-named-bestBooks">${title}</h3>
          <p class="js-autor-bestBooks">${author}</p>
          </li>`}).join('')
          refsBooks.container.insertAdjacentHTML('beforebegin', `<h2 class="home-title-book">${titleCat.slice(0, titleCat.length - 2).join(" ")}<span class="books">${titleCat.pop()}
          </span></h2> `)
          refsBooks.container.insertAdjacentHTML('beforeend', allBooks);

          // refsBooks.bestBooks.textContent = renderCategory;
          refsBooks.btnBack.classList.add('is-hidden')
          refsBooks.bestBooks.classList.add('is-hidden')


          if (data === 0) {
  Notiflix.Notify.failure('There are no books in this category');
}
       })
        .catch(error => console.error(error))
} return 
}

function currentCategoryTogle(value) {
document.querySelector('.categories__item').classList.remove(`categories__item`);
document.querySelector(`li[data-category="${value}"]`).classList.add(`categories__item`);
};


