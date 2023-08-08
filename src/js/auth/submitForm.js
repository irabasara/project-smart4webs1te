
import { closeModal } from "../modal";
import { refs } from "../refs";
import { authUser, signInUser,user } from "./authUser";

refs.formAuthorization.addEventListener('submit', handleFormAuth)
refs.signInButton.addEventListener('click', handleSignInForm)
refs.signUpButton.addEventListener('click', handleSignUpForm)


function handleFormAuth(event) {
  event.preventDefault();
  const {elements: { name, email, password }} = event.currentTarget;

  user.name = name.value;
  user.email = email.value;

  if (!email.value || !password.value ) {
    return console.log("Please fill in all the fields!");
  }
  
  if (submitButton.textContent === 'Sign up') {
    authUser(email.value, password.value)
  }

  else {
    signInUser(email.value, password.value)
  }
  
  event.currentTarget.reset();
  closeModal()
}


function handleSignInForm() {
  refs.nameInput.hidden = true;
  refs.submitButton.textContent = 'sign in';
  refs.signUpButton.classList.remove('active');
  refs.signInButton.classList.add('active');

}

function handleSignUpForm() {
  refs.nameInput.hidden = false;
  refs.submitButton.textContent = 'Sign up';
  refs.signUpButton.classList.add('active');
  refs.signInButton.classList.remove('active');

}
