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
        .padStart(2, 'O')}</span><picture class="company-emblem">
        <source srcset="${obj.png} 1x, ${obj.png2x} 2x" type="image/png"/> 
        <img src="${obj.png}" alt="${obj.title}" />
        </picture></a></li>`
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

const options = {
  root: el.listContainer,
  rootMargin: '0px',
  threshold: 0.5,
};
const callback = function (entries, observer) {
  entries.forEach(element => {
    if (element.isIntersecting) {
      el.btn.firstElementChild.classList.add('skroll-active');
    } else {
      el.btn.firstElementChild.classList.remove('skroll-active');
    }
  });
};
const observer = new IntersectionObserver(callback, options);
observer.observe(el.list.children[el.list.children.length - 1]);
