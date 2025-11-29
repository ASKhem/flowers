const hamburgerMenu = document.querySelector('.hamburguer-menu');

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        const navbar = document.querySelector('.mobile-navbar');
        if (navbar) {
            navbar.classList.toggle('active');
        }
    });
}
