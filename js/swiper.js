const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBeween: 100,
    autoplay: {
        delay: 5000,
    },
    centeredSlides: true,
    enabled: true,
    effect: 'slide',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    breakpointsBase: 'container',
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 150,
				autoplay: 0,
        }
    },
    navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
    },
});   
