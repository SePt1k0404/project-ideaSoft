const booksWrapperEl = document.querySelector('.top-books-wrapper-js');

booksWrapperEl.addEventListener('click', handlerOnCard);

function handlerOnCard(e) {
  e.preventDefault();
  console.dir(e.target);
}
