import { getTopBooksArray } from './getBookAPI';

const renderingContainer = document.querySelector('.top-books-wrapper-js');

let data = [];
export async function loadingPopularBook() {
  try {
    data = await getTopBooksArray();
  } catch (error) {
    // WRITE MISTAKE!!!!!!!!!!!!!!!!! DON`T forget
  }

  // console.log(data);

  const bestsellerListMarkup = `
      <ul class="top-books-list">
        ${data
          .map(
            ({ list_name, books }) => `
              <li class="top-books-category">
          <h3 class="top-books-category-title">${list_name}</h3>
          <ul class="books-list">
            ${books
              .map(
                book => `
              <li class="bestsellers-book-item" data-id="${book._id}">
                ${createBookMarkup(book)}
              </li>
            `
              )
              .join('')}
          </ul>
          <button type="button" class="button see-more-btn" data-id="${list_name}">See more</button>
        </li>
            `
          )
          .join('')}
      </ul>
    `;

  renderingContainer.innerHTML = bestsellerListMarkup;
}

import defaultImg from '../images/book-placeholder-mobile.jpg';
const comingSoon = 'Coming soon';
window.addEventListener('load', loadingPopularBook);

function createBookMarkup({ _id: id, title, author, description, book_image }) {
  if (!book_image) {
    book_image = defaultImg;
  }
  return `
    <a class="book-link" href="" aria-label="Book thumbnail">
      <div class="book-thumb">
        <img class="book-image" src="${book_image}" loading="lazy" data_id=${id} alt="${
    description || comingSoon
  } width="335" height="485"/>
        <div class="book-image-overlay" data_id=${id} aria-label="${title}">
          
        </div>
      </div>
      <div class="book-item-meta">
        <h3 class="book-title-meta">${title}</h3>
        <p class="book-author-meta">${author}</p>
      </div>
    </a>
  `;
}

/* <p class="book-image-overlay-text">Quick view</p>;  */
