const swiper = new Swiper(".swiper-menu-images", {
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 4000,
    },
    centeredSlides: true,
    breakpointsBase: 'window',
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 200,
        },
		 1400: {
			 slidesPerView: 3,
			 spaceBetween: 150,
		 }
    },
    
    pagination: {
        el: '.swiper-menu-images-pagination',
        type: 'bullets',
        clickable: true,
    },
});