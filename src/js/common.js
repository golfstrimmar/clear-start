//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import Jquery from "jquery";
var $ = new Jquery();
// ------------------------------------------------

$(Document).ready(function () {
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
});
