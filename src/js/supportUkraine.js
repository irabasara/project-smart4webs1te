const FONDS = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
];

const el = {
  container: document.querySelector('.support-ukraine-container'),
  list: document.querySelector('.support-ukraine-list'),
  btn: document.querySelector('.support-ukraine-btn'),
};

let options = {
  root: el.list.parentElement,
  rootMargin: '0px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(observerHandler, options);

function observerHandler() {
  el.list.parentElement.addEventListener('scroll', handleOnScroll);
}
function createMarcap() {
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
        )}</span><img class ="company-emblem"src="./img/supportUkraine-${
        i + 1
      }.png" alt="${obj.title}"></a></li>`
  ).join('');
}

el.list.insertAdjacentHTML('beforeend', createMarcap());

window.addEventListener('resize', handleViewportChange);

function handleChangeHeight(e) {
  el.list.parentElement.classList.toggle('active');
  if (e.currentTarget.firstChild.classList.contains('skroll-active')) {
    e.currentTarget.firstChild.classList.remove('skroll-active');
  } else {
    e.currentTarget.firstChild.classList.add('skroll-active');
  }
}

function handleScrolldown(e) {
  if (!e.currentTarget.firstChild.classList.contains('skroll-active')) {
    el.list.parentElement.removeEventListener('scroll', handleOnScroll);
    e.currentTarget.firstChild.classList.toggle('skroll-active');
    el.list.parentElement.scrollTo({
      top: el.list.scrollHeight,
      behavior: 'smooth',
    });
  } else {
    el.list.parentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

function handleOnScroll() {
  if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    if (el.list.getBoundingClientRect().top > 100) {
      el.btn.firstChild.classList.remove('skroll-active');
    } else {
      el.btn.firstChild.classList.add('skroll-active');
    }
  }
}

function handleViewportChange() {
  checkViewportSize();
}

function checkViewportSize() {
  if (window.innerWidth < 768 || window.innerWidth > 1279) {
    el.btn.firstChild.classList.remove('skroll-active');
    el.list.parentElement.classList.remove('active');
    el.btn.addEventListener('click', handleChangeHeight);
    el.btn.removeEventListener('click', handleScrolldown);
    observer.unobserve(el.list.children[el.list.children.length - 1]);
  } else {
    el.btn.removeEventListener('click', handleChangeHeight);
    el.btn.addEventListener('click', handleScrolldown);
    el.list.parentElement.addEventListener('scroll', handleOnScroll);
    observer.observe(el.list.children[el.list.children.length - 1]);
  }
}
checkViewportSize();
