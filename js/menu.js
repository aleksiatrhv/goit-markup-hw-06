// Mobile menu toggle functionality
const menuButton = document.querySelector('[data-menu-button]');
const menuClose = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-menu]');
const menuLinks = document.querySelectorAll('.mobile-menu-link');

// Toggle menu open/close
menuButton?.addEventListener('click', () => {
    menu?.classList.add('is-open');
});

menuClose?.addEventListener('click', () => {
    menu?.classList.remove('is-open');
});

// Close menu when clicking on a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu?.classList.remove('is-open');
    });
});

// Close menu when pressing Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('is-open')) {
        menu.classList.remove('is-open');
    }
});
