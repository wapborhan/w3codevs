//Filtering
$(function () {
  //    mixitup js
  var mixer = mixitup(".course_wrap");
});

$(document).ready(function () {
  $(".test-slider").slick({
    arrows: true,
    dots: false,
    dotsClass: "slider-dots",
    slidesToShow: 1,
    nextArrow: '<button class="test-arrow testprev"></button>',
    prevArrow: '<button class="test-arrow testnext"></button>',
  });
});

$(document).ready(function () {
  $(".partner-slider").slick({
    arrows: true,
    dots: false,
    dotsClass: "slider-dots",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
