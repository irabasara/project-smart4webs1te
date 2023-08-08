import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

export async function getBooksAPI(endPoint) {
  try {
    const response = await axios.get(`${endPoint}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// import { getBooksAPI } from './js/getBoorkAPI';

// getBooksAPI('top-books').then(response =>
//   console.log('response.data', response.data)
// );
