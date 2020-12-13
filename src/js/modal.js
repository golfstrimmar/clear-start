//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";


$(window).on("load", function () {
   $(".popup").fadeOut(1);
   $(".popup__init").on("click", function () {
     $(".popup").fadeIn(200);
   });
   $(".icon-close2").on("click", function () {
     $(".popup").fadeOut(200);
   });
   $(".popup__overlay").on("click", function () {
     $(".popup").fadeOut(200);
   });
});

