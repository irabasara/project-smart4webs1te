// import {refs} from './refs'
const scrollTop = document.querySelector('.scroll');

scrollTop.addEventListener('click', onScrollTopClick)
window.addEventListener('scroll', trackScroll)

function trackScroll() {
   const height = window.scrollY;
   const coords = document.documentElement.clientHeight;
    if (height > coords) {
        scrollTop.classList.add('show')
    } else {
         scrollTop.classList.remove('show')
    }
}

export function onScrollTopClick () {
    if (window.scrollY > 0) {
        window.scrollBy(0, -30)
        setTimeout(onScrollTopClick,0)
    }
}
