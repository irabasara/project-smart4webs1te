export function generateBookCardMarkup(booksArray) {
  let markup = '';
  booksArray.map(({ book_image, title, description, author, list_name }) => {
    markup += ` <li class="book-card">
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
        <a href="" >
        <img src="../img/amazon.svg" alt="" / >
        </a>
        <a href="" ><img src="../img/applebook.svg" alt="" / ></a>
        <a href="" ><img src="../img/bookshop.svg" alt="" /></a>
      </div>
      </div>
    </li>`;
  });
  document
    .querySelector('.shopping-list')
    .insertAdjacentHTML('beforeend', markup);
  return markup;
}
fetch('https://books-backend.p.goit.global/books/643282b1e85766588626a085')
  .then(response => response.json())
  .then(book => (localStorage['book'] = JSON.stringify(book)));
generateBookCardMarkup([JSON.parse(localStorage['book'])]);

if (!localStorage.getItem('book')) {
  document.querySelector('.empty-list').removeAttribute('display');
}
