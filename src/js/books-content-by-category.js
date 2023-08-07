import getTopBooksArray from './getBookAPI';

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

loadingPopularBook();

function createBookMarkup({
  _id: id,
  title,
  author,
  description,
  book_image: image,
}) {
  return `
    <a class="book-link" href="" aria-label="Book thumbnail">
      <div class="book-thumb">
        <img class="book-image" src="${image}" loading="lazy" data_id=${id} alt="${description}"/>
        <div class="book-image-overlay" data_id=${id} aria-label="${title}">
          <p class="book-image-overlay-text">Quick view</p>
        </div>
      </div>
      <div class="book-item-meta">
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </div>
    </a>
  `;
}
