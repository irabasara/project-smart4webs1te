import { refs } from './refs';
const { checkboxInput, passwordInput } = refs;

checkboxInput.addEventListener('click', onCheckHandler);

function onCheckHandler() {
  const isChecked = checkboxInput.checked;
  passwordInput.type = isChecked ? 'text' : 'password';
  checkboxInput.classList.toggle('checked');
}
