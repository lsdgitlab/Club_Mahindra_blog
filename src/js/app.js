// console.log("webpack")
import $ from "jquery";
import 'owl.carousel';
import lozad from 'lozad';
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

// import "./page-animation/barba";