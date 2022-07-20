const feedbackSwiper = new Swiper('.feedback__swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.feedback__swiper-arrow_next',
      prevEl: '.feedback__swiper-arrow_prev',
      disabledClass: 'swiper-arrow_disabled',
    },
    scrollbar: {
      el: ".feedback__swiper-scrollbar",
      dragSize: 'auto',
      draggable: true,
    },
  });