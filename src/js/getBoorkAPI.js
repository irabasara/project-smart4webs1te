import axios from 'axios';
import { Loading } from 'notiflix';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

export async function getBooksAPI(endPoint) {
  if (endPoint = 'top-books') {
  Loading.pulse();
    Loading.remove(3000)
  } else {
  Loading.pulse();
  }
  try {
    const response = await axios.get(`${endPoint}`);
    Loading.remove()
    return response;
  } catch (error) {
    Loading.remove()

    console.error(error);
  }
}


// console.log('getBooksAPI()', getBooksAPI())

// import { getBooksAPI } from './js/getBoorkAPI';

// getBooksAPI('top-books').then(response =>
//   console.log('response.data', response.data)
// );
