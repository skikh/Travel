const popularSwiper = new Swiper('.popular__swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.popular__swiper-arrow_next',
      prevEl: '.popular__swiper-arrow_prev',
      disabledClass: 'swiper-arrow_disabled',
    },
    scrollbar: {
      el: ".popular__swiper-scrollbar",
      dragSize: 'auto',
      draggable: true,
    },
  });