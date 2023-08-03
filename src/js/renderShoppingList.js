async function renderCards() {
  const bookListEl = document.querySelector('#bookList');
  const storedBooks = localStorage.getItem('books');
  if (!storedBooks) {
    console.log(error);
    return;
  }
  const books = JSON.parse(storedBooks);
  if (books.length === 0) {
    const emptyListMessage = document.createElement('li');
    emptyListMessage.textContent =
      'This page is empty, add some books and proceed to order.';
    bookListEl.appendChild(emptyListMessage);
  }
  const bookListHTML = books
    .map(
      book => `<li>
              <div class="book-card">
                 <button type="button" class="book-delete-btn" onclick="OnRemoveClick('${
                   book._id
                 }')">
                    <svg class="book-delete-icon">
                        <use href="/images/delete-book-icon.svg"></use>
                    </svg>
                </button>
                <img src="${book.book_image}" alt="${
        book.title
      }" class="book-img">
                <div class="book-text-content">
                  <h3 class="book-title">${book.title}</h3>
                  <p class="book-category">${book.list_name}</p>
                  <p class="book-desc">${book.description}</p>
                  <div class="book-copyright"> <p class="book-author">${
                    book.author
                  }</p>
                  <div class="buy-links">
                    ${book.buy_links
                      .map(
                        link => `
                          <a href="${link.url}" target="_blank">${link.name}</a>
                        `
                      )
                      .join('')}</div>
                </div>
                </div>
              </div>
              </li>
            `
    )
    .join('');
  bookListEl.innerHTML = bookListHTML;
}

export { renderCards };
