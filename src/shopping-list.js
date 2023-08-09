import { app } from './js/auth/firebase-app';

import amazon from './img/amazon.png';
import appleshop from './img/appleshop.png';
import boockshop from './img/boockshop.png';

function generateBookCardMarkup(booksArray) {
  let markup = '<ul class="shopping-list">';
  booksArray.map(element => {
    const {
      _id,
      book_image,
      title,
      description,
      author,
      list_name,
      buy_links,
    } = element;
    const amazonURL = getBookUrl('Amazon', buy_links);
    const appleBooksURL = getBookUrl('Apple Books', buy_links);
    const bookshopURL = getBookUrl('Bookshop', buy_links);

    markup += ` <li class="book-card" id="${_id}">
      <div class="shopping-image-thumb">
        <img src="${book_image}" alt="" />
      </div>
      <div class="book-card-info">
      <div class="book">
        <h2 class="book-title">${title}</h2>
        <div class="book-genre">${list_name}</div>
        <div class="book-description">${
          description
            ? description
            : "We don't have description for this book yet..."
        }</div>

        <button class="book-card-delete">
        <svg class="book-card-icon">
        <use href="img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-additional-info">
        <div class="book-author">${author}</div>
        <ul class="book-card-refs">
        <li class="amazon-icon"><a  href="${amazonURL}" target="_blank">
        <img src="${amazon}" alt="" / >
        </a></li>
        <li class="other-icon"><a  href="${appleBooksURL}" target="_blank"><img src="${appleshop}" alt="" / ></a></li>
        <li class="other-icon"><a  href="${bookshopURL}" target="_blank" ><img src="${boockshop}" alt="" /></a></li>
        </ul>
        
      </div>
      </div>
    </li>`;
  });
  markup += '</ul>';
  document.querySelector('.container').insertAdjacentHTML('beforeend', markup);
  document
    .querySelector('.shopping-list')
    .addEventListener('click', onRemoveBtnClick);
}

function getBookUrl(key, array) {
  const url = array.filter(site => {
    if (site.name === key) {
      return site.url;
    }
  });
  return url[0].url;
}

function onRemoveBtnClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  let el = evt.target;
  while (el) {
    if (el.hasAttribute('id')) {
      break;
    }
    el = el.parentNode;
  }
  el.remove();
  if (document.querySelector('.shopping-list').children.length < 1) {
    document.querySelector('.empty-list').style.display = 'flex';
  }
  removeBookFromStorage(el['id']);
}

function removeBookFromStorage(bookId) {
  const newStorage = getShoppingList().filter(element => {
    if (element._id === bookId) {
      return;
    }
    return element;
  });
  localStorage.setItem('ShoppingList', JSON.stringify(newStorage));
}

function getShoppingList() {
  return JSON.parse(window.localStorage.getItem('ShoppingList') || '[]');
}

if (getShoppingList().length > 0) {
  document.querySelector('.empty-list').style.display = 'none';
}
generateBookCardMarkup(getShoppingList());
