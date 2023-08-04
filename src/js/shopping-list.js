export function generateBookCardMarkup(booksArray) {
  let markup = '';
  booksArray.map(({ book_image, title, description, author, list_name }) => {
    markup += ` <li class="book-card">
      <div class="shopping-image-thumb">
        <img src="${book_image}" alt="" />
      </div>
      <div class="">
      <div class="book-description">
        <h2 class="book-title">${title}</h2>
        <div class="book-genre">${list_name}</div>
        <div class="book-description">afdexzveawf<axc${description}</div>
        <img src="" alt="" />
      </div>
      <div>
        <div class="book-genre">${author}</div>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
        <a href=""><img src="" alt="" /></a>
      </div>
      </div>
    </li>`;
  });
  document
    .querySelector('.shopping-list')
    .insertAdjacentHTML('beforeend', markup);
  return markup;
}
fetch('https://books-backend.p.goit.global/books/643282b1e85766588626a0dc')
  .then(response => response.json())
  .then(book => (localStorage['book'] = JSON.stringify(book)));
console.log(generateBookCardMarkup([JSON.parse(localStorage['book'])]));
