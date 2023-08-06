// import { user } from "./auth/authUser";

import { logOutUser } from "./auth/authUser";
import { refs } from "./refs";


const additionalNavForUser = document.querySelector('#js-header-nav')

//  if (user.isSignedIn) {
//         console.log('user.name', user.name)
//         additionalNavForUser.style.display = 'block'
//     }

export function addNewMarkup(isLogin) {
    if (isLogin) {
        refs.openModalBtn.classList.add('is-hidden')
        refs.userLogOut.classList.remove('is-hidden')
        refs.modal.classList.add("is-hidden");
        additionalNavForUser.style.display = 'block'
    }
}

refs.userLogOut.addEventListener('click', handlelogOut)
function handlelogOut() {
    logOutUser()
    refs.openModalBtn.classList.remove('is-hidden')
        refs.userLogOut.classList.add('is-hidden')
        additionalNavForUser.style.display = 'none'
}