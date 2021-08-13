gsap.registerPlugin(ScrollTrigger);

let header = document.querySelector(".title");

header.innerHTML = header.innerText
  .split("")
  .map(function (char) {
    if (char == " ") {
      char = "&nbsp;";
    }
    return "<span>" + char + "</span>";
  })
  .join("");

let tl = gsap.timeline();

tl.from(".nav-wrapper", { y: -100, opacity: 0, duration: 1 })
  .from(".button_container", { y: -100, opacity: 0, duration: 1 }, "-=1")
  .from(".webpage-title", { y: -100, opacity: 0, duration: 1 }, "-=1")
  .from(".social-nav", { x: 100, opacity: 0, duration: 1 }, "-=.5")
  .from(".side-nav", { x: -100, opacity: 0, duration: 1 }, "-=1")
  .from(".bg", { scaleY: 0, opacity: 0, duration: 1 })
  .from(
    ".card",
    {
      y: 100,
      opacity: 0,
      boxShadow: "0px 0px 0px grey",
      duration: 1.5,
      stagger: 0.25,
    },
    "-=.5"
  )
  .from(
    ".title span",
    { y: -100, opacity: 0, duration: 1, stagger: 0.2 },
    "-=1"
  )
  .from(".register", { y: 100, opacity: 0, duration: 1 }, "-=.5");

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "+=500px",
    scrub: 1,
  },
});

let heading = document.querySelector(".heading");

heading.innerHTML = heading.innerText
  .split("")
  .map(function (char) {
    if (char == " ") {
      char = "&nbsp;";
    }
    return "<span>" + char + "</span>";
  })
  .join("");

tl2
  .from(".left", { y: -100, opacity: 0, duration: 1 })
  .from(
    ".heading span",
    { y: -100, opacity: 0, duration: 1, stagger: 0.25 },
    "-=1"
  )
  .from(
    ".content p",
    { y: 100, opacity: 0, duration: 1.5, stagger: 0.25 },
    "-=0.5"
  );

let glimpse = document.querySelector(".glimpse-title");

glimpse.innerHTML = glimpse.innerText
  .split("")
  .map(function (char) {
    if (char == " ") {
      char = "&nbsp;";
    }
    return "<span>" + char + "</span>";
  })
  .join("");

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#glimpse",
    start: "top center",
    end: "top top",
    scrub: 1,
  },
});

tl3
  .from(".glimpse-title span", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
  })
  .from(".img-h", { y: 100, opacity: 0, duration: 1, stagger: 0.25 }, "-=0.5");

gsap.utils.toArray(".card").forEach((img, i) => {
  img.style.backgroundImage = `url(//picsum.photos/1920/1080?random=${i})`;
});

gsap.utils.toArray(".img-h").forEach((img, i) => {
  img.style.backgroundImage = `url(//picsum.photos/1920/1080?random=${i})`;
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top bottom",
  },
});

tl4
  .from(".social-links ul li", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
  })
  .from(".page-links ul li", { opacity: 0, duration: 1, stagger: 0.25 }, "-=1")
  .from("hr", { scale: 0, opacity: 1, duration: 1 }, "-=1")
  .from(".copyright", { opacity: 0, duration: 1 }, "-=1");

// Full Screen Nav
$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});
