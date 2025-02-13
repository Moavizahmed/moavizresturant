$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  arrows : true,
  fade: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
  prevArrow: '<div class="arrow-right slider-arrow"><i class="fas fa-chevron-right"></i></div>',
  nextArrow: '<div class="arrow-left slider-arrow"><i class="fas fa-chevron-left"></i></div>',
});

$('.responsive').slick({
  dots: true,
  infinite: false,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.insta-slider').slick({
  centerMode: true,
  centerPadding: '150px',
  slidesToShow: 3,
  slidesToScroll:1,
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll:1,
      }
    }
  ]
});

// isotopes-js

jQuery(".isotope-head").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});
jQuery(".isotpes-btns ul li").click(function () {
  jQuery(".isotpes-btns ul li").removeClass("active");
  jQuery(this).addClass("active");

  var selector = jQuery(this).attr("data-filter");
  jQuery(".isotope-head").isotope({
    filter: selector,
  });
  return false;
});

// AOS Animation

// AOS.init();

// Smooth Cursor

// Cursor pointer

    function mousemoveHandler(e) {
      try {
        const target = e.target;

        let tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          }
        })
        let t2 = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          }
        })
        tl.to(".cursor1", {
          ease: "power2.out"
        })
          .to(".cursor2", {
            ease: "power2.out"
          }, "-=0.4")

      } catch (error) {
        console.log(error)
      }
    }
    document.addEventListener("mousemove", mousemoveHandler);



// STICKY HEADER
    
$(document).ready(function () {
  var header = $(".header");
  var toggleClass = "is-sticky";

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      header.addClass(toggleClass);
    } else {
      header.removeClass(toggleClass);
    }
  });
});

// Pre Loader

(function ($) {
    "use strict";
    
    var windowOn = $(window);
    
    if (window.location.pathname === '/') {
        windowOn.on("load", function () {

            setTimeout(function() {
                $("#loading").fadeOut(500);
            }, 8000);
        });
    } else {

        $("#loading").hide();
    }
})(jQuery);

// Responsive Menu

jQuery('.open-menu').click(function(){
  jQuery('.responsive-menu').addClass('active');
});


jQuery('.menu-close').click(function(){
  jQuery('.responsive-menu').removeClass('active');
});

jQuery('.responsive-links ul li').click(function(){
  jQuery(this).children('ul').slideToggle();
});
