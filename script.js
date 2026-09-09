const menuButton = document.getElementById('mobile-menu-button');
const sidebar = document.getElementById('photographer-sidebar');
const backdrop = document.getElementById('sidebar-backdrop');
const mobileLogo = document.querySelector('.mobile-logo');
const navLinks = sidebar.querySelectorAll('a');


function setMenuState(isOpen) {
  sidebar.classList.toggle('mobile-open', isOpen);
  backdrop.classList.toggle('visible', isOpen);
  menuButton.classList.toggle('open', isOpen);
  mobileLogo.classList.toggle('hidden', isOpen);
  document.body.classList.toggle('menu-open', isOpen);

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation' : 'Open navigation'
  );
}

setMenuState(false);

menuButton.addEventListener('click', () => {
  const isOpen = sidebar.classList.contains('mobile-open');
  setMenuState(!isOpen);
});

mobileLogo.addEventListener('click', () => {
  const isOpen = sidebar.classList.contains('mobile-open');
  setMenuState(!isOpen);
});

backdrop.addEventListener('click', () => {
  setMenuState(false);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 760) {
      setMenuState(false);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    setMenuState(false);
  }
});
