const $navList = document.querySelector('[data-id="nav-list"]');
const $navListToggler = document.querySelector('[data-id="nav-list-toggler"]');

$navListToggler.addEventListener('click', () => {
  $navList.classList.toggle('navigation__list--open');
});
