// console.log("webpack")
import $, { get } from "jquery";
import 'owl.carousel';
import lozad from 'lozad';
// import  "./accordion"; 
import Accordion from 'accordion-js';
import "jquery-popup-overlay";
import BigPicture from "bigpicture";
const observer = lozad();

observer.observe();

import { submitData} from "./main";
// console.log("AllowOnlyNumbers")
// console.log($('.form-control[type=tel]').get(0))
// console.log($('.allNumber[type=tel]'))
// const input = document.querySelector('.allNumber[type=tel]');
// console.log(input)
// 
// AllowOnlyNumbers()

// console.log()
// $('.form-control[type=tel]').on('onkeypress', function(){
//   console.log("clcik")
// })
// $('.form-control[type=tel]')
// $('.form-control[type=tel]').get(0).addEventListener('keypress', function(el){
//   console.log("clcik")
//   console.log(el)
//   AllowOnlyNumbers(el)
// })
$('.form-control[type=tel]').on('input', function (e) {
  $(this).val($(this).val().replace(/[^0-9]/g, ''));
});
$('.form-control[type=tel]')
if ($('#bannerCarousel').length) {
  let bannerCarousel = $("#bannerCarousel").owlCarousel({
    margin:0,
    items: 1,
    dots:false,
    
    // center:true,
    // navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
    navText: ["<i class='arrow-banner left'></i>","<i class='arrow-banner right'></i>"],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
    responsive:{
      0:{
        nav:false,
      },
      992:{
        nav:true,
      },
    }
  })
};
if ($('.placesCards').length) {
  let placesCards = $(".placesCards").owlCarousel({
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
    margin: 0,
    items: 3,
    dots:false,
    nav:true,
    // center:true,
    navText: ["<i class='arrow left'></i>","<i class='arrow right'></i>"],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
    responsive:{
      0:{
          items:1,
          margin: 24,
      },
      992:{
        items:3,
        margin: 0,
      },
    }
  })
};
if ($('#otherCategory').length) {
  let otherCategory = $("#otherCategory").owlCarousel({
    margin: 24,
    items: 3,
    dots:false,
    nav:true,
    // center:true,
    navText: ["<i class='arrow left'></i>","<i class='arrow right'></i>"],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
    responsive:{
      0:{
          items:1,
          // margin: 24,
      },
      992:{
        items:3,
        // margin: 0,
      },
    }
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
    items: 1,
    dots:false,
    nav:true,
    // center:true,
    navText: ["<i class='arrow left'></i>","<i class='arrow right'></i>"],
    autoplayTimeout: 5000,
    // loop:true,
    smartSpeed: 2000,
    responsive:{
      0:{
        items:1,
        margin: 24,

      },
      992:{
        items:3,
        margin: 0,

      },
    }
  })
  // $('#journey-section .prev-nav').on('click', function(){
  //   journeyCarousel.trigger('prev.owl.carousel');
  // })
  // // Go to the previous item
  // $('#journey-section .next-nav').on('click',function() {
  //   journeyCarousel.trigger('next.owl.carousel');
  // })
};
// import "./page-animation/barba";

$(function () {
  // $(".info-box p").slice(0, 2).show();
  $(".readMore").on('click', function (e) {
      e.preventDefault();
      $(".s-dis-none").show();
      $(this).hide();
      // if ($(".info-box p:hidden").length == 0) {
      //   // $("#load").fadeOut('slow');
      //   $(this).hide()
      // }
      // console.log($(this))
      // $(this).hide()
      // $('html,body').animate({
      //     scrollTop: $(this).offset().top
      // }, 1500);
  });
});

$(".toggle_icon").on('click',function(){
  $('.mobile-menu').toggleClass('open')
})
$('.mobile-menu').on('click',(e)=>{
  if (!$(e.target).closest('.link-cotainer').length){
    $(".mobile-menu").toggleClass('open')
  }
});
function resize() {
  if ($(window).width() < 700) {
    console.log("in mobile");
    new Accordion('.footerAcc');
    new Accordion('.footerAccCon');
    // $('.myDiv').removeClass('ten').addClass('three');
    new Accordion('.accordion-container');
  }else{
    console.log("in destop")

  }
}

//watch window resize
// $(window).on('resize', function() {
//   resize()
// });
// $( document ).ready(function() {
//   console.log( "ready!" );
// });
$(window).on('load', function () {
  resize()
})
if($('.accordionFaq').length)
  new Accordion('.accordionFaq');

;(function () {
  setClickHandler('playPopupYtVid', function (e) {
    // console.log(e)
    // console.log(e)
    var className = e.target.className
    if (~className.indexOf('htmlvid')) {
      BigPicture({
        el: e.target,
        vidSrc: e.target.getAttribute('vidSrc'),
      })
    } else if (~className.indexOf('vimeo')) {
      BigPicture({
        el: e.target,
        vimeoSrc: e.target.getAttribute('vimeoSrc'),
      })
    } else if (~className.indexOf('twin-peaks')) {
      BigPicture({
        el: e.target,
        ytSrc: e.target.getAttribute('ytSrc'),
        dimensions: [1226, 900],
      })
    } else if (~className.indexOf('youtube')) {
      console.log("click check");
      BigPicture({
        el: e.target,
        ytSrc: e.target.getAttribute('ytSrc'),
      })
    }
  })
  function setClickHandler(id, fn) {
    // console.log("id")
    // console.log(id)
    // console.log(fn)
    if($("#"+id).length)
      document.getElementById(id).onclick = fn

  }
  
})();
$('.gotoSection').on( "click", function(){
  let id = $(this).data("to-section");
  gotoId(id)
});
$('.formSumit').on( "click", function(){
  let id = $(this).data("form-id");
  submitData(id)
});
$(".form-control").on("keyup change", function (event) {
  if($(this).parent().siblings('.invalid').length){
    $(this).parent().siblings('.invalid').hide()
    $(this).removeClass('error')
    $(this).parent().removeClass('error')
  }
});


// $('#scrollToTop').on('click', function () {
//   $('body,html').animate({
//       scrollTop: 0,
//       duration:10000,
//   }, 600);
//   return false;
// });

// $(window).on('scroll',function () {
//   if ($(this).scrollTop() > 400) {
//     $('#scrollToTop').fadeIn();
//   } else {
//     $('#scrollToTop').fadeOut();
//   }
// });
$('#mutiStepForm').popup({
  closebutton: true,
  scrolllock: true,
  opacity: 0.8,
}).on('hide', function(event) {
  event.preventDefault();
  event.stopPropagation();
});
$(function () {
  $(".category-page-section .cat-box").slice(0, 9).show();
  $(".readMoreCat").on('click', function (e) {
      e.preventDefault();
      $(".category-page-section .cat-box:hidden").slice(0, 3).slideDown();
      if ($(".category-page-section .cat-box:hidden").length == 0) {
        // $("#load").fadeOut('slow');
        $(this).hide()
      }
      // console.log($(this))
      // $(this).hide()
      // $('html,body').animate({
      //     scrollTop: $(this).offset().top
      // }, 1500);
  });
});
// $('#mutiStepForm').popup('show');
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $('.sticky-btn-book-apt').addClass('sticky-block');
      $('#top-menu').addClass('animate__fadeInDown')
      // $('.get-start-fix').addClass('fix-btn-block');

    } else {
      $('.sticky-btn-book-apt').removeClass('sticky-block');
      $('#top-menu').removeClass('animate__fadeInDown')

      // $('.get-start-fix').removeClass('fix-btn-block');

    }
  });
});
// $("#shareIconBtn")
// $('#mutiStepForm').popup('show');