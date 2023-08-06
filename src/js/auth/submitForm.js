import { authUser, signInUser,user } from "./authUser";

const formAuthorization = document.querySelector('.auth-modal')
const signInButton = document.querySelector('#sign-in')
const signUpButton = document.querySelector('#sign-up')
const nameInput = document.querySelector('#input-name')
const submitButton = document.querySelector('#submit-sign')
const body = document.body

formAuthorization.addEventListener('submit', handleFormAuth)
signInButton.addEventListener('click', handleSignInForm)
signUpButton.addEventListener('click', handleSignUpForm)


function handleFormAuth(event) {
  event.preventDefault();
  const {
    elements: { name, email, password }
  } = event.currentTarget;
user.name = name.value;
  user.email = email.value;
  if (!email.value || !password.value ) {
    return console.log("Please fill in all the fields!");
    }
  if (submitButton.textContent === 'Sign up') {
  localStorage.setItem('USER_NAME', JSON.stringify(name.value))
    authUser(email.value, password.value, name.value)
  }
  else {
    signInUser(email.value, password.value)
}
    event.currentTarget.reset();
}


function handleSignInForm() {
  nameInput.hidden = true;
  submitButton.textContent = 'sign in';
  signUpButton.classList.remove('active');
  signInButton.classList.add('active');

}

function handleSignUpForm() {
  nameInput.hidden = false;
  submitButton.textContent = 'Sign up';
  signUpButton.classList.add('active');
  signInButton.classList.remove('active');

}
