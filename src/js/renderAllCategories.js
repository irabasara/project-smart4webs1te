
import { getBooksAPI } from './getBoorkAPI';

export function renderAllCategories(allCategories) {

  let markup = '';
  allCategories.map(({ list_name }) => {
    markup += `<li class="categories__item categories__item">
					<a class="categories__link" href="books">
						${list_name}
					</a>
				</li>`;
  });
  document.querySelector('.all-categories').insertAdjacentHTML('beforeend', markup);
  return markup;
}

const getAllCategory = await getBooksAPI('top-books').then(response => response.data);
renderAllCategories(getAllCategory)
