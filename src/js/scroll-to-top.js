import { refs } from './refs';
import throttle from 'lodash.throttle';

window.addEventListener('scroll', throttle(onScroll, 300));
refs.toTopButton.addEventListener('click', onScrollBtnClick);

function onScrollBtnClick() {
  refs.header.scrollIntoView({ behavior: 'smooth' });
}

function onScroll() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    refs.toTopButton.classList.remove('scroll-up__btn-hidden');
  } else {
    refs.toTopButton.classList.add('scroll-up__btn-hidden');
  }
}
