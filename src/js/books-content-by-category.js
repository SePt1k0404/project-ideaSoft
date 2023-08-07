import { getTopBooks, booksOnCategory } from './getBookAPI';
import {
  createListBooksMarkup,
  createTopBooksTitleMarkup,
  createCategoryBooksMarkup,
} from './createMarkUpTop';
import Notiflix from 'notiflix';
import { refs } from './refs';

let topBooks = [];
let booksCategory = [];

window.addEventListener('DOMContentLoaded', loadingTopBook);
refs.contentWrapper.addEventListener('click', handlerShowMoreBtn);

// Main Page LIST TOP BOOKS
async function loadingTopBook() {
  try {
    topBooks = await getTopBooks();
  } catch (error) {
    Notiflix.Notify.failure(
      'Ups......... Something went wrong. Please try again'
    );
  }

  refs.contentWrapper.innerHTML = createListBooksMarkup(topBooks);
}

// Main Page LIST BOOKS ON CATEGORY
async function handlerShowMoreBtn(e) {
  if (!e.target.classList.contains('top-book-button')) {
    return;
  }

  const nameCategory = e.target.dataset.name;

  try {
    booksCategory = await booksOnCategory(nameCategory);
  } catch (error) {
    Notiflix.Notify.failure(
      'Ups......... Something went wrong. Please try again'
    );
  }

  refs.topBooksTitle.innerHTML = createTopBooksTitleMarkup(nameCategory);
  refs.contentWrapper.innerHTML = createCategoryBooksMarkup(booksCategory);
  refs.header.scrollIntoView({ behavior: 'smooth' });
}
