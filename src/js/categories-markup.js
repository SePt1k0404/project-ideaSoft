import { refs } from './refs';
export default function markupCategoriesList(lists) {
  const markup = lists
    .map(({ list_name }) => {
      return `<li class="list-js"><span><a data-name="${list_name}" class="categories-span-js" href="#">${list_name}</a></span>  </li>`;
    })
    .join('');
  refs.categoriesListEl.innerHTML = markup;
}
