let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 };

 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
 };




window.addEventListener("scroll", function () {
   var header = document.querySelector(".header");
   header.classList.toggle("sticky", window.scrollY > 0);
})




 $(document).ready(function (){
   $(".owl-carousel").owlCarousel({
       items:1,
       loop:true,
       nav:true,
       dots:false,
       autoplay:true,
       autoplaySpeed:5000,
       smartSpeed:1500,
       autoplayHoverPause:true,
   });
});


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
   if(window.pageYOffset > 100) {
   toTop.classList.add("active");
   }
   else{
      toTop.classList.remove("active");
   }
})



//   all ------------------
function initParadoxWay() {
   "use strict";
  
   if ($(".testimonials-carousel").length > 0) {
       var j2 = new Swiper(".testimonials-carousel .swiper-container", {
           preloadImages: false,
           slidesPerView: 1,
           spaceBetween: 20,
           loop: true,
           grabCursor: true,
           mousewheel: false,
           centeredSlides: true,
           pagination: {
               el: '.tc-pagination',
               clickable: true,
               dynamicBullets: true,
           },
           navigation: {
               nextEl: '.listing-carousel-button-next',
               prevEl: '.listing-carousel-button-prev',
           },
           breakpoints: {
               1024: {
                   slidesPerView: 3,
               },
               
           }
       });
   }
   
// bubbles -----------------
   
   
   setInterval(function () {
       var size = randomValue(sArray);
       $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
       $('.individual-bubble').animate({
           'bottom': '100%',
           'opacity': '-=0.7'
       }, 4000, function () {
           $(this).remove()
       });
   }, 350);
   
}

//   Init All ------------------
$(document).ready(function () {
   initParadoxWay();
});