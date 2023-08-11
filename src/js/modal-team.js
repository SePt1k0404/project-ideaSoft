import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { signUp, signIn, onLogOut } from './firebase-auth';
import * as basicLightbox from 'basiclightbox';

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
  }
  if (authMode === 'SignUp') {
    signUp(formData.email, formData.password, formData.name)
      .then(() => {
        caretOut();
        closeModal();
        localStorage.setItem('authState', 'loggedIn');
        localStorage.setItem('authEvent', 'userLoggedIn');
      })
      .catch(error => {
        Notify.failure('Registration failed. Please try again.');
      });
  } else if (authMode === 'SignIn') {
    signIn(formData.email, formData.password)
      .then(() => {
        caretOut();
        closeModal();
        localStorage.setItem('authState', 'loggedIn');
        localStorage.setItem('authEvent', 'userLoggedIn');
      })
      .catch(error => {
        Notify.failure('Login failed. Please check your credentials.');
      });
  }

  evt.currentTarget.reset();
}

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;

refs.signModal.addEventListener('click', onModalOpen);
refs.signHeader.addEventListener('click', onModalOpen);

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

const authorizedInterface = document.getElementById('authorized-interface');

// function showAuthorizedInterface() {
//   authorizedInterface.classList.remove('visually-hidden');
// }

// refs.signUserHeader.addEventListener('click', caretOut);

// window.addEventListener('load', () => {
//   const authState = localStorage.getItem('authState');
//   if (authState === 'loggedIn') {
//     showAuthorizedInterface();
//     caretOut();
//   }

//   window.addEventListener('storage', event => {
//     if (event.key === 'authEvent' && event.newValue === 'userLoggedIn') {
//       caretOut();
//     }
//   });
// });

// refs.logOutHeader.classList.add('visually-hidden');
// refs.signUserHeader.classList.add('visually-hidden');
// refs.signUserModal.classList.add('visually-hidden');

// export function caretOut() {
//   function caretOutOpen() {
//     refs.logOutHeader.classList.remove('visually-hidden');
//     refs.signUserHeader.classList.remove('visually-hidden');
//     refs.signUserModal.classList.remove('visually-hidden');
//   }
//   caretOutOpen();
// }
