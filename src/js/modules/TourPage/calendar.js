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




  const day = document.querySelectorAll('.calendar__day')

day.forEach(item => {
    if (item.classList.contains('calendar__day-available')) {
        const timeHtml = `<span class="calendar__day-available-time">
                            <span class="calendar__day-available-time-start">06:00-</span>
                            <span class="calendar__day-available-time-end">20:00</span>
                        </span>`;

        item.insertAdjacentHTML("beforeend", timeHtml)
    }
})