$(".wpcf7-form-control").blur(function () {
  if ($(this).hasClass("act")) {
    return;
  } else {
    $(this)
      .parent()
      .siblings(".red-first-letter")
      .css("transform", "translateY(0)");
    $(this)
      .parent(".textarea-568")
      .parent()
      .siblings()
      .find(".red-first-letter")
      .css("transform", "translateY(0)");
  }
});

$(".wpcf7-form-control").focus(function () {
  $(this)
    .parent()
    .siblings(".red-first-letter")
    .css("transform", "translateY(-34px)");
  $(this)
    .parent(".textarea-568")
    .parent()
    .siblings()
    .find(".red-first-letter")
    .css("transform", "translateY(-34px)");
});

$(".wpcf7-form-control").change(function () {
  $(this)
    .parent()
    .siblings(".red-first-letter")
    .css("transform", "translateY(-34px)");
  $(this)
    .parent(".textarea-568")
    .parent()
    .siblings()
    .find(".red-first-letter")
    .css("transform", "translateY(-34px)");
  $(this).addClass("act");
});
