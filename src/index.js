// import './js/jquery'
import $ from 'jquery';
// import './css/main.css';
import './scss/style.scss';
import "slick-carousel"; 
// import "mixitup";
// import "./js/sliMy.js";
// import 'vue'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
// window.Vue = require('vue') 
// alert("ppppp"); 


// $('.title').html('какой-то текст')
// $('.title').addClass('.class-new')


// // -------------burger----------------------
// $(Document).ready(function () {
//   $(".icon-menu").click(function (event) {
//     $(this).toggleClass("active"),
//     $(".menu").toggleClass("active");
//     $(".header-tel").toggleClass("active");

//     $("body").toggleClass("lock");
//   });
// });





// -------------burger-slide----------------------
$(Document).ready(function () {
  $(".icon-menu-1").click(function (event) {
    $(this).toggleClass(".icon-menu-1-active"),
      $(".header__slide").toggleClass("active");
  });
});
$(Document).ready(function () {
  $(".icon-menu-1-1").click(function (event) {
    $(this).toggleClass(".icon-menu-1-active"),
      $(".header1-1__slide").toggleClass("active");
  });
});
//--------- .projects__button
$(Document).ready(function () {
  $(".projects__button").click(function (event) {
      $(".projects-galery-hidden").toggleClass(
        "projects-galery-hidden_active"
      );
  });
});




// ==========ibg=========
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();




$(Document).ready(function () {
  $(".slider-des-js").slick({
    arrows: true,
    // dots: true,
    slidesToShow: 1,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    // easing: "ease",
    // adapitveHeight: true,
    rows: 1,
    nextArrow: $(".arrows-slider-des__arrow_prev"),
    prevArrow: $(".arrows-slider-des__arrow_next"),
    responsive: [
      {
        breakpoint: 960,
        settings: {
          // arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});


 
$(Document).ready(function () {
  $(".slider-invitation-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    adapitveHeight: true,
    rows: 1,
    nextArrow: $(".arrows-slider-invitation__arrow_prev"),
    prevArrow: $(".arrows-slider-invitation__arrow_next"),
    // responsive: [
    //   {
    //     breakpoint: 960,
    //     settings: {
    //       // arrows: false,
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});


$(Document).ready(function () {
  $(".slider-confirm-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    adapitveHeight: true,
    rows: 1,
    nextArrow: $(".arrows-slider-confirm__arrow_prev"),
    prevArrow: $(".arrows-slider-confirm__arrow_next"),
    // responsive: [
    //   {
    //     breakpoint: 960,
    //     settings: {
    //       // arrows: false,
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});


$(Document).ready(function () {
  $(".slider-work-js").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    adapitveHeight: true,
    rows: 1,
    nextArrow: $(".arrows-slider-work__arrow_prev"),
    prevArrow: $(".arrows-slider-work__arrow_next"),
    // responsive: [
    //   {
    //     breakpoint: 960,
    //     settings: {
    //       // arrows: false,
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});
$(Document).ready(function () {
  $(".gs-js").slick({
    arrows: true,
    // dots: true,
    slidesToShow: 3,
    // infinite: false,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    // adapitveHeight: true,
    rows: 1,
    nextArrow: $(".gs-js_prev"),
    prevArrow: $(".gs-js_next"),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          // arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});


// ------------------------------

 $(function () {
   $("#Container").mixItUp({
     selectors: {
       target: ".mix",
       filter: ".filter",
       sort: ".sort",
     },
     load: {
       filter: ".category-1",
       sort: "myorder:asc",
     },

     controls: {
       enable: true,
       //activeClass:'on'
     },

     animation: {
       enable: true,
       effects: "scale fade",
       duration: 500,
     },

     /*layout: {
			//display:'block'
			containerClass:'list'
		}*/

     callbacks: {
       /*onMixLoad:function(state) {
				alert('Load');
			},*/
       // onMixStart: function (state) {
       //   alert(state.$targets.text());
       // },
       /*onMixEnd:function() {
				alert('End');
			}*/
     },
   });
 });

