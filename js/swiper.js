const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBeween: 30,
    // autoplay: {
    //     delay: 5000,
    // },
    centeredSlides: true,
    enabled: true,
    effect: 'slide',
    breakpointsBase: 'container',
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBeween: 500,
        }
    },
    navigation: {
        nextEl: '.swiper-button--next',
        prevEl: '.swiper-button--prev',
    },
});   
