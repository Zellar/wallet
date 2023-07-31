const slider = new Swiper('.chat-slider__wrapper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 0,
    allowTouchMove: false,
    effect: 'creative',
    creativeEffect: {
        limitProgress: 3,
        prev: {
          translate: ['-100%', 0, 0],
          scale: 0.8,
        },
        next: {
          translate: ['100%', 0, 0],
          scale: 0.8,
        },
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  slider();