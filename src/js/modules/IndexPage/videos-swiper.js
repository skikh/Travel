const swiper = new Swiper('.swiper-videos', {
    loop: true,
    breakpoints: {
    100: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1.25,
    },
    1300: {
      slidesPerView: 1.5,
    },
    }
  });