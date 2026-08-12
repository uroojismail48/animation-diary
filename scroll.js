gsap.registerPlugin(ScrollTrigger)

var inital = "M 10 100 Q 500 100 990 100"
var f = "M 10 100 Q 500 100 990 100"

gsap.to(".page2 h1", {
    transform :" translateX(-170%)",

    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
start: "top 0%" ,
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
  const ss =   document.querySelector(".string")
  ss.addEventListener("mousemove", function(dets){
path =`M 10 100 Q 500 ${dets.y} 990 100`

gsap.to("svg path", {
    attr : {d:path},
    duration: 0.3,
    ease:"elastic.out(1,0.2)"
})
  })
ss.addEventListener("mouseleave", function(dets){
  gsap.to("svg path", 
    {
        atttr: {d:f}
    }
  )  
})