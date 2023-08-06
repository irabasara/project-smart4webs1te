const refs = {
  removeBtn: document.querySelector('.book-card-delete'),
};

export function generateBookCardMarkup(booksArray) {
  let markup = '';
  booksArray.map(element => {
    const { book_image, title, description, author, list_name, buy_links } =
      element;
    const amazon = findBookUrl('Amazon', buy_links);
    const appleBooks = findBookUrl('Apple Books', buy_links);
    const barnesAndNoble = findBookUrl('Barnes and Noble', buy_links);

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
        <use href="../img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-card-refs">
        <div class="book-author">${author}</div>
        <a href="${amazon}" >
        <img src="../img/amazon.svg" alt="" / >
        </a>
        <a href="${appleBooks}" ><img src="../img/applebook.svg" alt="" / ></a>
        <a href="${barnesAndNoble}" ><img src="../img/bookshop.svg" alt="" /></a>
      </div>
      </div>
    </li>`;
  });
  document
    .querySelector('.shopping-list')
    .insertAdjacentHTML('beforeend', markup);
}

export function findBookUrl(key, array) {
  return array.map(site => {
    if (site.name === key) {
      return site.url;
    }
  });
}

export function onRemoveBtnClick(evt) {
  let el = evt.target;
  while (el) {
    if (el.hasAttribute('id')) {
      break;
    }
    el = el.parentNode;
  }
  el.remove();
  if (document.querySelector('.shopping-list').children.length === 0) {
    document.querySelector('.empty-list').removeAttribute('style');
  }
  removeBookFromStorage(el['id'], localStorage.getItem('books'));
}

// TEST BLOCK!!!!

let test = new Array();
const url = [
  'https://books-backend.p.goit.global/books/643282b1e85766588626a085',
  'https://books-backend.p.goit.global/books/643282b1e85766588626a0b2',
];

Promise.all(url.map(url => fetch(url).then(resp => resp.json())))
  .then(text => {
    test.push(text);
  })
  .then(() => localStorage.setItem('books', JSON.stringify(...test)))
  .finally(e => {
    generateBookCardMarkup(JSON.parse(localStorage['books']));
  });

// TEST BLOCK!!!

document
  .querySelector('.shopping-list')
  .addEventListener('click', onRemoveBtnClick);

function removeBookFromStorage(title, storageArr) {
  const newStorage = JSON.parse(storageArr).filter(element => {
    if (element.title === title) {
      return;
    }
    return element;
  });
  localStorage.setItem('books', JSON.stringify(newStorage));
}
