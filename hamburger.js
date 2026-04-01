const HamburgerMenu = document.querySelector('.hamburger-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

HamburgerMenu.addEventListener('click', () => {
    HamburgerMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    
})