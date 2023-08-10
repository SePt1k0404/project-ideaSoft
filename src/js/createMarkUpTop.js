import defaultImg from '../images/book-placeholder-mobile.jpg';
const comingSoon = 'Coming soon';

//   MarKup List Books
export function createListBooksMarkup(topBooks) {
  return `
      <ul class="top-books-list">
        ${topBooks
          .map(
            ({ list_name, books }) => `
              <li class="top-books-category">
          <h3 class="top-books-category-title">${list_name}</h3>
          <ul class="books-list">
            ${books
              .map(
                book => `
              <li class="top-book-item top-book-modal" data-id="${book._id}">
                ${createTopBookMarkup(book)}
              </li>
            `
              )
              .join('')}
          </ul>
          <button aria-label="See more" type="button" class="button top-book-button" data-name="${list_name}">See more</button>
        </li>
            `
          )
          .join('')}
      </ul>
    `;
}

// Markup H2 - Title
export function createTopBooksTitleMarkup(titleName) {
  const words = titleName.split(' ');
  const firstWord = words.slice(0, -1).join(' ');
  const lastWord = words[words.length - 1];
  return `${firstWord} <span class="top-books-title-span">${lastWord}</span>`;
}

// Markup BooksOnCategory
export function createCategoryBooksMarkup(data) {
  return `
      <ul class="books-list">
        ${data
          .map(element => {
            return `
              <li class="top-book-modal" data-id="${element._id}">
              ${createTopBookMarkup(element)}
            </li>
          `;
          })
          .join('')}
      </ul>
    `;
}

/* <li class="top-book-item" data-id="${element._id}"></li>; */

// Markup body UL(main markup)
function createTopBookMarkup({
  _id: id,
  title,
  author,
  description,
  book_image,
}) {
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

/* <p class="book-image-overlay-text">Quick view</p>; */
