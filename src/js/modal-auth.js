import refs from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let authMode = 'SignUp';
let formData = {};

refs.signUpRef.addEventListener('click', onSignUp);
refs.signInRef.addEventListener('click', onSignIn);
function onSignUp(evt) {
  evt.preventDefault();
  refs.signUpRef.classList.add('active');
  refs.signInRef.classList.remove('active');
  refs.authSubmitBtn.textContent = 'sign up';
  refs.nameInput.hidden = false;
  authMode = 'SignUp';
}
function onSignIn(evt) {
  evt.preventDefault();
  refs.signUpRef.classList.remove('active');
  refs.signInRef.classList.add('active');
  refs.authSubmitBtn.textContent = 'sign in';
  refs.nameInput.hidden = true;
  authMode = 'SignIn';
}
const {
  elements: { email, name, password },
} = refs.authForm;

refs.authForm.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
  const authData = [...refs.authForm.elements];
  evt.preventDefault();
  if (!authData.some(elem => elem === '' || !elem) && authMode === 'Signup') {
    Notify.failure('Please fill in all the fields!');
    return;
  } else if (authMode === 'Signup') {
    formData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  } else {
    formData = {
      email: email.value,
      password: password.value,
    };
  }

  evt.currentTarget.reset();
  console.log(formData);
}
