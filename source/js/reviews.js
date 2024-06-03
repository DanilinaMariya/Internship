import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

new Swiper ('.reviews__swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 30,
  watchSlidesProgress: true,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },

    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      simulateTouch: false,
    }
  },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

  scrollbar: {
    el: '.reviews__scrollbar',
  },
}
);
