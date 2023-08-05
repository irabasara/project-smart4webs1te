import { renderForm } from "./renderForm"


const signInButton = document.querySelector('#sign-in')
const body = document.body
signInButton.addEventListener('click', handleSignInForm)

function handleSignInForm() {
 body.innerHTML=renderForm()
}

const signInHeroButton = document.querySelector('#sign-in-submit')
