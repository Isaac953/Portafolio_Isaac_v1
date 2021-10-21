//Funcion para pantalla Grande
let largeScreen = (sidebar, sidebarExpanded, sidebarCollapsed, navDesktop) => {
  navDesktop.value = "Expanded";
  sidebar.width = "230px";
  sidebar.height = "inherit";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
};

//Funcion para pantalla Mediana
let mediumScreen = (sidebar, sidebarExpanded, sidebarCollapsed, navDesktop) => {
  navDesktop.value = "Expanded";
  sidebar.width = "205px";
  sidebar.height = "inherit";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
};

//Funcion para pantalla horizontal pequeña
let horizontalSmallScreen = (
  sidebar,
  sidebarExpanded,
  sidebarCollapsed,
  navMobile
) => {
  navMobile.value = "Collapsed";
  sidebar.width = "75px";
  sidebar.height = "inherit";
  sidebar.transition = "0s";
  sidebarCollapsed.display = "flex";
  sidebarExpanded.display = "none";
};

//Funcion para pantalla vertical pequeña
let verticalSmallScreen = (
  sidebar,
  sidebarExpanded,
  sidebarCollapsed,
  navMobile
) => {
  navMobile.value = "Collapsed";
  sidebar.width = "100%";
  sidebar.height = "0px";
  sidebar.transition = "0s";
  sidebarCollapsed.display = "none";
  sidebarExpanded.display = "none";
};

//Funcion para ejecutarse al cambiar tamanio de pantalla
window.onresize = () => {
  //Variables
  let anchoVentana = window.innerWidth;
  let screenSize = document.getElementById("screenSize");
  let navDesktop = document.getElementById("navDesktop");
  let navMobile = document.getElementById("navMobile");

  let sidebar = document.getElementById("sidebar").style;
  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  screenSize.value = anchoVentana;

  //Cargar menu deacuerdo al tamanio de pantalla por medio de functions
  if (anchoVentana > 1200) {
    largeScreen(sidebar, sidebarExpanded, sidebarCollapsed, navDesktop);
  } else if (anchoVentana <= 1200 && anchoVentana > 850) {
    mediumScreen(sidebar, sidebarExpanded, sidebarCollapsed, navDesktop);
  } else if (anchoVentana <= 850 && anchoVentana > 650) {
    horizontalSmallScreen(
      sidebar,
      sidebarExpanded,
      sidebarCollapsed,
      navMobile
    );
  } else if (anchoVentana <= 650) {
    verticalSmallScreen(sidebar, sidebarExpanded, sidebarCollapsed, navMobile);
  }
};

//Function para expandir y colapsar sidebar por medio de botom hamburger
let headerClick = () => {
  let anchoVentana = window.innerWidth;
  let navDesktop = document.getElementById("navDesktop");
  let navMobile = document.getElementById("navMobile");

  let sidebar = document.getElementById("sidebar").style;
  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  //Casos para expandir y colapsar menu deacuerdo a tamanio de pantalla
  switch (true) {
    //Case largeScreen
    case anchoVentana > 1200:
      if (navDesktop.value === "Expanded") {
        navDesktop.value = "Collapsed";
        sidebar.width = "75px";
        sidebar.height = "inherit";
        sidebarExpanded.display = "none";
        sidebarCollapsed.display = "flex";
        sidebar.transition = "0.5s";
      } else {
        navDesktop.value = "Expanded";
        sidebar.width = "230px";
        sidebar.height = "inherit";
        sidebarExpanded.display = "flex";
        sidebarCollapsed.display = "none";
        sidebar.transition = "0.5s";
      }
      break;
    //Case mediumScreen
    case anchoVentana <= 1200 && anchoVentana > 850:
      if (navDesktop.value === "Expanded") {
        navDesktop.value = "Collapsed";
        sidebar.width = "75px";
        sidebar.height = "inherit";
        sidebarExpanded.display = "none";
        sidebarCollapsed.display = "flex";
        sidebar.transition = "0.5s";
      } else {
        navDesktop.value = "Expanded";
        sidebar.width = "205px";
        sidebar.height = "inherit";
        sidebarExpanded.display = "flex";
        sidebarCollapsed.display = "none";
        sidebar.transition = "0.5s";
      }
      break;
    //Case horizontalSmallScreen
    case anchoVentana <= 850 && anchoVentana > 650:
      if (navMobile.value === "Collapsed") {
        navMobile.value = "Expanded";
        sidebar.width = "185px";
        sidebar.height = "inherit";
        sidebarExpanded.display = "flex";
        sidebarCollapsed.display = "none";
        sidebar.transition = "0.5s";
      } else {
        navMobile.value = "Collapsed";
        sidebar.width = "75px";
        sidebar.height = "inherit";
        sidebarExpanded.display = "none";
        sidebarCollapsed.display = "flex";
        sidebar.transition = "0.5s";
      }
      break;
    //Case verticalSmallScreen
    case anchoVentana <= 650:
      if (navMobile.value === "Collapsed") {
        navMobile.value = "Expanded";
        sidebarExpanded.display = "flex";
        sidebarCollapsed.display = "none";
        sidebar.height = "220px";
        sidebar.transition = "0.5s";
        sidebar.width = "100%";
      } else {
        navMobile.value = "Collapsed";
        sidebarExpanded.display = "none";
        sidebarCollapsed.display = "none";
        sidebar.height = "0px";
        sidebar.transition = "0.5s";
        sidebar.width = "100%";
      }
      break;
  }
};
