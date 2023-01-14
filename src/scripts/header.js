const $navList = document.querySelector('[data-id="nav-list"]');
const $navListToggler = document.querySelector('[data-id="nav-list-toggler"]');

$navListToggler.addEventListener('click', () => {
  $navList.classList.toggle('navigation__list--open');
});

const onClickOutside = (e) => {
  const withinBoundaries =
    e.composedPath().includes($navList) ||
    e.composedPath().includes($navListToggler);

  if (!withinBoundaries) {
    $navList.classList.remove('navigation__list--open');
  }
};

window.addEventListener('click', onClickOutside);
