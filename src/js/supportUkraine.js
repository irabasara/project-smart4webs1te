import { FONDS } from './supportUkraineData';

const el = {
  listContainer: document.querySelector('.support-ukraine-list-container'),
  list: document.querySelector('.support-ukraine-list'),
  btn: document.querySelector('.support-ukraine-btn'),
};

function createMarkup() {
  return FONDS.map(
    (obj, i) =>
      `<li class="support-ukraine-item item"><a href="${
        obj.url
      }" target="_blank" rel="noreferrer noopener"><span class="item-order-number">${(
        i + 1
      )
        .toString()
        .padStart(
          2,
          'O'
        )}</span><img class ="company-emblem"src="./img/supportUkraine/supportUkraine-${
        i + 1
      }.png" alt="${obj.title}"></a></li>`
  ).join('');
};

el.list.insertAdjacentHTML('beforeend', createMarkup());

el.btn.addEventListener('click', handleDown);

const { height: listItemHeight } = el.list.firstElementChild.getBoundingClientRect();

function handleDown(e) {
  if (!e.currentTarget.firstElementChild.classList.contains('skroll-active')) {
    el.listContainer.scrollBy({
      top: (listItemHeight + 20.1) * 3,
      behavior: 'smooth',
    });
  } else {
    el.listContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

el.listContainer.addEventListener('scroll', handleOnScroll);

function handleOnScroll() {
  if (window.innerWidth >= 768) {
    if (el.list.getBoundingClientRect().top > 100) {
      el.btn.firstElementChild.classList.remove('skroll-active');
    } else {
      el.btn.firstElementChild.classList.add('skroll-active');
    }
  } else {
    if (el.list.getBoundingClientRect().top > 0) {
      el.btn.firstElementChild.classList.remove('skroll-active');
    } else {
      el.btn.firstElementChild.classList.add('skroll-active');
    }
  }
};
