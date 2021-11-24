let next = async () => {

    let inputd = document.getElementById("inputd");
    let circles = document.getElementsByClassName("fas fa-circle");
    let circleslenght = circles.length;
    let inputint = parseInt(inputd.value);

    let carouselitem = document.getElementsByClassName("carousel__item");

    if (inputint < circleslenght) {
        inputd.value = inputint + 1;
        for (let i = 0; i < circleslenght; i++) {
            circles[i].classList.remove("active");
            carouselitem[i].classList.remove("default");
            carouselitem[i].classList.remove("activeitem");

        }
        circles[inputint].classList.add("active");
        // carouselitem[inputint].classList.add("activeitem");

        await setTimeout(() => {
            console.log(inputint);
            carouselitem[inputint].classList.add("activeitem");
        }, 2000);



    } else {
        inputd.value = 1;
        circles[circleslenght - 1].classList.remove("active");
        carouselitem[circleslenght - 1].classList.remove("activeitem");
        circles[0].classList.add("active");
        carouselitem[0].classList.add("activeitem");

        setTimeout(() => {
            console.log(inputint);
        }, 2000);
    }
}

// let back = () => {
//     let inputd = document.getElementById("inputd");
//     let circles = document.getElementsByClassName("fas fa-circle");
//     let circleslenght = circles.length - 1;
//     let inputint = parseInt(inputd.value);

//     if (inputint >= circleslenght) {
//         inputd.value = inputint - 1;


//         document.getElementsByClassName("fas fa-circle")[inputint - 1].classList.add("active");

//     }
//     else {
//         inputd.value = 3;
//         document.getElementsByClassName("fas fa-circle")[circleslenght - 1].classList.remove("active");
//         document.getElementsByClassName("fas fa-circle")[-1].classList.add("active")
//         // document.getElementsByClassName("fas fa-circle")[circleslenght - 1].classList.remove("active");
//         // document.getElementsByClassName("fas fa-circle")[2].classList.add("active");
//     }
// }

let cleardots = (circleslenght) => {

}

