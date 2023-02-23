// Using GSAP Animations, hi Mom!

const timeLine = new gsap.timeline();

timeLine
  .from(".logo", { autoAlpha: 0, duration: 0.5, x: -50 })
  .from("li", { autoAlpha: 0, duration: 0.5, x: -50, stagger: 0.1 })
  .from(".title", { autoAlpha: 0, duration: 0.5, y: 50 })
  .from(".tagline", { autoAlpha: 0, duration: 0.5, y: 50 })
  .from(".desc", { autoAlpha: 0, duration: 0.5, y: 50 })
  .from(".beer", { autoAlpha: 0, duration: 0.3, y: -100 })
  .to(".beer", {
    y: -20,
    duration: 1.5,
    repeat: -1,
    autoAlpha: 1,
    yoyo: true,

    ease: Power1.InOut,
  });