import { Report } from "notiflix";
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
  
  if (refs.submitButton.textContent === 'Sign up') {
    if (!email.value || !password.value || !name.value) {
        Report.failure('please fill all fields')
    } else {
    authUser(email.value, password.value)
  }
  }

  else {
    if (!email.value || !password.value ) {
    Report.failure('please fill all fields')
    } else {
    signInUser(email.value, password.value)
  }
  }
  
  event.currentTarget.reset();
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
