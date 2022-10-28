const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerview: 1,
    autoplay: {
        delay: 5000,
    },
    enabled: true,
    effect: 'slide',
    breakpointsBase: 'window',
    breakpoints: {
        320: {
            slidesPerview: 1,
        },
        1000: {
            slidesPerview: 3,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});   
