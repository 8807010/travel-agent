import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '#popularNext',
    prevEl: '#popularPrev',
  },
});

export default swiper;
