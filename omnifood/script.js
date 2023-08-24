// Set Current Year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Toggle Mobile Nav
const navBtnEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
navBtnEl.addEventListener('click',() => {
    headerEl.classList.toggle('nav-open');
});