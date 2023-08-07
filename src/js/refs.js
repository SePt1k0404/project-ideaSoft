const refs = {
  //   books-content-by-category.js, render-book-info.js
  switcherHtml: document.querySelector('html'),
  themeSwitcher: document.querySelector('.header__wrapper-switcher'),
  burgerMenu: document.querySelector('.header__burger'),
  headerNav: document.querySelector('.header__nav'),
  modal: document.querySelector('.header__modal'),
  modalClose: document.querySelector('.header__modal-close'),
  switcherBgLight: document.querySelector('.header__theme-light-switch'),
  switcherBgDark: document.querySelector('.header__theme-dark-switch'),
  switcherThemeButton: document.querySelector('.header__theme-round-button'),
  switcherThemeButton: document.querySelector('.header__theme-round-button'),
  supportList: document.querySelector('.support-list'),
  supportContainer: document.querySelector('.support-container'),
  body: document.querySelector('body'),
  contentWrapper: document.querySelector('.top-books-wrapper-js'),
  backdropLoader: document.querySelector('.loader-backdrop'),
  categoriesListEl: document.querySelector('.categories-list-js'),
  titleCategoriesEl: document.querySelector('.title-categories-js'),
  allTitleSpanEl: document.querySelector('.allTitleSpan'),
  //   onRemoveClick.js
  shoppingListWrapper: document.querySelector('.shopping-list-wrap'),
  topBookEl: document.querySelector('.top-books-wrapper-js'),
};

// console.log(refs.shoppingListWrapper);
export { refs };
