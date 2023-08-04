const themeSwitcher = document.querySelector('.header__theme-switcher');
const burgerMenu = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const modal = document.querySelector('.header__modal');
const modalClose = document.querySelector('.header__modal-close');

// Function to toggle the dark theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Function to open the modal
function openModal() {
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Add event listeners
themeSwitcher.addEventListener('click', toggleTheme);
burgerMenu.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
