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
      footer:
        '<a href="./index.js" aria-label="Home" >Do you want to try again?</a>',
    });
  }
}

refs.categoriesListEl.addEventListener('click', onClick);
function onClick(evt) {
  if (!evt.target.classList.contains('categories-span-js')) {
    return;
  }
  const categoriesLiEl = Object.values(refs.categoriesListEl.children);
  categoriesLiEl.forEach(el =>
    el.children[0].children[0].classList.remove('categories-span-js-focus')
  );
  refs.titleCategoriesEl.classList.add('categories-title-after-focus');
  refs.allTitleSpanEl.classList.add('categories-title-span-after-focus');
  evt.target.classList.add('categories-span-js-focus');
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
