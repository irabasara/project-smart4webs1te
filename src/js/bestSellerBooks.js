import { getBooksAPI } from "./getBoorkAPI";

const bestBooks = document.querySelector('.home-title-book');
const container = document.querySelector('.js-container-bestBooks');


bestBooks.addEventListener('click', onClickBooks);

function onClickBooks() {
  // try {
  //   const data = await getBooksAPI('top-books');
  //   console.log(data)
  //   const info = data.map(({ list_name, books }) => {
  //     console.log('list_name', list_name);
  //     console.log('books', books);
  //     markupList(info)
  //   })  // }
  //   catch(error) {
  //     console.error(error)
  //   }}
  getBooksAPI('top-books')
    .then(({ data }) => data.map(({ list_name, books }) => {
      console.log('list_name', list_name);
      console.log('books', books);
      const markupList = books.map(({ book_image, title, author, _id }) => {
        return `<li class="js-list-bestBooks id=${_id}">
            <img src="${book_image}" alt="${title}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${title}</h3>
            <p class="js-autor-bestBooks">${author}</p>
        </li>`});
        container.insertAdjacentHTML('beforeend', markupList.join(''))
      
        
        const markupBlock = data.map(({ list_name}) => {
          return `<div class="js-container-homeBooks">
        <h3 class="js-list-name">${list_name}</h3 >
        <ul>${markupList}</ul>
        <btn class="js-btn-bestBooks">See more</btn>
        </div>`
        }).join('');
        container.insertAdjacentHTML('beforeend', markupBlock)
        
    }))

}

