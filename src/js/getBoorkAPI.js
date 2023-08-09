import axios from 'axios';
import { Loading } from 'notiflix';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

export async function getBooksAPI(endPoint) {
  try {
    Loading.pulse({
      backgroundColor: 'rgba(50, 50, 71, 0.5)',
      svgColor: 'var(--main-color)',
      svgSize: '140px'
     })
    const response = await axios.get(`${endPoint}`);
    return response;

  } catch (error) {
    console.error(error);
  }
}
