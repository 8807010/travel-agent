import Swiper from 'swiper/bundle';

const swiper = new Swiper('#testimonials-col-1', {
  direction: 'vertical',
  // slidesPerView: 4,
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 3200,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper('#testimonials-col-2', {
  direction: 'vertical',
  // slidesPerView: 4,
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 2800,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
  },
});

const swiper3 = new Swiper('#testimonials-col-3', {
  direction: 'vertical',
  // slidesPerView: 4,
  slidesPerView: 'auto',
  spaceBetween: 32,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 3000,
  loop: true,
  autoplay: {
    delay: 0.0,
    disableOnInteraction: false,
  },
});


