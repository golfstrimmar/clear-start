//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------

// let portfolio = $("#sliding"); 
// let lastScrollTop3 = 0;
// let xAbout = 0;
// $(window).on("scroll", function () {
//   windowOffset = window.pageYOffset;
//   if (
//     windowOffset >= portfolio.offset().top - viewPort &&
//     windowOffset <= portfolio.offset().top + 100
//   ) {
//     let st3 = $(this).scrollTop();
//     if (st3 > lastScrollTop3) {
//       xAbout += 2;
//       portfolio.parent().css("transform", "translateX(" + xAbout + "px)");
//     } else {
//       xAbout -= 2;
//       portfolio.parent().css("transform", "translateX(" + xAbout + "px)");
//     }
//     lastScrollTop3 = st3;
//   }
// });
// $(function () {
//   // функцию скролла привязать к окну браузера
//   $(window).scroll(function () {
//     // distanceTop = (высота: от начала страницы до эл-та #last) -
//     //- высота окна браузера
//     var distanceTop = $("#sliding").offsetY();
//     // если величина прокрутки больше distanceTop
//     if ($(window).scrollTop() > distanceTop)
//       $("#sliding-title").css("color", "red");
//   });

// });

$(window).scroll(function () {
 let distanceTop = $("#sliding").offset().top;
 if( (window.pageYOffset > distanceTop-50) )
    {
     $("#sliding-title").css({
      //  color: "#9fff0f",
       transform: "translate(0%)",
       opacity: 1,
       transition: "transform 1s,opacity 5s",
     });
   }
else {
   $("#sliding-title").css({
    //  color: "red",
     opacity: 0,
     transform: "translate(-100vw)",
   });
}
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
