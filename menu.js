/*  eslint linebreak-style: ["error", "windows"]    */

const hamburgerItem = document.querySelector('.hamburger-item');
const closeItem = document.querySelector('.close-item');
const hamburgerMenu = document.querySelector('.hamburger-menu');

closeItem.addEventListener('click', () => {
  hamburgerMenu.classList.remove('hamburger-menu');
  hamburgerMenu.classList.add('hidden-on-small');
});

hamburgerItem.addEventListener('click', () => {
  hamburgerMenu.classList.remove('hidden-on-small');
  hamburgerMenu.classList.add('hamburger-menu');
});