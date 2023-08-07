import ApiClientAxios from './getBookAPI';
import markupCategoriesList from './categories-markup';
import { refs } from './refs';

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

refs.categoriesListEl.addEventListener('click', onClick);
function onClick() {
  refs.titleCategoriesEl.style.color = '#11111199';
  refs.titleCategoriesEl.style.textTransform = 'lowercase';
  refs.titleCategoriesEl.style.fontWeight = 400;
  refs.titleCategoriesEl.style.fontSize = '16px';
  refs.allTitleSpanEl.style.textTransform = 'none';
}
