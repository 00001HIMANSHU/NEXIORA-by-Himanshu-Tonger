"use strict";

/*=========================================
  SELECT ELEMENTS
=========================================*/

const header = document.querySelector("[data-header]");
const navBar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

/*=========================================
  MOBILE NAVIGATION
=========================================*/

const toggleNavbar = () => {
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};

navTogglers.forEach(btn => {
    btn.addEventListener("click", toggleNavbar);
});

/*=========================================
  CLOSE NAV WHEN LINK IS CLICKED
=========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navBar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("nav-active");

    });

});

/*=========================================
  STICKY HEADER
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

});

/*=========================================
  BACK TO TOP BUTTON
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backTopBtn.classList.add("active");

    } else {

        backTopBtn.classList.remove("active");

    }

});

/*=========================================
  SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*=========================================
  ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/*=========================================
  FADE-IN ANIMATION
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

    ".category-card, .course-card, .blog-card, .stats-card, .about-content, .about-banner"

).forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});

/*=========================================
  PRELOADER (Optional)
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*=========================================
  CONSOLE MESSAGE
=========================================*/

console.log("%cEduWeb Loaded Successfully 🚀",
"color:#1363df;font-size:18px;font-weight:bold;");
/*=========================================
  SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
  ".section, .category-card, .course-card, .blog-card"
);

const revealOnScroll = () => {

  revealElements.forEach((element) => {

    const top = element.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      element.classList.add("active");

    }

  });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
/*=========================================
SCROLL TO TOP
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

scrollBtn.style.display="block";

}

else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/*==================================
DARK MODE
==================================*/

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML='<ion-icon name="sunny-outline"></ion-icon>';

}else{

themeBtn.innerHTML='<ion-icon name="moon-outline"></ion-icon>';

}

});
/*==================================
PROGRESS BAR
==================================*/

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progressBar").style.width=scrolled+"%";

});
/*==================================
ANIMATED COUNTER
==================================*/

const counters = document.querySelectorAll("[data-count]");

const runCounter = () => {

  counters.forEach(counter => {

    const target = Number(counter.dataset.count);

    let current = 0;

    const increment = target / 100;

    const update = () => {

      current += increment;

      if(current < target){

        counter.innerText = Math.floor(current);

        requestAnimationFrame(update);

      }else{

        counter.innerText = target;

      }

    };

    update();

  });

};

window.addEventListener("load", runCounter);
/*==================================
LOADER
==================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},600);

},1200);

});
/*==================================
CURSOR
==================================*/

const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});