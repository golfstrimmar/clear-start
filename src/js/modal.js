//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import Jquery from "jquery";
var $ = new Jquery();


$(Document).ready(function () {
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

