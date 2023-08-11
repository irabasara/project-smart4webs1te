
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
          <svg class="book-card-icon"  width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
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
