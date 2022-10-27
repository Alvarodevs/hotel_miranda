document.querySelector(".burger-icon").addEventListener("click", (e) => {
    e.target.classList.toggle("burger-icon--close")
    
    document.querySelector(".nav__links__burger")
        .classList.toggle("nav__links__burger--show");
});