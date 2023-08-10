import emptyImg1x from '../images/bg-shopping-list.png';
import renderCards from './shoppingListMarkup.js';
import Notiflix from 'notiflix';

window.addEventListener('load', () => {
  try {
    renderCards();
  } catch (error) {
    console.log(error.message);
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  }
});
