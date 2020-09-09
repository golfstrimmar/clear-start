//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------

$(window).scroll(function () {
  let distanceTop = $("#sliding").offset().top;
  if (window.pageYOffset > distanceTop - 50) {
    $("#sliding-title").css({
      //  color: "#9fff0f",
      transform: "translate(0%)",
      opacity: 1,
      transition: "transform 1s,opacity 5s",
    });
  } else {
    $("#sliding-title").css({
      //  color: "red",
      opacity: 0,
      transform: "translate(-100vw)",
    });
  }
});
// ================бургер============================

let nav = $("#header-nav");
let body = $("#body");

// по клику на иконку выезжает меню на весь экран и body невозможно прокрутить
$(".open").on("click", function () {
  nav.css("transform", "translate(0px)");
  body.css("overflow", "hidden");
});
$(".close").on("click", function () {
  nav.css("transform", "translate(-100vw)");
  body.css("overflow", "visible");
});

// по достижении 992 меню востанавливается на своеь месте. а если меньше - уезжает в ждущее положение за экран

$(window).resize(function () {
  if ($(window).width() >= 992) {
    nav.css("transform", "translate(0px)");
  }
  if ($(window).width() < 992) {
    nav.css("transform", "translate(-100vw)");
  }
})();

// ==========ibg=========
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();
