(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-mob-open'),
    closeMenuBtn: document.querySelector('.menu-mob__button-close'),
    menu: document.querySelector('.menu-mob'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.menu.classList.toggle('no-scroll');
  }
})();
