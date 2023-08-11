
import { refs } from "./refs"

const location = window.location.pathname
console.log('location', location)
if (location === '/project-smart4webs1te/index.html') {
    refs.homeLink.classList.toggle('active')
    refs.homeLinkMobile.classList.toggle('active')

}
if (location === '/project-smart4webs1te/shopping-list-page.html') {
    refs.shopLink.classList.toggle('active')
    refs.shopLinkMobile.classList.toggle('active')

}
