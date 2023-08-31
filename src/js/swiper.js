const swiper = new Swiper(".image-slider", {
  //безкінечний слайд
  loop: true,
  
  // налаштування автоматичного перемикання слайдів
  autoplay: {
    delay: 1000,  // затримка
    disableOnInteraction: false,
    stopOnLastSlide: false,  // зупинитися на останньому слайді

  },
  speed: 1500,   // швидкість переключення слайдів
  
  // адаптивний слайдер
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 1440px    
    1440: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});