import { refs } from "../refs";
import { logOutUser, user } from "./authUser";

// localStorage.setItem('USER', JSON.stringify({
//   name: '',
//   email: '',
//   isSignedIn: false,
// }))

const userLS = JSON.parse(localStorage.getItem("USER") || '{}')

refs.userProfileBtn.addEventListener('click', addLogOutBtn)
refs.userLogOut.addEventListener('click', LogOutUser)


if (userLS.isSignedIn) {
userProfile(userLS.name)
}

function addLogOutBtn() {
    refs.userLogOut.classList.toggle('is-hidden');
}

function LogOutUser() {
    logOutUser()
    refs.headerNav.classList.add('is-hidden')
    refs.menuNav.classList.add('is-hidden')
    refs.openMobileModalBtn.classList.remove('is-hidden')
    refs.openModalBtn.classList.remove('is-hidden')
    refs.userProfileBtn.classList.add('is-hidden')
    refs.userLogOut.classList.add('is-hidden');

}

export function userProfile(userName) {
    refs.headerNav.classList.remove('is-hidden')
    refs.menuNav.classList.remove('is-hidden')
    refs.openMobileModalBtn.classList.add('is-hidden')
    refs.userName.textContent = userName
    refs.userNameMob.textContent = userName
    refs.openModalBtn.classList.add('is-hidden')
    refs.userProfileBtn.classList.remove('is-hidden')
}