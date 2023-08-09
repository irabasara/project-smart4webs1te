import { getBooksAPI } from './getBoorkAPI';
import amazon from '../img/amazon.png';
import appleshop from '../img/appleshop.png';
import boockshop from '../img/boockshop.png';

let book;

const refs = {
    backdrop: document.querySelector('.modal-backdrop'),
    closeModalBtn: document.querySelector('.modal-close-btn'),
    modalWrap: document.querySelector('.modal-wrap'),
    modal: document.querySelector('.modal-content'),
    btnAdd: document.querySelector('.modal-add-btn'),
    btnRemove: document.querySelector('.modal-remove-btn'),
    textUnderBtn: document.querySelector('.modal-text'),
};



export async function openModal(bookId) {
    setButtonsVisibility(bookId);
    refs.modal.innerHTML = "<div class='modal-skeleton'></div>";
    refs.backdrop.classList.toggle("hi-backdrop");
    document.body.classList.add('no-scroll')

    const response = await getBooksAPI(`${bookId}`);
	book = response.data;

    refs.modal.innerHTML = `
		<div class="modal-content-card">
			<div class="modal-content-img">
				<img class='modal-content-pict' src="${book.book_image}" alt="${book.title}"  />
			</div>
			<div class="modal-content-text">
				<h2 class="modal-content-title">${book.title}</h2>
				<p class="modal-content-autur">${book.author}</p>
				<p class="modal-content-abst">${book.description}</p>
				<ul class="modal-link">
					<li>
						<a class="modal-link" href="${book.buy_links[0].url}" target="_blank">
                            <img class="modal-link-icon amazon"
                            src="${amazon}"
                            srcset="${amazon}"
                            alt="amazon" width="62" height="19"></img>
                        </a>
                    </li>
                    <li>
                        <a class="modal-link" href="${book.buy_links[1].url}" target="_blank">
                            <img class="modal-link-icon appleshop"
                            src="${appleshop}"
                            srcset="${appleshop}"
                            alt="apple shop" width="33" height="32"></img>
                        </a>
                    </li>
                    <li>
                        <a class="modal-link" href="${book.buy_links[4].url}" target="_blank">
							<img class="modal-link-icon bookshop"
							src="${boockshop}"
							srcset="${boockshop}"
							alt="bookshop" width="38" height="36"></img>
						</a>
					</li>
				</ul>
			</div>
		</div>`;
}


export function closeModal() {
    refs.backdrop.classList.toggle("hi-backdrop");
    document.body.classList.remove('no-scroll');
};

function setButtonsVisibility(bookId) {
    const shoppingList = getShoppingList();
    if (shoppingList.findIndex(e => e._id === bookId) > -1) {
        refs.btnAdd.classList.add('is-hidden');
        refs.btnRemove.classList.remove('is-hidden');
        refs.textUnderBtn.classList.remove('is-hidden');
    } else {
        refs.btnAdd.classList.remove('is-hidden');
        refs.btnRemove.classList.add('is-hidden');
        refs.textUnderBtn.classList.add('is-hidden');
    }
}

function onAddBtnClick() {
    const shoppingList = getShoppingList();
	shoppingList.push(book);
    window.localStorage.setItem("ShoppingList", JSON.stringify(shoppingList));
    setButtonsVisibility(book._id);
}

function onRemoveBtnClick() {
    const shoppingList = getShoppingList().filter(el => {
        if (el._id === book._id) {
            return;
        }
        return el;
    });
    window.localStorage.setItem("ShoppingList", JSON.stringify(shoppingList));
    setButtonsVisibility(book._id);
}

function getShoppingList() {
    return JSON.parse(window.localStorage.getItem("ShoppingList") || "[]");
}

refs.closeModalBtn.addEventListener('click', closeModal);
refs.btnAdd.addEventListener('click', onAddBtnClick);
refs.btnRemove.addEventListener('click', onRemoveBtnClick);

window.addEventListener('click', (evt) => {
    if (evt.target === refs.backdrop) {
        closeModal()
    }
});

window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
        closeModal()
    }
});

