import ApiClientAxios from './getBookAPI';
import markupCategoriesList from './categories-markup';
import { titleCategoriesEl, categoriesListEl, allTitleSpanEl } from './refs';

document.addEventListener('DOMContentLoaded', loadingPage);
const responseApi = new ApiClientAxios(
  'https://books-backend.p.goit.global/books/category-list'
);

async function loadingPage() {
  try {
    const categories = await responseApi.getDates();
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

categoriesListEl.addEventListener('click', onClick);
function onClick() {
  titleCategoriesEl.style.color = '#11111199';
  titleCategoriesEl.style.textTransform = 'lowercase';
  titleCategoriesEl.style.fontWeight = 400;
  titleCategoriesEl.style.fontSize = '16px';
  allTitleSpanEl.style.textTransform = 'none';
}
