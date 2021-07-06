// Intro Slider
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".title-text", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".home-btn", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(
  ".social-item",
  { opacity: 0 },
  { opacity: 1, duration: 1, stagger: 0.25 },
  "-=1"
);
tl.fromTo("#home-right", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2.5");

// aos Initialisation
AOS.init();

// Rellax Initialisation
var rellax = new Rellax(".rellax", {
  breakpoints: [576, 768, 1201],
});
// Full Screen Nav

$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});

// Nav Bar BreakPoint

$(document).ready(function () {
  const wid = window.innerWidth;
  //   console.log(wid);

  if (wid <= 768) {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo("#big-nav", { y: "0%" }, { y: "-125%", duration: 0.5 });
    tl.fromTo("#small-nav", { y: "-125%" }, { y: "0%", duration: 0.5 });
  } else {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo("#small-nav", { y: "0%" }, { y: "-125%", duration: 0.5 });
    tl.fromTo("#big-nav", { y: "-125%" }, { y: "0%", duration: 0.5 });
  }
});

window.addEventListener("resize", function () {
  const wid = window.innerWidth;
  //   console.log(wid);

  if (wid <= 768) {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo("#big-nav", { y: "0%" }, { y: "-125%", duration: 0.5 });
    tl.fromTo("#small-nav", { y: "-125%" }, { y: "0%", duration: 0.5 });
  } else {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo("#small-nav", { y: "0%" }, { y: "-125%", duration: 0.5 });
    tl.fromTo("#big-nav", { y: "-125%" }, { y: "0%", duration: 0.5 });
  }
});

// Intersection Observer
const bigNav = document.querySelector("#big-nav");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled > 1) {
    bigNav.classList.add("nav-active");
  } else {
    bigNav.classList.remove("nav-active");
  }
});
