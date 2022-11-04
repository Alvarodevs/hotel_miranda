const swiper = new Swiper(".swiper-room-list", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});