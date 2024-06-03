import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
const tabs = document.querySelector('.tabs');
const tabsList = document.querySelector('.tabs__list');
const tabsItem = document.querySelectorAll('.tabs__item');
const slide = document.querySelectorAll('.slide-news');

const SlideBig = () => {
  for(let i = 0; i <= slide.length - 1; i = i + 3) {
    slide[i].classList.add('slide-news--big');
  }
};

SlideBig();

const onSwiperTabsInit = () => {
  tabs.classList.add('swiper');
  tabsList.classList.add('swiper-wrapper');
  tabsItem.forEach((el) => {
    el.classList.add('swiper-slide');
  });
  new Swiper ('.tabs', {
    spaceBetween: 12,
    slidesPerView: 'auto',
    simulateTouch: true,
  });
};

if(window.innerWidth < 768) {
  onSwiperTabsInit();
}

new Swiper ('.news__swiper', {
  modules: [Navigation, Pagination, Grid],
  simulateTouch: true,
  loopAddBlankSlides: true,
  autoplay: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      grid: {
        fill: 'rows',
        rows: 2,
      },
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        fill: 'rows',
        rows: 2,
      },
    },

    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 32,
      simulateTouch: false,
    }
  },
  navigation: {
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
  },

  pagination: {
    el: '.news__pagination',
    clickable: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 3,
    renderBullet: function (index, className) {
      return `<button class="${className}" aria-label="Перейти на слайд" id=${index}>${index + 1}</button>`;
    },

  },
}
);
