const swiper = new Swiper('.swiper-counter', {
    direction: "horizontal",
    //loop: true,
    autoplay: {
        delay: 4000,
    },
    centeredSlides: true,
    breakpointsBase: 'window',
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 100,
            
        }
    },

    pagination: {
        el: '.swiper-counter-pagination',
        type: 'bullets',
        clickable: true,
    },
})