/*  eslint linebreak-style: ["error", "windows"]    */
/*  eslint linebreak-style: ["error", "unix"]    */

const hamburgerItem = document.querySelector('.hamburger-item');
const closeItem = document.querySelector('.close-item');
const hamburgerMenu = document.querySelector('.navigation');
const menuItem = document.querySelectorAll('.menu-item');

closeItem.addEventListener('click', () => {
  hamburgerMenu.classList.remove('hamburger-menu');
  hamburgerMenu.classList.add('hidden-on-small');
});

hamburgerItem.addEventListener('click', () => {
  hamburgerMenu.classList.remove('hidden-on-small');
  hamburgerMenu.classList.add('hamburger-menu');
});

menuItem.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', () => {
      hamburgerMenu.classList.remove('hamburger-menu');
      hamburgerMenu.classList.add('hidden-on-small');
    });
  },
);
