const btnMobileNav = document.querySelector('.btn-mobile-nav');
const mainNav = document.querySelector('.main-nav');

btnMobileNav.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});