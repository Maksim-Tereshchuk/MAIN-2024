$(function () {
  var mixer = mixitup(".portfolio__content");

  $(".slider__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./svg/Shape.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./svg/arrow-right.svg" alt=""></button>',
  });
});
