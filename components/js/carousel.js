let plusSlides = (n) => {
    showSlides(slideIndex += n);
}

let currentSlide = (n) => {
    showSlides(slideIndex = n);
}

let showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("slideshow__slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active__slide");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active__slide");
    dots[slideIndex - 1].classList.add("active");

}
let slideIndex = 1;
showSlides(slideIndex);