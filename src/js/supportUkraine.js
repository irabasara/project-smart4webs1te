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
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
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
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const el = {
  list: document.querySelector('.support-ukraine-list'),
  btn: document.querySelector('.support-ukraine-btn'),
};

function createMarcap() {
  return FONDS.map(
    (obj, i) =>
      `<li class=".support-ukraine-item item"><a href="${obj.url}" target="_blank" rel="noreferrer noopener"><span>${
        (i + 1).toString().padStart(2, '0')
      }</span><img src="./img/supportUkraine-${i + 1}.png" alt="${
        obj.title
      }"></a></li>`
  ).join('');
};

el.list.insertAdjacentHTML('beforeend', createMarcap());
