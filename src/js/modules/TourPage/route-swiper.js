const routeSwiper = new Swiper('.route__swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.route__swiper-arrow_next',
      prevEl: '.route__swiper-arrow_prev',
      disabledClass: 'swiper-arrow_disabled',
    },
    scrollbar: {
      el: ".route__swiper-scrollbar",
      dragSize: 'auto',
      draggable: true,
    },
  });