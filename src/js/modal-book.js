import { getBooksAPI } from './getBoorkAPI';
import amazon from '../img/amazon.png';
import appleshop from '../img/appleshop.png';
import boockshop from '../img/boockshop.png';
// import {js-list-bestBooks} from '../bestSellerBooks';


let bookId;
let shoppingList = JSON.parse(window.localStorage.getItem("ShoppingList") || "[]");

const refs = {
    backdrop: document.querySelector('.modal-backdrop'),
    closeModalBtn: document.querySelector('.modal-close-btn'),
    modalWrap: document.querySelector('.modal-wrap'),
    modal: document.querySelector('.modal-content'),
    btnAdd: document.querySelector('.modal-add-btn'),
    btnRemove: document.querySelector('.modal-remove-btn'),
    textUnderBtn: document.querySelector('.modal-text'),
};

// const btnTest = document.querySelector('.test');
// btnTest.addEventListener('click', openModal);



export async function openModal(bookId) {
    console.log('openModal')
    // bookId = evt.target.dataset.id;
    setButtonsVisibility();
    refs.backdrop.classList.toggle("hi-backdrop");
    document.body.classList.add('no-scroll')

    const response = await getBooksAPI(`${bookId}`);
	const book = response.data;

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

function setButtonsVisibility() {
    if (shoppingList.indexOf(bookId) > -1) {
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
	shoppingList.push(bookId);
    setButtonsVisibility();
    window.localStorage.setItem("ShoppingList", JSON.stringify(shoppingList));
}

function onRemoveBtnClick() {
    const position = shoppingList.indexOf(bookId);
    if (position > -1) {
        shoppingList.splice(position, 1);
    }
    setButtonsVisibility();
    window.localStorage.setItem("ShoppingList", JSON.stringify(shoppingList));
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

