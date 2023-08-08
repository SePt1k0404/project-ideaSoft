import {refs} from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// import { writeUsersData, getUserData } from './firebase-auth';
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
  console.log(authMode);
  if (!authData.some(elem => elem === '' || !elem) && authMode === 'Signup') {
    Notify.failure('Please fill in all the fields!');
    console.log('error');
    return;
  }
   if (authMode === 'SignUp') {
    formData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  } else if(authMode === 'SignIn') {
    formData = {
      email: email.value,
      password: password.value,
    };
  };
  evt.currentTarget.reset();
    if(authMode === 'SignUp'){
      signUp(formData.email, formData.password, formData.name);
  } else if(authMode === 'SignIn'){
      signIn(formData.email, formData.password);
    }
  //  catch (error) {
  //   // if(error.code.match(/password/)){
  //   //   Notify.failure("Enter correct password!")
  //   // }
  //   // else if(error.code.match(/found/)){
  //   //   Notify.failure('User not found!')
  //   // }
  //     Notify.failure(`${error}`);
  // }
}

refs.logOut.addEventListener('click', onLogOut)

