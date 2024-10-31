$(function () {
  $(".header__burger").on("click", function () {
    $(".rightside-menu").removeClass("header__close");
  });

  $(".header__burger--close").on("click", function () {
    $(".rightside-menu").addClass("header__close");
  });
});

gsap.fromTo(
  ".hero__title",
  {
    x: -800,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
  }
);
gsap.fromTo(
  ".hero__desc",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
  }
);
gsap.fromTo(
  ".hero__link",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
  }
);

gsap.fromTo(
  ".hero__phone-img",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
  }
);

gsap.fromTo(
  ".hero__phone-item",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
  }
);

gsap.fromTo(
  ".header__info",
  {
    x: 400,
    opacity: 0,
    duration: 2,
  },
  {
    x: 0,
    opacity: 1,
    duration: 2,
  }
);

// to до точки какой-то
// from от начальной точки
// from to от начально и до какой-то точки

// gsap.to("hero__title", {
//   x: 100,
//   duration:2;
// });

// gsap.from(".header__logo", {
//   duration: 1,
// });

// gsap.fromTo('hero__subtitle', {
//   x:100

// },{
//   y:200,
//   opacity:1,
// })
