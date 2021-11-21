//Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "510px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

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
    nextArrow:
      '<button class="test-arrow testprev"><i class="fas fa-chevron-left"></i></button>',
    prevArrow:
      '<button class="test-arrow testnext"><i class="fas fa-chevron-right"></i></button>',
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
