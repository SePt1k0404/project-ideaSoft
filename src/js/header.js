const themeSwitcher = document.querySelector('.header__wrapper-switcher');
const burgerMenu = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const modal = document.querySelector('.header__modal');
const modalClose = document.querySelector('.header__modal-close');
const switcherBgLigth = document.querySelector('.header__theme-light-switch');
const switcherBgDark = document.querySelector('.header__theme-dark-switch');
const switcherThemeButton = document.querySelector('.header__theme-round-button');

// Function to toggle the dark theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  switcherBgLigth.classList.toggle('ligth-switcher');
  switcherBgDark.classList.toggle('dark-switcher');
  switcherThemeButton.classList.toggle('bias-btn')
  }

// Function to open the modal
function openModal() {
  modal.style.display = 'flex';
  burgerMenu.style.display = 'none';
  modalClose.style.display = 'block';
}



// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  burgerMenu.style.display = 'block';
  modalClose.style.display = 'none';
}

// Add event listeners
themeSwitcher.addEventListener('click', toggleTheme);
burgerMenu.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    modal.style.display = 'none';
    burgerMenu.style.display = 'none';
    modalClose.style.display = 'none';
  });

  window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
    if (!e.matches) return;
        burgerMenu.style.display = 'block';
     });

