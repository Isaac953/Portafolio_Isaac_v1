let plusSlides = (n, carousel) => {
    let inputCarousel = document.getElementById("inputCarousel");
    inputCarousel.value = carousel;

    showSlides((slideIndex = n));
};

let currentSlide = (n, carousel) => {
    let inputCarousel = document.getElementById("inputCarousel");
    inputCarousel.value = carousel;
    showSlides((slideIndex = n));
};

let showSlides = (n) => {

    try {
        // let i;
        // let carousel = document.getElementById("workCarousel-1");
        // let slides = document.getElementsByClassName("slideshow__slide");
        // let dots = document.getElementsByClassName("dot");
        let i;
        let slides;
        let dots;
        switch (true) {
            case inputCarousel.value === "carousel 1":
                slides = document.getElementById("workCarousel-1").getElementsByClassName("slideshow__slide");
                dots = document.getElementById("workCarousel-1").getElementsByClassName("dot");
                arrow = document.getElementById("workCarousel-1").getElementsByClassName("arrow");

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


                break;

            case inputCarousel.value === "carousel 2":
                slides = document.getElementById("workCarousel-2").getElementsByClassName("slideshow__slide");
                dots = document.getElementById("workCarousel-2").getElementsByClassName("dot");
                arrow = document.getElementById("workCarousel-1").getElementsByClassName("arrow");

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
                break
        }


        // if (n > slides.length) {
        //     slideIndex = 1;
        // }
        // if (n < 1) {
        //     slideIndex = slides.length;
        // }
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].classList.remove("active__slide");
        // }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].classList.remove("active");
        //     dots[i].classList.remove("active-dot");
        // }
        // slides[slideIndex - 1].classList.add("active__slide");
        // dots[slideIndex - 1].classList.add("active");
    }
    catch (e) {

    }

};

let slideIndex = 1;
showSlides(slideIndex);
