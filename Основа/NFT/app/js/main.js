$(function () {
  $(".header__burger").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu__close");
  });

  $(".rightside-menu__btn-close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu__close");
  });
});
