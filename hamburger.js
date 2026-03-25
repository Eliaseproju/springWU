document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');

  if (!hamburger || !nav || !overlay) {
    console.error('Elements not found! Check your IDs.');
    return;
  }

  function toggleMenu() {
    nav.classList.toggle('open');
    overlay.classList.toggle('open');
    hamburger.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) toggleMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && nav.classList.contains('open')) {
      toggleMenu();
    }
  });
});