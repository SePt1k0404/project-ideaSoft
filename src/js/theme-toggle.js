import { refs } from './refs';
const THEME_KEY = 'theme';

window.addEventListener('load', checkTheme);

function checkTheme() {
  if (!localStorage.getItem(THEME_KEY)) {
    localStorage.setItem(THEME_KEY, 'light');
  } else {
    const themeValue = localStorage.getItem(THEME_KEY);
    if (themeValue === 'dark') {
      refs.switcherBgLight.classList.toggle('light-switcher');
      refs.switcherBgDark.classList.toggle('dark-switcher');
      refs.switcherThemeButton.classList.toggle('bias-btn');
      refs.switcherHtml.dataset.theme = 'dark';
    } else {
      refs.switcherHtml.dataset.theme = 'light';
    }
  }
}

export { THEME_KEY, checkTheme };
