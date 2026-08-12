gsap.registerPlugin(ScrollTrigger);

let mai2 = document.querySelector("#mai2");
let cursor = document.querySelector("#cursor");

  mai2.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
   
    });
  });



gsap.to(".page2 h1", {
    transform :" translateX(-60%)",

    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
start: "top 20%" ,
end: "top -100%",
scrub: 2,
pin : true       
    },
}) 
     var tt =   gsap.timeline()
tt.from(".navbar h3", {
    opacity:0,
    y:30,
    delay: 0.8,
    duration:1.2,
    stagger : 1
} )
gsap.from(".main img", {
      opacity:0,
    y:30,
    duration:4
})
gsap.from(".btns button", {
      opacity:0,
    y:30,
    duration:4
})
gsap.from(".main h1", {
      opacity:0,
    y:30,
    duration:4,
    stagger:2
})

