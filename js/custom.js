// sell_slider end
$(document).ready(function () {
  $(".sell_slider").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Custom buttons for navigation
  $(".prev-slide1").click(function () {
    $(".sell_slider").slick("slickPrev"); // Go to previous slide
  });

  $(".next-slide1").click(function () {
    $(".sell_slider").slick("slickNext"); // Go to next slide
  });
});

// sell_slider end


// banner_slider start
$(".banner_slider").slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// banner_slider end

// artpop_slider Starts

$(".artpop_slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoPlay: true,
  speed: 300,
  slidesToShow: 9,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// artpop_slider Ends

// Testi slider start
$(".testi_slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoPlay: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        autoPlay: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        autoPlay: true,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

// Testi slider end

// product slider  start
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  centerPadding: "100px",
  focusOnSelect: true,
});
// product slider  end

// simple slick slider start
$(".tab_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
});
// simple slick slider start

// simple slick slider end

// wow animation js
$(function () {
  new WOW().init();
});
// wow animation js

// Cart Plus minus
document.addEventListener("DOMContentLoaded", function () {
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");
  const numberDisplay = document.getElementById("number");

  minusButton.addEventListener("click", function () {
    let currentValue = parseInt(numberDisplay.textContent);
    if (currentValue > 0) {
      numberDisplay.textContent = currentValue - 1;
    }
  });

  plusButton.addEventListener("click", function () {
    let currentValue = parseInt(numberDisplay.textContent);
    numberDisplay.textContent = currentValue + 1;
  });
});
// Cart Plus minus

// Responsive Menu
$(function () {
  $("#menu").slicknav();
});
// Responsive Menu

// Header And Footer Layout
$("#Header").load("layout/header.html");

$("#sidebar").load("layout/sidebar.html");

setTimeout(function () {
  $(function () {
    $("#menu").slicknav();
  });
}, 1000);
// Header And Footer Layout

// Password Hide
function togglePasswordVisibility(toggleButton) {
  $(toggleButton).toggleClass("fa-eye fa-eye-slash");
  var input = $($(toggleButton).attr("toggle"));
  if (input.attr("type") === "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
}
// Attach event listener
$(document).on("click", ".toggle-password", function () {
  togglePasswordVisibility(this);
});
// Password Hide
