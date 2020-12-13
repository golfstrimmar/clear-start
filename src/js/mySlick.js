import $ from "jquery";

$(Document).ready(function () {
  $(".slider-test-js").slick({
    // arrows: false,  
    dots: true,
    slidesToShow: 1,
    slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: 'linear',
    nextArrow: $(".arrows-slider-test__arrow_next"),
    prevArrow: $(".arrows-slider-test__arrow_prev"),

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3

        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,

        }
      }

    ]

  });
});