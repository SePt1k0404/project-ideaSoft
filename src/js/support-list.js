import { refs } from './refs';

window.addEventListener('load', onPageLoad);
refs.supportBtn.addEventListener('click', onClickSupportBtn);
let supportLi = [];

function onClickSupportBtn(evt) {
  for (let i = 0; i < supportLi.length; i += 1) {
    supportLi[i].classList.toggle('visually-hidden');
  }
  supportLi[5].classList.toggle('last-of-mobile');
  supportLi[8].classList.toggle('last-of-mobile');
  refs.supportBtn.classList.toggle('support-button-rotate');
}

function onPageLoad() {
  const width = window.innerWidth;
  const currentPage = window.location.pathname;
  const indexPages = ['/shopping-list.html'];
  if (indexPages.includes(currentPage) && width >= 1440) {
    console.log('!indexPages.includes(currentPage) && width >= 1440');
    refs.supportContainer.classList.remove('visually-hidden');
  } else if (indexPages.includes(currentPage) && width < 1440) {
    console.log('!indexPages.includes(currentPage) && width < 1440');
    refs.supportContainer.classList.add('visually-hidden');
  } else {
    console.log('else');
    refs.supportContainer.classList.remove('visually-hidden');
  }
  if (width >= 768) {
    supportLi = refs.supportList.children;
    supportLi[3].classList.remove('last-of-mobile');
    supportLi[4].classList.remove('visually-hidden');
    supportLi[5].classList.remove('visually-hidden');
    supportLi[5].classList.add('last-of-mobile');
  }
}
