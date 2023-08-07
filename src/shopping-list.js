import { app } from './js/auth/firebase-app';

function generateBookCardMarkup(booksArray) {
  let markup = '<ul class="shopping-list">';
  booksArray.map(element => {
    const { book_image, title, description, author, list_name, buy_links } =
      element;
    const amazon = getBookUrl('Amazon', buy_links);
    const appleBooks = getBookUrl('Apple Books', buy_links);
    const Bookshop = getBookUrl('Bookshop', buy_links);

    markup += ` <li class="book-card" id="${title}">
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
        <use href="./img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-card-refs">
        <div class="book-author">${author}</div>
        <a class="amazon-icon" href="${amazon}" target="_blank">
        <img src="./img/amazon.png" alt="" / >
        </a>
        <a class="other-icon" href="${appleBooks}" target="_blank"><img src="./img/appleshop.png" alt="" / ></a>
        <a class="other-icon" href="${Bookshop}" target="_blank" ><img src="./img/boockshop.png" alt="" /></a>
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
  removeBookFromStorage(el['id'], localStorage.getItem('ShoppingList'));
}

function removeBookFromStorage(title, storageArr) {
  const newStorage = JSON.parse(storageArr).filter(element => {
    if (element.title === title) {
      return;
    }
    return element;
  });
  localStorage.setItem('ShoppingList', JSON.stringify(newStorage));
}
if (
  localStorage['ShoppingList']?.length > 2 &&
  document.querySelector('.empty-list') != null
) {
  document.querySelector('.empty-list').style.display = 'none';
}
if (localStorage['ShoppingList']) {
  generateBookCardMarkup(JSON.parse(localStorage['ShoppingList']));
}
