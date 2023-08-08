// import ApiClientAxios from './getBookAPI';
import markupCategoriesList from './categories-markup';
import { refs } from './refs';
import {
  createCategoryBooksMarkup,
  createTopBooksTitleMarkup,
} from './createMarkUpTop';
import { booksOnCategory } from './getBookAPI';
import Notiflix from 'notiflix';

let booksCategory = [];

document.addEventListener('DOMContentLoaded', loadingPage);
refs.categorySpan.addEventListener('click', handlerShowCategory);
async function loadingPage() {
  try {
    const responseApi = await fetch(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const categories = await responseApi.json();
    await markupCategoriesList(categories);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Something went wrong! ${error.message}! Try reloading the page!`,
      footer: '<a href="./index.js">Do you want to try again?</a>',
    });
  }
}

refs.categoriesListEl.addEventListener('click', onClick);
function onClick() {
  refs.titleCategoriesEl.classList.add('categories-title-color-after-focus');
  refs.titleCategoriesEl.style.textTransform = 'lowercase';
  refs.titleCategoriesEl.style.fontWeight = 400;
  refs.titleCategoriesEl.style.fontSize = '16px';
  refs.allTitleSpanEl.style.textTransform = 'none';
}

async function handlerShowCategory(e) {
  if (!e.target.classList.contains('categories-span-js')) {
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
}
