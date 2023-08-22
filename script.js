function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // loop:true
      });
}

function cards(){

document.querySelectorAll("#part4 #videos .v1 #hoverdiv1")
.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
           document.querySelector("#part4 #videos .v1 .v1e1 #hovervideo1").style.opacity=1;
       })
})

document.querySelectorAll("#part4 #videos .v1 .v1e1")
.forEach(function(elem){
       elem.addEventListener("mouseleave",function(){
           document.querySelector("#part4 #videos .v1 .v1e1 #hovervideo1").style.opacity=0;
       })
})

document.querySelectorAll("#part4 #videos .v1 #hoverdiv2")
.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
           document.querySelector("#part4 #videos .v1 .v1e1 #hovervideo2").style.opacity=1;
       })
})

document.querySelectorAll("#part4 #videos .v1 .v1e1")
.forEach(function(elem){
       elem.addEventListener("mouseleave",function(){
           document.querySelector("#part4 #videos .v1 .v1e1 #hovervideo2").style.opacity=0;
       })
})

document.querySelectorAll("#part4 #videos .v1 #hoverdiv3")
.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
           document.querySelector("#part4 #videos .v1 .v1e1 #hovervideo3").style.opacity=1;
       })
})

document.querySelectorAll("#part4 #videos .v1 .v1e1")
.forEach(function(elem){
       elem.addEventListener("mouseleave",function(){
           document.querySelector("#part4 #videos .v1 .v1e1 #hovervideo3").style.opacity=0;
       })
})


document.querySelectorAll("#part4 #videos .v1 #hoverdiv4")
.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
           document.querySelector("#part4 #videos .v1 .v1e2 #hovervideo4").style.opacity=1;
       })
})

document.querySelectorAll("#part4 #videos .v1 .v1e2")
.forEach(function(elem){
       elem.addEventListener("mouseleave",function(){
           document.querySelector("#part4 #videos .v1 .v1e2 #hovervideo4").style.opacity=0;
       })
})

document.querySelectorAll("#part4 #videos .v1 #hoverdiv5")
.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
           document.querySelector("#part4 #videos .v1 .v1e2 #hovervideo5").style.opacity=1;
       })
})

document.querySelectorAll("#part4 #videos .v1 .v1e2")
.forEach(function(elem){
       elem.addEventListener("mouseleave",function(){
           document.querySelector("#part4 #videos .v1 .v1e2 #hovervideo5").style.opacity=0;
       })
})

document.querySelectorAll("#part4 #videos .v1 #hoverdiv6")
.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
           document.querySelector("#part4 #videos .v1 .v1e2 #hovervideo6").style.opacity=1;
       })
})

document.querySelectorAll("#part4 #videos .v1 .v1e2")
.forEach(function(elem){
       elem.addEventListener("mouseleave",function(){
           document.querySelector("#part4 #videos .v1 .v1e2 #hovervideo6").style.opacity=0;
       })
})

}

function videobutton(){

var tl1=gsap.timeline({
    repeat:-1
});

tl1.
to(".play",{
    delay: .5,
    width:"150px",
    height:"60px",
    borderRadius:"15vw",
    duration: .8
},'a')
.to(".play h1",{
    delay:.7,
    display:"initial",
    ease:Expo.easeInout
},'a')
.to(".play h1",{
    delay:2.2,
    display:"none",
    ease:Expo.easeInout,
    duration:1,
},'a')
.to(".play",{
    delay:3,
    width:"70px",
    height:"70px",
    borderRadius:"50%",
    duration: .8
},'a')

}

function scrolltext(){

var tl = gsap.timeline({
    repeat:-1
});

tl. 
to("#text .t1 .h1s h1",{
    ease:Circ.easeInout,
     stagger: 2,
    top:0
},'a')
.to("#text .t1 .h1s h1",{
    delay:1.7,
    ease: Circ.easeInout,
     stagger: 2,
    top:"-100%",
},'a') 

}

function swiper1(){
    var swiper1 = new Swiper(".mySwiper1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop:true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay:{
            delay: 1000,
            disableOnInteraction:false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
}

loco();
swiper();
swiper1();
cards();
videobutton();
scrolltext();

