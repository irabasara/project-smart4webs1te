// import { app } from './auth/firebase-app';

// function generateBookCardMarkup(booksArray) {
//   let markup = '';
//   booksArray.map(element => {
//     const { book_image, title, description, author, list_name, buy_links } =
//       element;
//     const amazon = getBookUrl('Amazon', buy_links);
//     const appleBooks = getBookUrl('Apple Books', buy_links);
//     const Bookshop = getBookUrl('Bookshop', buy_links);

//     markup += ` <li class="book-card" id="${title}">
//       <div class="shopping-image-thumb">
//         <img src="${book_image}" alt="" />
//       </div>
//       <div class="book-card-info">
//       <div class="book">
//         <h2 class="book-title">${title}</h2>
//         <div class="book-genre">${list_name}</div>
//         <div class="book-description">${
//           description
//             ? description
//             : "We don't have description for this book yet..."
//         }</div>
        
//         <button class="book-card-delete">
//         <svg class="book-card-icon">
//         <use href="../img/sprite.svg#icon-trash"></use>
//         </svg>
//         </button>
//       </div>
//       <div class="book-card-refs">
//         <div class="book-author">${author}</div>
//         <a class="amazon-icon" href="${amazon}" target="_blank">
//         <img src="../img/amazon.svg" alt="" / >
//         </a>
//         <a class="other-icon" href="${appleBooks}" target="_blank"><img src="../img/applebook.svg" alt="" / ></a>
//         <a class="other-icon" href="${Bookshop}" target="_blank" ><img src="../img/bookshop.svg" alt="" /></a>
//       </div>
//       </div>
//     </li>`;
//   });
//   document
//     .querySelector('.shopping-list')
//     .insertAdjacentHTML('beforeend', markup);
//   document
//     .querySelector('.shopping-list')
//     .addEventListener('click', onRemoveBtnClick);
// }

// function getBookUrl(key, array) {
//   const url = array.filter(site => {
//     if (site.name === key) {
//       return site.url;
//     }
//   });
//   return url[0].url;
// }

// function onRemoveBtnClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   let el = evt.target;
//   while (el) {
//     if (el.hasAttribute('id')) {
//       break;
//     }
//     el = el.parentNode;
//   }
//   el.remove();
//   if (document.querySelector('.shopping-list').children.length < 1) {
//     document.querySelector('.empty-list').style.display = 'flex';
//   }
//   removeBookFromStorage(el['id'], localStorage.getItem('shoppingList'));
// }

// function removeBookFromStorage(title, storageArr) {
//   const newStorage = JSON.parse(storageArr).filter(element => {
//     if (element.title === title) {
//       return;
//     }
//     return element;
//   });
//   localStorage.setItem('shoppingList', JSON.stringify(newStorage));
// }

// // ------------------------------------------------------------------------------------------TEST BLOCK!!!!

// let test = new Array();
// const url = [
//   'https://books-backend.p.goit.global/books/643282b1e85766588626a085',
//   'https://books-backend.p.goit.global/books/643282b1e85766588626a0b2',
//   'https://books-backend.p.goit.global/books/643282b1e85766588626a087',
//   'https://books-backend.p.goit.global/books/643282b2e85766588626a15a',
// ];

// Promise.all(url.map(url => fetch(url).then(resp => resp.json())))
//   .then(text => {
//     test.push(text);
//   })
//   .then(() => localStorage.setItem('shoppingList', JSON.stringify(...test)))
//   .finally(e => {
//     generateBookCardMarkup(JSON.parse(localStorage['shoppingList']));
//   });

// // ------------------------------------------------------------------------------------------TEST BLOCK!!!!
// if (localStorage['shoppingList'].length > 0) {
//   document.querySelector('.empty-list').style.display = 'none';
// }
