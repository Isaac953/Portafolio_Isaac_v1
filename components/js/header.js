let anchoVentana = window.innerWidth;

let sidebar = document.getElementById("sidebar").style;

//Funcion para pantalla Grande
const largeScreen = () => {
  let screenSize = document.getElementById("screenSize");
  screenSize.value = anchoVentana;

  let navDesktop = document.getElementById("navDesktop");
  navDesktop.value = "Expanded";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  sidebar.width = "255px";
  sidebar.height = "100vh";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
};

//Funcion para pantalla Mediana
const mediumScreem = () => {
  let screenSize = document.getElementById("screenSize");
  screenSize.value = anchoVentana;

  let navDesktop = document.getElementById("navDesktop");
  navDesktop.value = "Expanded";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  sidebar.width = "235px";
  sidebar.height = "100vh";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
};

//Funcion para pantalla Pequenia
const smallScreem = () => {
  let screenSize = document.getElementById("screenSize");
  screenSize.value = anchoVentana;

  let navMobile = document.getElementById("navMobile");
  navMobile.value = "Collapsed";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  sidebarExpanded.display = "none";
  sidebarCollapsed.display = "none";
  sidebar.transition = "0s";
  sidebar.height = "0px";
  sidebar.width = "100%";
};

//Funcion para ejecutarse al cambiar tamanio de pantalla
window.onresize = function resize() {
  anchoVentana = window.innerWidth;
  screenSize.value = anchoVentana;

  // console.log(screenSize.value);

  if (anchoVentana > 850) {
    largeScreen();
  } else if (anchoVentana <= 850 && anchoVentana > 650) {
    mediumScreem();
  } else if (anchoVentana <= 650) {
    smallScreem();
  }
};

//Funcion para ejecutarse al hacer click en el boton de Hamburguesa para encoger y expandir menu
function headerClick() {
  let navMobile = document.getElementById("navMobile");
  let navMobileValue = navMobile.value;

  let navDesktop = document.getElementById("navDesktop");
  let navDesktopValue = navDesktop.value;

  const sidebarExpanded = document.getElementById("sidebarExpanded").style;
  const sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  let screenSize = window.innerWidth;

  let screenSizeInput = document.getElementById("screenSize");
  screenSizeInput.value = screenSize;

  // console.log(screenSize);

  if (screenSize >= 851 && navDesktopValue === "Expanded") {
    navDesktop.value = "Collapsed";
    sidebar.width = "75px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  } else if (screenSize >= 851 && navDesktopValue === "Collapsed") {
    navDesktop.value = "Expanded";
    sidebar.width = "255px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  } else if (
    screenSize <= 850 &&
    screenSize > 650 &&
    navDesktopValue === "Expanded"
  ) {
    navDesktop.value = "Collapsed";
    sidebar.width = "70px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  } else if (
    screenSize <= 850 &&
    screenSize > 650 &&
    navDesktopValue === "Collapsed"
  ) {
    navDesktop.value = "Expanded";
    sidebar.width = "235px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  } else if (screenSize < 650 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebarExpanded.display = "flex";
    sidebar.height = "280px";
    sidebar.transition = "0.5s";
  } else if (screenSize < 650 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
    sidebarExpanded.display = "none";
    sidebar.height = "0px";
    sidebar.transition = "0.5s";
  }
}
