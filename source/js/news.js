import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
const tabs = document.querySelector('.tabs');
const tabsList = document.querySelector('.tabs__list');
const tabsItem = document.querySelectorAll('.tabs__item');
const slide = document.querySelectorAll('.slide-news');
let bulletStep = 42;
let previousActiveBulletIndex = 0;
let stepIteration = 0;

if(window.innerWidth >= 768) {
  bulletStep = 52;
}

const SlideBig = () => {
  if(window.innerWidth >= 1440) {
    for(let i = 0; i <= slide.length - 1; i = i + 3) {
      slide[i].classList.add('slide-news--big');
    }
  }else {
    for(let i = 0; i <= slide.length - 1; i = i + 2) {
      slide[i].classList.add('slide-news--big');
    }
  }

};

SlideBig();

const onSwiperTabsInit = () => {
  tabs.classList.add('swiper');
  tabsList.classList.add('swiper-wrapper');
  tabsItem.forEach((el) => {
    el.classList.add('swiper-slide');
  });
  new Swiper('.tabs', {
    spaceBetween: 12,
    slidesPerView: 'auto',
    simulateTouch: true,
  });
};

if(window.innerWidth < 768) {
  onSwiperTabsInit();
}

const swiperNews = new Swiper('.news__swiper', {
  modules: [Navigation,Pagination, Grid],
  simulateTouch: true,
  loopAddBlankSlides: true,
  autoplay: false,
  watchSlidesProgress: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: false,
      grid: {
        fill: 'column',
        rows: 2,
      },
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
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
    renderBullet: function (index, className) {
      return `<button class="${className}" aria-label="Перейти на слайд" id=${index}>${index + 1}</button>`;
    },
  },
  on: {
    init: function () {
      const paginationBlock =
      document.querySelector('.news__pagination');
      const allBullets = paginationBlock.querySelectorAll('.swiper-pagination-bullet');
      for (let i = 0; i <= 3; i++) {
        allBullets[i].classList.add('swiper-bullet--visible');
        allBullets.forEach((bullet) => {
          bullet.style.left = '0';
        });
      }
    }
  }
},
);

swiperNews.on('slideChange', () => {
  const paginationBlock =
  document.querySelector('.news__pagination');
  const allBullets = paginationBlock.querySelectorAll('.swiper-pagination-bullet');
  const activBullets = paginationBlock.querySelector('.swiper-pagination-bullet-active');
  allBullets.forEach((el) => {
    el.classList.remove('swiper-bullet--visible');
  });

  if (Number(activBullets.id) > previousActiveBulletIndex) {
    if (Number(activBullets.id) > 2 && Number(activBullets.id) < allBullets.length - 1) {
      stepIteration += 1;
    }
  }else {
    if (Number(activBullets.id) > 2 && Number(activBullets.id) < allBullets.length - 2) {
      stepIteration -= 1;
    }
  }

  if(Number(activBullets.id) >= allBullets.length - 2) {
    for (let i = allBullets.length - 4; i <= allBullets.length - 1; i++) {
      allBullets[i].classList.add('swiper-bullet--visible');
    }
    allBullets.forEach((bullet) => {
      bullet.style.left = `-${bulletStep * stepIteration}px`;
    });
  }else{
    if(Number(activBullets.id) <= 2) {
      for (let i = 0; i <= 3; i++) {
        allBullets[i].classList.add('swiper-bullet--visible');
      }
      allBullets.forEach((bullet) => {
        bullet.style.left = '0';
      });
      stepIteration = 0;
    }else {
      for (let i = Number(activBullets.id) - 2; i <= Number(activBullets.id) + 1; i++) {
        allBullets[i].classList.add('swiper-bullet--visible');
      }
      allBullets.forEach((bullet) => {
        bullet.style.left = `-${bulletStep * stepIteration}px`;
      });
    }
  }

  previousActiveBulletIndex = Number(activBullets.id);
});
