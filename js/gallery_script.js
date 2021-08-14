gsap.registerPlugin(ScrollTrigger);

// Intro Slider
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("#gallery-title", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#gallery-title", { y: "50%" }, { y: "0%", duration: 1 }, "-=1");

let sOne = document.querySelector(".page-heading");

sOne.innerHTML = sOne.innerText
  .split(" ")
  .map(function (char) {
    // if (char == " ") {
    //   char = "&nbsp;";
    // }
    return "<span>" + char + "</span>";
  })
  .join("&nbsp;");

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#header",
    start: "top bottom",
    end: "bottom center",
    scrub: 1,
  },
});

tl2.to("#gallery-title", { y: -100, opacity: 0, duration: 1 });
tl2.from(
  ".page-heading span",
  { y: 100, opacity: 0, duration: 1, stagger: 0.25 },
  "-=1"
);

// Photo Filter
// $(document).ready(function () {
//   $(".choice").click(function () {
//     const value = $(this).attr("data-filter");
//     if (value == "all") {
//       $(".img").show("1000");
//     } else {
//       $(".img")
//         .not("." + value)
//         .hide("1000");
//       $(".img")
//         .filter("." + value)
//         .show("1000");
//     }
//   });

//   $(".choice").click(function () {
//     $(this).addClass("active").siblings().removeClass("active");
//   });
// });

// // carousel
// $document.ready(function () {
//   $("#carousel-one").carousel();
// });

gsap.utils.toArray(".img").forEach((img, i) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    })
    .from(img, { y: 100, opacity: 0, duration: 1 });
});
