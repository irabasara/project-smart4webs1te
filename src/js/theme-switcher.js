document.addEventListener('DOMContentLoaded', function () {
  const refs = {
    themeSwitch: document.querySelector('#themeSwitch'),
    body: document.querySelector('body'),
    header: document.querySelector('header'),
  };

  const { themeSwitch, body, header } = refs;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    header.classList.add(savedTheme);

    if (savedTheme === 'dark') {
      themeSwitch.classList.add('active');
    }
  }

  themeSwitch.addEventListener('click', function () {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    themeSwitch.classList.toggle('active');

    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', '');
    }
  });
});
