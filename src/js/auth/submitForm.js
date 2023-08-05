import { authUser, signInUser } from "./authUser";

const formAuthorization = document.querySelector('.auth-modal')
formAuthorization.addEventListener('submit', handleFormAuth)

function handleFormAuth(event) {
  event.preventDefault();
  const {
    elements: { name, email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === ""|| name.value === "") {
    return console.log("Please fill in all the fields!");
    }

    localStorage.setItem('USER_NAME', JSON.stringify(name.value))
    authUser(email.value, password.value, name.value)
    // signInUser(email.value, password.value)
    event.currentTarget.reset();
    
}