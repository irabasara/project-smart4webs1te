import { getBooksAPI } from "./getBoorkAPI";

const bestBooks = document.querySelector('.home-title-book');
const container = document.querySelector('.js-container-bestBooks');

bestBooks.addEventListener('click', onClickBooks);

function onClickBooks() {
  // try {
  //   const data = await getBooksAPI('top-books');
  //   console.log(data)
  //   { data } = data.map(({ list_name, books }) => {
  //     console.log('list_name', list_name);
  //     console.log('books', books);
      // let { list_name, books } = data;
      // console.log('list_name', data[0].list_name)
      // console.log('books', books)
    // catch (error) {
  //     console.error(error)
  //   }
  // }

  getBooksAPI('top-books')
  .then(({ data }) => data.map(({ list_name, books }) => {
    console.log('list_name', list_name);
    console.log('books', books);
    const markupList = books.map(({ book_image, title, author }) => {
     return `<li class="js-list-bestBooks">
            <p class="js-list-name">${list_name}</p>
            <img src="${book_image}" alt="${title}" loading="lazy" class="img-bestBooks" width="335" height="485"/>
            <h3 class="js-named-bestBooks">${title}</h3>
            <p class="js-autor-bestBooks">${author}</p>
            <button class="js-btn-bestBooks">See more</button>
        </li>`}).join('');
  container.insertAdjacentHTML('beforeend', markupList)
}))

}

