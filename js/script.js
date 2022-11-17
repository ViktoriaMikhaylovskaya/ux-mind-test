const navMain = document.querySelector('.aside-nav');
const navToggle = document.querySelector('.aside-nav__toggle');

navMain.classList.remove('aside-nav--nojs');
navMain.classList.remove('aside-nav--opened');
navMain.classList.add('aside-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('aside-nav--closed')) {
    navMain.classList.remove('aside-nav--closed');
    navMain.classList.add('aside-nav--opened');
  } else {
    navMain.classList.add('aside-nav--closed');
    navMain.classList.remove('aside-nav--opened');
  }
});