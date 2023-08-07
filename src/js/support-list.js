import { refs } from './refs';

window.addEventListener('load', onPageLoad);
function onPageLoad() {
  const width = window.innerWidth;
  const currentPage = window.location.pathname;
  const indexPages = ['/index.html'];
  if (!indexPages.includes(currentPage) && width >= 1440) {
    refs.supportContainer.classList.remove('visually-hidden');
  } else if (!indexPages.includes(currentPage) && width < 1440) {
    refs.supportContainer.classList.add('visually-hidden');
  } else {
    refs.supportContainer.classList.remove('visually-hidden');
  }
  if (width >= 768) {
    const supportLi = refs.supportList.children;
    supportLi[3].classList.remove('last-of-mobile');
    supportLi[4].classList.remove('visually-hidden');
    supportLi[5].classList.remove('visually-hidden');
    supportLi[5].classList.add('last-of-mobile');
  }
}
