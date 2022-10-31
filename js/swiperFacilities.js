const swiper = new Swiper(".swiper-facilities", {
    direction: 'horizontal',
    loop: true,
    slidesPerview: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
    },
    enabled: true,
    effect: 'slide',
    pagination: {
        el: '.swiper-facilities__pagination',
        type: 'bullets',
    },
});