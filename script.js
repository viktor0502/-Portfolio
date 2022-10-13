const swiper = new Swiper('.swiper', {
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        320:{
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        769: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        
      }
  });