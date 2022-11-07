// console.log("webpack")
import $ from "jquery";
import 'owl.carousel';
import lozad from 'lozad';
import  "./accordion"; 
import Accordion from "accordion-js";

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
    navText: ["<i class='arrow-banner left'></i>","<i class='arrow-banner right'></i>"],
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
    margin: 24,
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
if ($('#blogCarousel').length) {
  let blogCarousel = $("#blogCarousel").owlCarousel({
    margin: 24,
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


if ($('#visiteCarousel').length) {
  let visiteCarousel = $("#visiteCarousel").owlCarousel({
    margin:0,
    items: 2,
    dots:false,
    // nav:true,
    // center:true,
    // navText: [$('#blog-section .prev-nav'),$('#blog-section .next-nav')],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
  })
  $('#blog-section .prev-nav').on('click', function(){
    visiteCarousel.trigger('prev.owl.carousel');
  })
  // Go to the previous item
  $('#blog-section .next-nav').on('click',function() {
    visiteCarousel.trigger('next.owl.carousel');
  })
};
if ($('#visiteCarousel1').length) {
  let visiteCarousel = $("#visiteCarousel1").owlCarousel({
    margin:0,
    items: 2,
    dots:false,
    // nav:true,
    // center:true,
    // navText: [$('#blog-section .prev-nav'),$('#blog-section .next-nav')],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
  })
  $('#blog-section1 .prev-nav').on('click', function(){
    visiteCarousel.trigger('prev.owl.carousel');
  })
  // Go to the previous item
  $('#blog-section1 .next-nav').on('click',function() {
    visiteCarousel.trigger('next.owl.carousel');
  })
};
if ($('#visiteCarousel2').length) {
  let visiteCarousel = $("#visiteCarousel2").owlCarousel({
    margin:0,
    items: 2,
    dots:false,
    // nav:true,
    // center:true,
    // navText: [$('#blog-section .prev-nav'),$('#blog-section .next-nav')],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
  })
  $('#blog-section2 .prev-nav').on('click', function(){
    visiteCarousel.trigger('prev.owl.carousel');
  })
  // Go to the previous item
  $('#blog-section2 .next-nav').on('click',function() {
    visiteCarousel.trigger('next.owl.carousel');
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


new Accordion('.accordion-container');