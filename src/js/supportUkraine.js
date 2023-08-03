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
  }
];

const el = {
  container: document.querySelector('.support-ukraine-container'),
  list: document.querySelector('.support-ukraine-list'),
  btn: document.querySelector('.support-ukraine-btn'),
};

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

function handleScrolldown(e) {
      e.currentTarget.firstChild.classList.toggle('skroll-active');
      el.list.classList.toggle('active');
};
    
function handleViewportChange() {
  console.log(window.innerWidth);
  checkViewportSize();
};

function checkViewportSize() {
  if (window.innerWidth < 768) {
    el.btn.addEventListener('click', handleScrolldown);
  } else {
      el.btn.removeEventListener('click', handleScrolldown)
    }
};
checkViewportSize();
