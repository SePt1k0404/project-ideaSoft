import axios from 'axios';
import Notiflix from 'notiflix';
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
import { renderCards } from './js/renderShoppingList';

const booksData = [
  {
    list_name: 'Combined Print and E-Book Nonfiction',
    _id: '642fd89ac8cf5ee957f12361',
    title: 'WISH',
    author: "Barbara O'Connor",
    description:
      'Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
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

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await renderCards();
  } catch (error) {
    console.error('Error rendering cards:', error);
  }
});
