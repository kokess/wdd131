// Dynamic footer info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Optional: close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});
