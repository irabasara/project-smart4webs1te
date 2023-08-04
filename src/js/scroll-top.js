import {refs} from './refs'


refs.scrollTop.addEventListener('click', onScrollTopClick)
window.addEventListener('scroll', trackScroll)

function trackScroll() {
   const height = window.scrollY;
   const coords = document.documentElement.clientHeight;
    if (height > coords) {
        refs.scrollTop.classList.add('show')
    } else {
         refs.scrollTop.classList.remove('show')
    }
}

function onScrollTopClick () {
    if (window.scrollY > 0) {
        window.scrollBy(0, -30)
        setTimeout(onScrollTopClick,0)
    }
}