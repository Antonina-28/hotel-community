const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navLinks = document.querySelectorAll('.site-list__link');

export function clickMenu() {
  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('main-nav--opened')) {
        mainNav.classList.add('main-nav--closed');
        mainNav.classList.remove('main-nav--opened');
      }
    });
  });
}
