// JavaScript

// Function to toggle the navigation menu on mobile
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// Event listener to toggle the menu when the hamburger icon is clicked
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
