import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { signUp, signIn, onLogOut } from './firebase-auth';

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
    // Notify.failure('Please fill in all the fields!');
    return;
  }
  if (authMode === 'SignUp') {
    formData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  } else if (authMode === 'SignIn') {
    formData = {
      email: email.value,
      password: password.value,
    };
  }
  evt.currentTarget.reset();
  if (authMode === 'SignUp') {
    signUp(formData.email, formData.password, formData.name);
  } else if (authMode === 'SignIn') {
    signIn(formData.email, formData.password);
  }
}

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;


export function onModalOpen() {
  disableBodyScroll(document.body);
  refs.authContainer.classList.remove('visually-hidden');
  refs.authFormClose.addEventListener('click', closeModal);
}

export function closeModal() {
  refs.authContainer.classList.add('visually-hidden');
  const enableBodyScroll = bodyScrollLock.enableBodyScroll;
  enableBodyScroll(document.body);
}

