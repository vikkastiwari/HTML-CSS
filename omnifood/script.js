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

// Smooth Scrolling
// This also doesn't work bydefault in safari so we need to import package for this
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        // scroll to top i.e "#"
        if(href === "#") {
            window.scrollTo({
                top:0,
                behavior: "smooth"
            });
        }
        // scroll to other sections with id
        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:"smooth"});  
        }

        // If link is clicked from mobile nav close drawer
        if(link.classList.contains("main-nav-link")){
            headerEl.classList.toggle("nav-open");
        }
    });
});