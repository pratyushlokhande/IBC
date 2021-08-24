// ScrollTrigger register
gsap.registerPlugin(ScrollTrigger);

// locomotive scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

// Intro Slider
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("#page-title", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#page-title", { y: "50%" }, { y: "0%", duration: 1 }, "-=1");

gsap.utils.toArray(".single-team").forEach((team, i) => {
  gsap.from(team, {
    scrollTrigger: {
      trigger: team,
      start: "top bottom",
      end: "top center",
      scrub: 1,
      scroller: ".smooth-scroll",
    },
    y: 100,
    opacity: 0,
    duration: 0.5,
  });
});

gsap.from("#footer", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top bottom",
    end: "top center",
    scrub: 1,
    scroller: ".smooth-scroll",
  },
  opacity: 0,
  duration: 1,
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
