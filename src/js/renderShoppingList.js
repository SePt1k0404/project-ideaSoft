async function renderCards() {
  const bookListEl = document.querySelector('#bookList');
  const storedBooks = localStorage.getItem('books');
  if (!storedBooks) {
    console.log(error);
    return;
  }
  const books = JSON.parse(storedBooks);

  const amazonLink = books.buy_links[0].url;
  const appleLink = books.buy_links[1].url;
  const barnesLink = books.buy_links[2].url;

  if (!storedBooks) {
    const emptyListMessage = document.createElement('li');
    emptyListMessage.textContent =
      'This page is empty, add some books and proceed to order.';
    bookListEl.insertAdjacentHTML('beforeend', emptyListMessage);
    // const image1x = document.createElement('img');
    // image1x.src = '../images/bg-shopping-list.png';
    // image1x.alt = 'Empty Bookshelf';
    // bookListEl.appendChild(image1x);
    // emptyListMessage.insertAdjacentHTML('beforeend', image1x);
    // const image2x = document.createElement('img');
    // image2x.src = '../images/bg-shopping-list@2x.png';
    // image2x.alt = 'Empty Bookshelf';
    // bookListEl.appendChild(image2x);

    return;
  }
  const bookListHTML = books
    .map(
      book => `<li>
              <div class="book-card">
                 <button type="button" class="book-delete-btn" onclick="OnRemoveClick('${book._id}')">
                    <svg class="book-delete-icon">
                        <use href="/images/delete-book-icon.svg"></use>
                    </svg>
                </button>
                <img src="${book.book_image}" alt="${book.title}" class="book-img">
                <div class="book-text-content">
                  <h3 class="book-title">${book.title}</h3>
                  <p class="book-category">${book.list_name}</p>
                  <p class="book-desc">${book.description}</p>
                  <div class="book-copyright"> <p class="book-author">${book.author}</p>
                  <div class="buy-links">
<ul>
        <li>
              <a href="${amazonLink}" class="book-buy-link">
                <svg class="book-buy-icon">
                  <use href=""></use>
                </svg>
              </a>
        </li>
        <li>
              <a href="${appleLink}" class="book-buy-link">
                <svg class="book-buy-icon">
                  <use href=""></use>
                </svg>
              </a>
        </li>
        <li>
              <a href="${barnesLink}" class="book-buy-link">
                <svg class="book-buy-icon">
                  <use href=""></use>
                </svg>
              </a>
        </li>
    </ul>
                    </div>
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
