$(document).ready(function () {
  $(".menu__icon").click(function (_event) {
    $(".menu__icon,.menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

//===IBG===============

function ibg() {
  $.each($(".ibg"), function (_index) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();

//============SLIDER============
if ($(".slider__body").length > 0) {
  $(".slider__body").slick({
    autoplay: true,
    //infinite: false,
    dots: true,
    arrows: false,
    slideToShow: 1,
    autoplaySpeed: 3000,
    /*nextArrow: "<button type="button" class="slick-next"></button>",
    prevArrow: "<button type="button" class="slick-prew"></button>",
    */
    responsive: [
      {
        breakpoint: 768,
        setings: {},
      },
    ],
  });
}
