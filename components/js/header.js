const header = document.getElementById("header");

header.style.width = "270px";

// let logoname = document.getElementById("logoname");

// logoname.style.display = "flex";

function headerClick() {
  const hamburger_buttom = document.getElementById("hamburger_buttom");
  const header = document.getElementById("header");
  const header__logo = document.getElementById("header__logo");
  const logo_icon = document.getElementById("logo_icon");
  const logoname = document.getElementById("logoname");

  if (header.style.width === "270px") {
    header.style.width = "70px";
    header.style.transition = "0.8s";
    header__logo.style.height = "130px";
    header__logo.style.flexDirection = "column";
    logo_icon.style.minWidth = "70px";
    header__logo.style.paddingRight = "0px";
    logoname.style.display = "none";
  } else {
    header.style.width = "270px";
    header.style.transition = "0.8s";
    header__logo.style.height = "70px";
    header__logo.style.flexDirection = "row-reverse";
    logo_icon.style.minWidth = "205px";
    header__logo.style.paddingRight = "15px";
    logoname.style.display = "flex";
  }
}
