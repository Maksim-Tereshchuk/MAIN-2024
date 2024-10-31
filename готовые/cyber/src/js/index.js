// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });
import Swiper from "swiper/bundle";
import mixitup from "mixitup";
// import styles bundle
import "swiper/css/bundle";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // slidesPerView: 6,
  // spaceBetween: 32,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    780: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 32,
    },
  },
  loop: false,
});
var mixer = mixitup(".collection__menu");
// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
