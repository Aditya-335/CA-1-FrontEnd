const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
 const navBtns = document.querySelectorAll(".nav-btn"); // Select all nav-btn elements
 const slides = document.querySelectorAll(".video-slide")



menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const sliderNav = function (manual) {
    navBtns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    navBtns[manual].classList.add("active");
    slides[manual].classList.add("active");

}

navBtns.forEach((btn, i) => {
    console.log(btn)
    btn.addEventListener("click", () => {
        sliderNav(i);
        // Add the code to change the color to blue here
        btn.classList.add("blue-color");
    
    });
});



