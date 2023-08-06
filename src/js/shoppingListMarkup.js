import emptyImg1x from '../images/bg-shopping-list.png';
import emptyImg2x from '../images/bg-shopping-list@2x.png';
import amazon1x from '../images/trading-platforms/amazon.png';
import amazon2x from '../images/trading-platforms/amazon@2x.png';
import apple1x from '../images/trading-platforms/apple-books.png';
import apple2x from '../images/trading-platforms/apple-books@2x.png';
import barnes1x from '../images/trading-platforms/bookshop.png';
import barnes2x from '../images/trading-platforms/bookshop@2x.png';
import sprite from '../images/sprite.svg';
import defaultImg from '../images/book-placeholder-mobile.jpg';
import refs from './refs';
// import { container, options, pagination } from './tui-pagination';
import showPageItems from './tui-pagination';
// import { onRemoveClick } from './onRemoveClick';

export default function renderCards() {
  const bookListEl = document.querySelector('#bookList');
  const storedBooks = localStorage.getItem('books');
  const books = JSON.parse(storedBooks);
  if (!books || !books.length) {
    const emptyListMessage = document.createElement('li');
    emptyListMessage.textContent =
      'This page is empty, add some books and proceed to order.';
    bookListEl.insertAdjacentHTML('beforeend', emptyListMessage.innerHTML);
    bookListEl.insertAdjacentHTML(
      'beforeend',
      `
        <li>
          <picture>
                <source srcset="${emptyImg1x} 1x, ${emptyImg2x} 2x"
                 type="image/png" />
                <img src="${emptyImg1x}" alt=" Empty Bookshelf" />
            </picture>
        </li>
        `
    );
    return;
  }

  const bookListHTML = books
    .map(book => {
      const amazonLink = book.buy_links[0].url;
      const appleLink = book.buy_links[1].url;
      const barnesLink = book.buy_links[2].url;
      let bookCover = book.book_image;
      if (!bookCover) {
        bookCover = defaultImg;
      }
      return `<li class="wrap-about-book-remove list-item" data-title="${book.title}" data-author="${book.author}">
              <div class="book-card">
                 <button type="button" class="book-delete-btn">
                    <svg class="book-delete-icon">
                        <use class='use-js' href="${sprite}#icon-trash"></use>
                    </svg>
                </button>
                    <img src="${bookCover}" alt="${book.title}" class="book-img"> 
                <div class="book-text-content">
                  <h3 class="book-title">${book.title}</h3>
                  <p class="book-category">${book.list_name}</p>
                  <p class="book-desc">${book.description}</p>
                  <div class="book-copyright">
                    <p class="book-author">${book.author}</p>
                        
                        <ul class="buy-links">
                        <li class="buy-li buy-amazon">
                            <a href="${amazonLink}" class="book-buy-link amazon-icon" target="_blank">            
                                <picture class="amazon-picture">
                                    <source srcset="${amazon1x} 1x, ${amazon2x} 2x" type="image/png" />
                                    <img src="${amazon1x}" alt=" Empty Bookshelf" class="amazon-book-buy-icon" />
                                </picture> 
                            </a>
                        </li>
                        <li class="buy-li">
                            <a href="${appleLink}" class="book-buy-link" target="_blank">
                                <picture class="picture">
                                    <source srcset="${apple1x} 1x, ${apple2x} 2x" type="image/png" />
                                    <img src="${apple1x}" alt=" Empty Bookshelf" class="book-buy-icon" />
                                </picture> 
                            </a>
                        </li>
                        <li class="buy-li">
                            <a href="${barnesLink}" class="book-buy-link" target="_blank">
                                <picture class="picture">
                                    <source srcset="${barnes1x} 1x, ${barnes2x} 2x" type="image/png" />
                                    <img src="${barnes1x}" alt=" Empty Bookshelf" class="book-buy-icon" />
                                </picture> 
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
              </div>
              </li>
            `;
    })
    .join('');
  bookListEl.innerHTML = bookListHTML;
  showPageItems(1);
}

// export { renderCards };
