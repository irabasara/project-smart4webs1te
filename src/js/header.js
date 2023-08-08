
import { refs } from "./refs"

const location = window.location.pathname
console.log('location', location)
if (location === '/index.html') {
    refs.homeLink.classList.toggle('active')
    refs.homeLinkMobile.classList.toggle('active')

}
if (location === '/shopping-list-page.html') {
    refs.shopLink.classList.toggle('active')
    refs.shopLinkMobile.classList.toggle('active')

}
