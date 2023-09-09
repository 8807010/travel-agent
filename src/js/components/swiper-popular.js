import Swiper from 'swiper/bundle';

const swiper = new Swiper('#swiper-popular', {
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '#popularNext',
    prevEl: '#popularPrev',
  },
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  },
});

export default swiper;
