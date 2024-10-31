// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  breakpoints: {
    360: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    425: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    650: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    750: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 32,
    },
  },
  loop: false,
});

import mixitup from "mixitup";

var mixer = mixitup(".platform__info");
// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();
