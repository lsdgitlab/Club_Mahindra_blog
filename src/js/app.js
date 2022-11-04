// console.log("webpack")
import $ from "jquery";
import 'owl.carousel';
import lozad from 'lozad';
import  "./accordion"; 

const observer = lozad();
observer.observe();

if ($('#bannerCarousel').length) {
  let bannerCarousel = $("#bannerCarousel").owlCarousel({
    margin:0,
    items: 1,
    dots:false,
    nav:true,
    // center:true,
    // navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
    navText: ["<img src='./../img/icon/arrow.svg'>","<img src='./../img/icon/arrow.svg'>"],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
  })
};
if ($('.placesCards').length) {
  let bannerCarousel = $(".placesCards").owlCarousel({
    margin:0,
    items: 1,
    dots:true,
    nav:false,
    dotsData: true,
    autoplayTimeout: 5000,
  })
};

if ($('#blogCarousel').length) {
  let blogCarousel = $("#blogCarousel").owlCarousel({
    margin:0,
    items: 3,
    dots:false,
    // nav:true,
    // center:true,
    // navText: [$('#blog-section .prev-nav'),$('#blog-section .next-nav')],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
  })
  $('#blog-section .prev-nav').on('click', function(){
    blogCarousel.trigger('prev.owl.carousel');
  })
  // Go to the previous item
  $('#blog-section .next-nav').on('click',function() {
    blogCarousel.trigger('next.owl.carousel');
  })
};
if ($('#journeyCarousel').length) {
  let journeyCarousel = $("#journeyCarousel").owlCarousel({
    margin:0,
    items: 3,
    dots:false,
    // nav:true,
    // center:true,
    // navText: [$('#blog-section .prev-nav'),$('#blog-section .next-nav')],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
  })
  $('#journey-section .prev-nav').on('click', function(){
    journeyCarousel.trigger('prev.owl.carousel');
  })
  // Go to the previous item
  $('#journey-section .next-nav').on('click',function() {
    journeyCarousel.trigger('next.owl.carousel');
  })
};
// import "./page-animation/barba";