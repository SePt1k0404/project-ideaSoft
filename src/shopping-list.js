// import './js/theme-toggle';
// import './js/header';
// import './js/render-support';
// import './js/firebase-auth';
// import './js/modal-auth';
// import './js/onRemoveClick';
// import './js/tui-pagination';
// import './js/modal-team';
// import './js/footer-toggle.js';
// import './js/window-resize';

const booksData = [
  {
    list_name: 'Combined Print and E-Book Nonfiction',
    _id: '642fd89ac8cf5ee957f12361',
    title: 'WISH',
    author: "Barbara O'Connor",
    description:
      'Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга про...',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
    ],
  },
  {
    list_name: 'Combined Print and E-Book Nonfiction',
    _id: '642fd89ac8cf5ee957f12361',
    title:
      'WISH 2 Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara',
    author: "Barbara O'Connor 2",
    description: 'Це дуже цікава книга про...2',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
    ],
  },
];

localStorage.setItem('books', JSON.stringify(booksData));

document.addEventListener('DOMContentLoaded', renderCards);

function renderCards() {
  const bookListElement = document.getElementById('bookList');
  const storedBooks = localStorage.getItem('books');

  if (storedBooks) {
    const books = JSON.parse(storedBooks);

    if (books.length > 0) {
      const bookListHTML = books
        .map(
          book => `
                        <div class="book-card">
                            <img src="${book.book_image}" alt="${
            book.title
          }" class="book-img">
                            <div class="book-text-content">
                                <h3 class="book-title">${book.title}</h3>
                                <p class="book-category">${book.list_name}</p>
                                <p class="book-desc">${book.description}</p>
                                <p class="book-author">${book.author}</p>
                                <div class="buy-links">
                                    ${book.buy_links
                                      .map(
                                        link => `
                                        <a href="${link.url}" target="_blank">${link.name}</a>
                                    `
                                      )
                                      .join('')}
                                </div>
                            </div>
                        </div>
                    `
        )
        .join('');

      bookListElement.innerHTML = bookListHTML;
    } else {
      const emptyListMessage = document.createElement('li');
      emptyListMessage.textContent = 'Список книг порожній.';
      bookListElement.appendChild(emptyListMessage);
    }
  } else {
    const emptyListMessage = document.createElement('li');
    emptyListMessage.textContent = 'Список книг порожній.';
    bookListElement.appendChild(emptyListMessage);
  }
}
