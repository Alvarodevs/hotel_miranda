document.querySelector(".burger-icon").addEventListener("click", (e) => {
    document.querySelector(".burger-icon--open")
	 	.classList.toggle("hidden")

	document.querySelector(".burger-icon--close")
		.classList.toggle("hidden")
    
    document.querySelector(".nav__links__burger")
        .classList.toggle("nav__links__burger--show");
});