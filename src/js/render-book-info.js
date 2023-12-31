import { markupCardBookInfo } from './markup-books-info';
// import getBookAPI from './getBookAPI';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { onClickBtn } from './onClickBtn';
import { searchBook } from './addToLocalStorage';
import { refs } from './refs';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

refs.contentWrapper.addEventListener('click', onBookInfoClick);
async function onBookInfoClick(evt) {
  try {
    evt.preventDefault();
    const cardLink = evt.target.closest('.top-book-modal');
    if (!cardLink) {
      return;
    }
    const bookId = cardLink.dataset.id;
    const response = await fetch(
      `https://books-backend.p.goit.global/books/${bookId}`
    );
    const data = await response.json();
    const infoMarkup = markupCardBookInfo(data, searchBook(data));
    const instance = basicLightbox.create(infoMarkup, {
      onShow: () => {
        refs.body.style.paddingRight = '18px';
        disableBodyScroll(document.body);
        window.addEventListener('keydown', onEscButtonClick);
      },
      onClose: () => {
        refs.body.style.paddingRight = '0';
        enableBodyScroll(document.body);
        window.removeEventListener('keydown', onEscButtonClick);
      },
    });
    instance.show();
    const modalInfoClose = document.querySelector('[data-modal-close]');
    modalInfoClose.addEventListener('click', onBookInfoModalCloses);

    function onBookInfoModalCloses() {
      instance.close();
    }

    const actionBtn = document.querySelector('.btn-book-info');

    actionBtn.addEventListener('click', onClickBtn);

    function onEscButtonClick(evt) {
      if (evt.code === 'Escape') {
        instance.close();
      }
    }
  } catch (error) {
    console.log(error);
  }
}
