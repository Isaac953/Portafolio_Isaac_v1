let logoname = document.getElementById("logoname");

logoname.style.display = "flex";

function headerClick() {

    const hamburger_open = document.getElementById("hamburger_open");
    const hamburger_close = document.getElementById("hamburger_close");
    const header = document.getElementById("header");
    const header__logo = document.getElementById("header__logo");
    const logo_icon = document.getElementById("logo_icon");

    if (logoname.style.display === "flex") {

        header.style.width = "70px";
        header.style.transition = "0.5s";
        header__logo.style.height = "130px";
        header__logo.style.flexDirection = "column";
        logo_icon.style.minWidth = "70px";
        logoname.style.display = "none";

    } else {

        header.style.width = "270px";
        header.style.transition = "0.5s";
        header__logo.style.height = "70px";
        header__logo.style.flexDirection = "row-reverse";
        logo_icon.style.minWidth = "205px";
        logoname.style.display = "flex";
    }
}