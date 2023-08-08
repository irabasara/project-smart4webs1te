const el = {
  container: document.querySelector('.heard-container'),
  heardBackdrop: document.querySelector('.heard-backdrop'),
  btn: document.querySelector('.heard-btn'),
  left: document.querySelector('.leftpart'),
  right: document.querySelector('.rigthpart'),
};

el.container.addEventListener('click', heardClick);
el.heardBackdrop.addEventListener('click', heardClick);
el.btn.addEventListener('click', closeHeard);
function heardClick(e) {
  console.log(window.innerHeight)
  if (e.target === el.heardBackdrop) {
    el.container.classList.remove('active');
    el.heardBackdrop.classList.add('isHidden');
    const arr = [...el.container.children];
    arr.forEach(element => {
      element.classList.remove('anime');
      element.classList.remove('active');
    });
  } else if (e.target === el.left || e.target === el.right) {
    el.container.classList.add('active');
    el.heardBackdrop.classList.remove('isHidden');
    const arr = [...el.container.children];
    arr.forEach(element => {
      element.classList.add('anime');
      element.classList.add('active');
    });
  }
  if (el.container.classList.contains('active') && window.innerWidth > 768) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
}

function closeHeard() {
  el.container.classList.remove('active');
  el.heardBackdrop.classList.add('isHidden');
  const arr = [...el.container.children];
  arr.forEach(element => {
    element.classList.remove('anime');
    element.classList.remove('active');
  });
  if (el.container.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
}
