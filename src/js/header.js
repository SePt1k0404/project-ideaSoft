import { THEME_KEY } from './theme-toggle';
import { refs } from './refs';
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

// Function to toggle the dark theme
// function toggleTheme() {
//   document.body.classList.toggle('dark-theme');
//   refs.switcherBgLight.classList.toggle('light-switcher');
//   refs.switcherBgDark.classList.toggle('dark-switcher');
//   refs.switcherThemeButton.classList.toggle('bias-btn');
//   if (refs.switcherBgLight.classList.contains('light-switcher')) {
//     localStorage.setItem(THEME_KEY, 'dark');
//     refs.switcherHtml.dataset.theme = 'dark';
//   } else {
//     localStorage.setItem(THEME_KEY, 'light');
//     refs.switcherHtml.dataset.theme = 'light';
//   }
// }

function toggleTheme() {
  const isDarkTheme = document.body.classList.toggle('dark-theme');
  refs.switcherBgLight.classList.toggle('light-switcher');
  refs.switcherBgDark.classList.toggle('dark-switcher');
  refs.switcherThemeButton.classList.toggle('bias-btn');

  if (isDarkTheme) {
    localStorage.setItem(THEME_KEY, 'dark');
    refs.switcherHtml.dataset.theme = 'dark';
  } else {
    localStorage.setItem(THEME_KEY, 'light');
    refs.switcherHtml.dataset.theme = 'light';
  }
}

// Function to open the modal
function openModal() {
  // disableBodyScroll(document.body);
  document.body.classList.add('no-scroll');
  refs.modal.style.display = 'flex';
  refs.burgerMenu.style.display = 'none';
  refs.modalClose.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  // enableBodyScroll(document.body);
  document.body.classList.remove('no-scroll');
  refs.modal.style.display = 'none';
  refs.burgerMenu.style.display = 'block';
  refs.modalClose.style.display = 'none';
}

// Add event listeners
refs.themeSwitcher.addEventListener('click', toggleTheme);
refs.burgerMenu.addEventListener('click', openModal);
refs.modalClose.addEventListener('click', closeModal);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.modal.style.display = 'none';
  refs.burgerMenu.style.display = 'none';
  refs.modalClose.style.display = 'none';
});

window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.burgerMenu.style.display = 'block';
});
