import {
  addToLocalStorage,
  removeFromLocaleStorage,
} from './addToLocalStorage';
import { parseDiv } from './parseDiv';
import { auth, userShoppingListToDb, removeFromDb, getUserData } from './firebase-auth';
import {getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import {getDatabase, ref, onValue, set} from "firebase/database";
import { Notify } from 'notiflix';

let dataToDb = [];
export function onClickBtn(evt) {
  // if (!auth.currentUser) {
  //   return Notify.info(
  //     'Please Sign Up and/or Sign In to be able to add books to your shopping list'
  //   );
  // } else {
  //   const notification = document.querySelector('.book-infoBtn-explanation');
  //   if (evt.target.classList.contains('book_add__to_list')) {
  //     addToLocalStorage(parseDiv(evt.target.closest('div').children[1]));
  //     evt.target.classList.add('book_remove__from_list');
  //     evt.target.classList.remove('book_add__to_list');
  //     evt.target.innerText = 'REMOVE FROM THE SHOPPING LIST';
  //     notification.classList.remove('visually-hidden');
  //   } else if (evt.target.classList.contains('book_remove__from_list')) {
  //     removeFromLocaleStorage(parseDiv(evt.target.closest('div').children[1]));
  //     evt.target.classList.add('book_add__to_list');
  //     evt.target.classList.remove('book_remove__from_list');
  //     evt.target.innerText = 'ADD TO THE SHOPPING LIST';
  //     notification.classList.add('visually-hidden');
  //   }
  // }
  const notification = document.querySelector('.book-infoBtn-explanation');
  if (evt.target.classList.contains('book_add__to_list')) {
    addToLocalStorage(parseDiv(evt.target.closest('div').children[1]));
    auth.onAuthStateChanged(user => {
      if(user) {
        userShoppingListToDb(user.uid, parseDiv(evt.target.closest('div').children[1]));
      }
    });
    evt.target.classList.add('book_remove__from_list');
    evt.target.classList.remove('book_add__to_list');
    evt.target.innerText = 'REMOVE FROM THE SHOPPING LIST';
    notification.classList.remove('visually-hidden');
  } else if (evt.target.classList.contains('book_remove__from_list')) {
    removeFromLocaleStorage(parseDiv(evt.target.closest('div').children[1]));
    auth.onAuthStateChanged(user => {
      if(user) {
        removeFromDb(user.uid, parseDiv(evt.target.closest('div').children[1]));
      }
    });
    evt.target.classList.add('book_add__to_list');
    evt.target.classList.remove('book_remove__from_list');
    evt.target.innerText = 'ADD TO THE SHOPPING LIST';
    notification.classList.add('visually-hidden');
  }
}
