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

  sidebar.width = "230px";
  sidebar.height = "100vh";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
};

//Funcion para pantalla Mediana
const mediumScreen = () => {
  let screenSize = document.getElementById("screenSize");
  screenSize.value = anchoVentana;

  let navDesktop = document.getElementById("navDesktop");
  navDesktop.value = "Expanded";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  sidebar.width = "205px";
  sidebar.height = "100vh";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
};

//Funcion para pantalla horizontal pequeña
const horizontalSmallScreen = () => {
  let screenSize = document.getElementById("screenSize");
  screenSize.value = anchoVentana;

  let navMobile = document.getElementById("navMobile");
  navMobile.value = "Collapsed";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  sidebar.width = "75px";
  sidebar.height = "100vh";
  sidebarCollapsed.display = "flex";
  sidebarExpanded.display = "none";
  sidebar.transition = "0s";
};

//Funcion para pantalla vertical pequeña
const verticalSmallScreen = () => {
  let screenSize = document.getElementById("screenSize");
  screenSize.value = anchoVentana;

  let navMobile = document.getElementById("navMobile");
  navMobile.value = "Collapsed";

  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  sidebarExpanded.display = "none";
  sidebarCollapsed.display = "none";
  sidebar.height = "0px";
  sidebar.transition = "0s"
  sidebar.width = "100%";
};

//Funcion para ejecutarse al cambiar tamanio de pantalla
window.onresize = function resize() {
  anchoVentana = window.innerWidth;
  screenSize.value = anchoVentana;

  // console.log(screenSize.value);

  if (anchoVentana > 1200) {
    largeScreen();
  } else if (anchoVentana <= 1200 && anchoVentana > 850) {
    mediumScreen();
  } else if (anchoVentana <= 850 && anchoVentana > 650) {
    horizontalSmallScreen();
  } else if (anchoVentana <= 650) {
    verticalSmallScreen();
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

  if (screenSize > 1200 && navDesktopValue === "Expanded") {
    navDesktop.value = "Collapsed";
    sidebar.width = "75px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  } else if (screenSize > 1200 && navDesktopValue === "Collapsed") {
    navDesktop.value = "Expanded";
    sidebar.width = "230px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  }
  else if (screenSize <= 1200 && screenSize > 850 && navDesktopValue === "Expanded") {
    navDesktop.value = "Collapsed";
    sidebar.width = "75px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  }
  else if (screenSize <= 1200 && screenSize > 850 && navDesktopValue === "Collapsed") {
    navDesktop.value = "Expanded";
    sidebar.width = "205px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  }
  else if (screenSize <= 850 && screenSize > 650 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebar.width = "185px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  }
  else if (screenSize <= 850 && screenSize > 650 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
    sidebar.width = "75px";
    sidebar.height = "100vh";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  }
  else if (screenSize < 650 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.height = "250px";
    sidebar.transition = "0.5s";
    sidebar.width = "100%";
  } else if (screenSize < 650 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "none";
    sidebar.height = "0px";
    sidebar.transition = "0.5s";
    sidebar.width = "100%";
  }
}

