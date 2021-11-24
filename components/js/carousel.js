let next = () => {

    let inputd = document.getElementById("inputd");
    let circles = document.getElementsByClassName("fas fa-circle");
    let circleslenght = circles.length;
    let inputint = parseInt(inputd.value);

    if (inputint < circleslenght) {
        inputd.value = inputint + 1;
        for (let i = 0; i < circleslenght; i++) {
            document.getElementsByClassName("fas fa-circle")[i].classList.remove("active");
        }
        document.getElementsByClassName("fas fa-circle")[inputint].classList.add("active");

    } else {
        inputd.value = 1;
        document.getElementsByClassName("fas fa-circle")[circleslenght - 1].classList.remove("active");
        document.getElementsByClassName("fas fa-circle")[0].classList.add("active");
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

