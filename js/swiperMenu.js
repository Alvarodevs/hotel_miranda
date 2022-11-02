const swiper = new Swiper(".swiper-menu", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 4000,
    // },
    breakpointsBase: 'window',
    breakpoints: {
        1000: {
            spaceBetween: 300,
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: '.swiper-menu-buttons-next',
        prevEl: '.swiper-menu-buttons-prev',
    },
});