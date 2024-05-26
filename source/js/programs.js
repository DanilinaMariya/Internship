import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/scrollbar';

new Swiper ('.programs__swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 30,
  watchSlidesProgress: true,
  autoHeight: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      simulateTouch: false,
    }
  },
  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
  },

  scrollbar: {
    el: '.programs__scrollbar',
  },
}
);
