let plusSlides = (n, carousel) => {
    let inputCarousel = document.getElementById("inputCarousel");
    inputCarousel.value = carousel;
    showSlides((slideIndex += n));
};

let currentSlide = (n) => {
    showSlides((slideIndex = n));
};

let showSlides = (n) => {

    try {
        let i;
        let slides = document.getElementsByClassName("slideshow__slide");
        let dots = document.getElementsByClassName("dot");
        // switch (true) {
        //     case inputCarousel.value === "carousel 1":
        //         console.log(inputCarousel.value);
        //         console.log(slides.length - 3);
        //         console.log(slides);
        //         break;

        //     case inputCarousel.value === "carousel 2":
        //         console.log(inputCarousel.value);
        //         break
        // }


        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active__slide");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
            dots[i].classList.remove("active-dot");
        }
        slides[slideIndex - 1].classList.add("active__slide");
        dots[slideIndex - 1].classList.add("active");
    }
    catch (e) {

    }

};

let slideIndex = 1;
showSlides(slideIndex);
