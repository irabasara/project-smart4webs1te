
import { getBooksAPI } from './getBoorkAPI';
import { refsBooks, onHome, markupList } from '../bestSellerBooks';
import { all } from 'axios';
import { Loading } from 'notiflix';


const containerAll = document.querySelector('.all-categories')
const bookCategory = document.querySelector('.categories__list')
const allCat = document.querySelector('.categories__link')

containerAll.addEventListener('click', onOpenCategory)
allCat.addEventListener('click', onHome)

allCat.classList.add('categories__item--active');

getBooksAPI('category-list').then(({ data }) => {
  renderAllCategories(data);
});

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
      
      const titleCat = renderCategory.split(" ");
      
      getBooksAPI(`category?category=${renderCategory}`)
        .then(({ data }) => {
         allCat.classList.remove('categories__item--active');
          const allBooks = data.map(({ book_image, title, author, _id }) => {
          return `<li class="js-list-allBooks id=${_id}">
          <img src="${book_image}" alt="${title}" data-id="${_id}" loading="lazy" class="img-bestBooks"/>
          <h3 class="js-named-bestBooks">${title}</h3>
          <p class="js-autor-bestBooks">${author}</p>
          <div class="card-hover-categories" data-id="${_id}"><p class="card-text-hover" data-id="${_id}">quick view</p></div>
          </li>`}).join('')
        
      refsBooks.container.insertAdjacentHTML('afterbegin', `<h2 class="home-title-book">${titleCat
          .slice(0, titleCat.length - 1)
          .join(" ")} <span class="books">${titleCat
          .pop()}</span></h2>`)
      refsBooks.container.insertAdjacentHTML('beforeend', allBooks);
      refsBooks.btnBack.classList.add('is-hidden')

  Loading.remove();

          if (data === 0) {
  Notiflix.Notify.failure('There are no books in this category');
}
       })
        .catch(error => console.error(error))
} 
}


