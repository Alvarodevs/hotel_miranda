const swiper = new Swiper(".swiper-menu", {
    direction: "horizontal",
    loop: false,
    spaceBetween: 0,
    autoplay: {
        delay: 4000,
    },
    width: 570,
    breakpointsBase: 'container',
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 0,
        }
    },
    navigation: {
        nextEl: '.swiper-menu__button--next',
        prevEl: '.swiper-menu__button--prev',
    },
});