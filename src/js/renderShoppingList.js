function renderCards() {
  const bookListEl = document.querySelector('#bookList');
  const storedBooks = localStorage.getItem('books');
  const books = JSON.parse(storedBooks);
  console.log(storedBooks);
  if (!books) {
    const emptyListMessage = document.createElement('li');
    emptyListMessage.textContent =
      'This page is empty, add some books and proceed to order.';
    bookListEl.insertAdjacentHTML('beforeend', emptyListMessage.innerHTML);
    bookListEl.insertAdjacentHTML(
      'beforeend',
      `
        <li>
          <picture>
                <source srcset="./images/bg-shopping-list.png 1x, ./images/bg-shopping-list@2x.png 2x"
                 type="image/png" />
                <img src="./images/bg-shopping-list@2x.png" alt=" Empty Bookshelf" />
            </picture>
        </li>
        `
    );
    return;
  }

  const bookListHTML = books
    .map(book => {
      console.log(book.buy_links);
      const amazonLink = book.buy_links[0].url;
      const appleLink = book.buy_links[1].url;
      const barnesLink = book.buy_links[2].url;
      return `<li>
              <div class="book-card">
                 <button type="button" class="book-delete-btn" onclick="OnRemoveClick('${book._id}')">
                    <svg class="book-delete-icon">
                        <use href="./images/sprite.svg#icon-trash"></use>
                    </svg>
                </button>
                <img src="${book.book_image}" alt="${book.title}" class="book-img">
                <div class="book-text-content">
                  <h3 class="book-title">${book.title}</h3>
                  <p class="book-category">${book.list_name}</p>
                  <p class="book-desc">${book.description}</p>
                  <div class="book-copyright">
                    <p class="book-author">${book.author}</p>
                        <div >
                        <ul class="buy-links">
                        <li>
                            <a href="${amazonLink}" class="book-buy-link">
                                <svg class="book-buy-icon">
                                    <use href="/src/images/sprite.svg#icon-amazon"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="${appleLink}" class="book-buy-link">
                                <svg class="book-buy-icon">
                                    <use href="/src/images/sprite.svg#icon-amazon"></use>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="${barnesLink}" class="book-buy-link">
                                <svg class="book-buy-icon">
                                    <use href="/src/images/sprite.svg#icon-amazon"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
              </div>
              </li>
            `;
    })
    .join('');
  bookListEl.innerHTML = bookListHTML;
}

export { renderCards };
