
let anchoVentana = window.innerWidth;

let sidebar = document.getElementById("sidebar").style;
let body = document.getElementById("body").style;
// let sidebarExpanded = document.getElementById("sidebarExpanded").style;
// let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

const funcion1 = () => {
  // console.log("Grande");

  let screemSize = document.getElementById("screemSize");
  screemSize.value = anchoVentana;

  let navMobile = document.getElementById("navMobile");
  navMobile.value = "Expanded";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  body.backgroundColor = "#343a40";
  sidebar.width = "210px";
  sidebar.height = "100vh";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";

}

const funcion2 = () => {
  // console.log("Mediana");

  let screemSize = document.getElementById("screemSize");
  screemSize.value = anchoVentana;

  let navMobile = document.getElementById("navMobile");
  navMobile.value = "Expanded";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  body.backgroundColor = "#343a40";
  sidebar.width = "195px";
  sidebar.height = "100vh";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
}

const funcion3 = () => {
  // console.log("Pequeña");

  let screemSize = document.getElementById("screemSize");
  screemSize.value = anchoVentana;

  let navMobile = document.getElementById("navMobile");
  navMobile.value = "Collapsed";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  body.backgroundColor = "#343a40";
  sidebarExpanded.display = "none";
  sidebar.height = "0px";
  sidebar.width = "100%";
}

window.onresize = function resize() {

  // console.log(navMobileValue);

  anchoVentana = window.innerWidth;
  screemSize.value = anchoVentana;
  // console.log(anchoVentana)
  if (anchoVentana > 850) {
    funcion1();
  } else if (anchoVentana <= 850 && anchoVentana > 650) {
    funcion2();
  } else if (anchoVentana <= 650) {
    funcion3();
  }

};

function headerClick() {

  let navMobile = document.getElementById("navMobile");
  let navMobileValue = navMobile.value;

  const sidebar = document.getElementById("sidebar").style;
  const sidebarExpanded = document.getElementById("sidebarExpanded").style;
  const sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  let screemSize = screen.width;


  if (screemSize > 851 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
    sidebar.width = "70px";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  }
  else if (screemSize > 851 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebar.width = "210px";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  }
  else if (screemSize <= 850 && screemSize > 651 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
    sidebar.width = "65px";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  }
  else if (screemSize <= 850 && screemSize > 651 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebar.width = "195px";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  }
  else if (screemSize <= 650 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebarExpanded.display = "flex";
    sidebar.height = "275px";
    sidebar.transition = "0.5s";
  }
  else if (screemSize <= 650 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
    sidebarExpanded.display = "none";
    sidebar.height = "0px";
    sidebar.transition = "0.5s";
  }

}