(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-modal-open]'),
    closeMenuBtn: document.querySelector('[data-modal-close]'),
    menu: document.querySelector('[data-modal]'),
    mobileMenuLinks: document.querySelectorAll('.link-nav-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }

  function closeMobileMenu() {
    refs.menu.classList.add('is-hidden');
  }

  refs.mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
})();
