import { refs } from './refs';

window.addEventListener('load', onPageLoad);

function onPageLoad() {
  const width = window.innerWidth;
  if (width >= 768) {
    const supportLi = refs.supportList.children;
    supportLi[3].classList.remove('last-of-mobile');
    supportLi[4].classList.remove('visually-hidden');
    supportLi[5].classList.remove('visually-hidden');
    supportLi[5].classList.add('last-of-mobile');
  }
}
