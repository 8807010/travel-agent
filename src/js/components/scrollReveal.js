import ScrollReveal from 'scrollreveal';

ScrollReveal({
  distance: '60px',
  duration: 2800,
});

ScrollReveal().reveal(`.header, .popular__desc`, {
  origin: 'top',
});

ScrollReveal().reveal(`.discover__picture-hint, .discover__title, .service__picture`, {
  origin: 'left',
});

ScrollReveal().reveal(
  `.discover__picture-scroll, .discover__text, .popular__controls, .container-right, .service__desc`, {
  origin: 'right',
});

ScrollReveal().reveal(`.partners, .discover__form, .discover__picture-img, .testimonials`, {
  origin: 'bottom',
});
