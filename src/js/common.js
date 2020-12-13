//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------

$(document).ready(function () {

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
