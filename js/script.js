// Intro Slider
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to("#logo path", { strokeDashoffset: 0, duration: 1, stagger: 0.25 });
// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.to(".logo-anim", { y: "-100%", duration: 1 }, "-=1");
tl.from("nav", { opacity: 0, duration: 1 });
tl.from(".title-text", { opacity: 0, y: 100, duration: 1 });
tl.from(".home-btn", { opacity: 0, y: 100, duration: 1 });
tl.from(
  ".social-item",
  { opacity: 0, y: 100, duration: 1, stagger: 0.25 },
  "-=1"
);
tl.from("#home-right", { opacity: 0, x: 100, duration: 2 }, "-=2.5");

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
const smallNav = document.querySelector("#small-nav");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled > 1) {
    bigNav.classList.add("nav-active");
    smallNav.classList.add("small-nav-active");
  } else {
    bigNav.classList.remove("nav-active");
    smallNav.classList.remove("small-nav-active");
  }
});

// Inner HTML Updates
let headers = document.querySelectorAll(".header");

headers.forEach((header) => {
  header.innerHTML = header.innerText
    .split("")
    .map(function (char) {
      if (char == " ") {
        char = "&nbsp;";
      }
      return "<span>" + char + "</span>";
    })
    .join("");
});

// Scroll Trigger

// let aboutContent = document.querySelector("#about-right p");

// aboutContent.innerHTML = aboutContent.innerText
//   .split(" ")
//   .map(function (char) {
//     if (char == " ") {
//       char = "&nbsp;";
//     }
//     return "<span>" + char + "</span>";
//   })
//   .join("&nbsp;");

gsap.registerPlugin(ScrollTrigger);

let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-right",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});

aboutTl
  .from("#about-right", {
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
  })
  .from(
    "#about-left",
    { x: -200, opacity: 0, duration: 1.5, ease: "power1.out" },
    "-=2"
  );

// gsap.from("#about-right p span", {
//   scrollTrigger: {
//     trigger: "#about-right p",
//     start: "top center",
//     end: "bottom bottom",
//     pin: true,
//     scrub: 1,
//   },
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power1.out",
// });

let aboutHtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
});

aboutHtl.from("#about-heading span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1.5,
});

// Event
gsap.from("#event-heading span", {
  scrollTrigger: {
    trigger: "#event-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// gsap.utils.toArray(".flip-box").forEach((fbox, i) => {
//   gsap.from(fbox, {
//     scrollTrigger: {
//       trigger: fbox,
//       start: "bottom bottom",
//       end: "top top",
//       scrub: 1,
//     },
//     y: 100,
//     opacity: 0,
//     duration: 1.5,
//     stagger: 0.2,
//   });
// });

gsap.from(".flip-box", {
  scrollTrigger: {
    trigger: ".flip-box",
    start: "bottom bottom",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// gallery
gsap.from("#gallery-heading span", {
  scrollTrigger: {
    trigger: "#gallery-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

gsap.from(".g-image", {
  scrollTrigger: {
    trigger: ".g-image",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// blog

gsap.from("#blog-heading span", {
  scrollTrigger: {
    trigger: "#blog-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

gsap.from(".b-card", {
  scrollTrigger: {
    trigger: ".b-card",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// Sponsor

gsap.from("#sponsor-heading span", {
  scrollTrigger: {
    trigger: "#sponsor-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

gsap.from(".sp-card", {
  scrollTrigger: {
    trigger: ".sp-card",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// team

gsap.from("#team-heading span", {
  scrollTrigger: {
    trigger: "#team-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

gsap.from(".single-team", {
  scrollTrigger: {
    trigger: ".single-team",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// Message

gsap.from("#message-heading span", {
  scrollTrigger: {
    trigger: "#message-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

gsap.from(".animate-box", {
  scrollTrigger: {
    trigger: ".animate-box",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// contact

gsap.from("#contact-heading span", {
  scrollTrigger: {
    trigger: "#contact-heading",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

gsap.from("#c-left", {
  scrollTrigger: {
    trigger: "#c-left",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  x: -200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

gsap.from("#c-right", {
  scrollTrigger: {
    trigger: "#c-right",
    start: "top bottom",
    end: "top top",
    scrub: 1,
  },
  x: 200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
});

// footer

let footer = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});

footer.from("footer", { y: 100, opacity: 0, duration: 1 });
