const swiper = new Swiper(".swiper-room-list", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    // autoplay: {
    //     delay: 5000,
    // },
    navigation: {
        nextEl: '.swiper-button-room-list-next',
        prevEl: '.swiper-button-room-list-prev',
    },
    pagination: {
        el: ".swiper-button-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});