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

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
    }else {
      document.body.classList.add("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    // event emits as soon as the 0% of hero section is inside the view port
    threshold: 0,
    // It's the reason we added height 80px in sticky header
    // when sticky header comes into view it hides the element of height 80px 
    // therefore we added -80px margin in the root so that when sticky header kicks in 
    // The content on which it is appearing should be visible below it
    rootMargin: "-80px", 
  }
);
obs.observe(sectionHeroEl);