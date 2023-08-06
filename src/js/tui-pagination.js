import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const storedBooks = localStorage.getItem('books');
const books = JSON.parse(storedBooks);
const container = document.getElementById('pagination');

const options = {
  // below default value of options
  totalItems: books.length,
  itemsPerPage: 3,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const width = window.innerWidth;
if (width >= 768) {
  options.itemsPerPage = 3;
  options.visiblePages = 3;
}
if (width < 768) {
  options.itemsPerPage = 4;
  options.visiblePages = 2;
}

export default function showPageItems(page) {
  const itemsPerPage = options.itemsPerPage;
  const listItem = document.querySelector('.book-list');
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const allListItem = Array.from(listItem.querySelectorAll('.list-item'));
  allListItem.forEach(item => (item.style.display = 'none'));
  const pageItems = allListItem.slice(startIndex, endIndex);
  pageItems.forEach(item => (item.style.display = 'block'));
}

const pagination = new Pagination(container, options);

pagination.on('afterMove', eventData => {
  const currentPage = eventData.page;
  showPageItems(currentPage);
});

export { books, container, options, pagination };
