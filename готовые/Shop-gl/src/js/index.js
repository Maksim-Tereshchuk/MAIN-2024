import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    780: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

//Акардион
import accordion from "./modules/mobile-accordion.js";
accordion();
