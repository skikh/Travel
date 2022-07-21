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

  const calendarSwiper = new Swiper('.trip-calendar__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.trip-calendar__swiper-arrow_next',
      prevEl: '.trip-calendar__swiper-arrow_prev',
      disabledClass: 'trip-calendar__swiper-arrow_disabled',
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set `translateZ(-400px)` on previous slides
        translate: [0, 0, -50],
      },
      next: {
        // will set `translateX(100%)` on next slides
        translate: ['100%', 0, 0],
        opacity: .5,
      },
    },
  });

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
