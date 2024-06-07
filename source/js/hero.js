import Swiper from 'swiper';
import 'swiper/css';
const heroPaginationButton = document.querySelectorAll('.slide-hero__pagination-item');

const swiperHero = new Swiper ('.hero__swiper', {
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  watchSlidesProgress: true,
  autoHeight: true,

  breakpoints: {
    1440: {
      simulateTouch: false,
    }
  },
}
);

const onHeroPaginationButtonClick = (el) => {
  const id = el.dataset.id;
  swiperHero.slideTo(id - 1);
};

heroPaginationButton.forEach((el) => {
  el.addEventListener('click', () => onHeroPaginationButtonClick(el));
});
