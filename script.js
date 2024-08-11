var crsr = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-12.5+"px";
    crsr.style.top = dets.y-12.5+"px";
})
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x-200+"px";
    blur.style.top = dets.y-200+"px";
})

var crsr_all = document.querySelectorAll(".nav h4")
crsr_all.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2;
        crsr.style.border = "solid 1px white";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "none";
        crsr.style.backgroundColor = "yellowgreen";
    })
})

gsap.to(".nav",{
    backgroundColor:"#000",
    duration:1,
    height:"120px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y : 50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 80%",
        scrub: 2
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 80%",
        scrub: 2
    }
})

gsap.from("#quote1",{
    y:-70,
    x: -70,
    scrollTrigger:{
        trigger: "#quote1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})
gsap.from("#quote2",{
    y:70,
    x: 70,
    scrollTrigger:{
        trigger: "#quote1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub: 4
    }
})
gsap.from("#page4 h1",{
    y:70,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub: 4
    }
})