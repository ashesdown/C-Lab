gsap.registerPlugin(ScrollTrigger);

gsap.to('.box-1', {
  x: 400,
  rotation: 360,
  duration: 4
} );

gsap.to('.box-2', {
  scrollTrigger:".box-3",
  x: 400,
  rotation: 360,
  duration: 4
} );