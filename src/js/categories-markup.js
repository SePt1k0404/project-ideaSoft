import refs from './refs';
export default function markupCategoriesList(lists) {
  const markup = lists
    .map(({ list_name }) => {
      return `<li class="list-js"><span class="categories-span-js">${list_name} </span> 
        </li>`;
    })
    .join('');
  refs.categoriesListEl.innerHTML = markup;
}
