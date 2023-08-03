const categoriesListEl = document.querySelector('.categories-list');

//Функція запиту
function serverCategoriesList() {
  return fetch('https://books-backend.p.goit.global/books/category-list').then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
//ВІДМАЛЬОВКА
function markupCategoriesList(lists) {
  const markup = lists

    .map(({ list_name }) => {
      return `<li class="list-item">${list_name}</li>`;
    })
    .join('');
  categoriesListEl.innerHTML = markup;
}
document.addEventListener('DOMContentLoaded', markupCategoriesList);

function fetchCategoriesList() {
  serverCategoriesList();
  markupCategoriesList();
}
