//Start High screen function//
let largeScreen = (
  sidebar,
  sidebarExpanded,
  sidebarCollapsed,
  navDesktop,
  componentName,
  mainContent,
  contentLayout
) => {
  navDesktop.value = "Expanded";
  sidebar.width = "230px";
  sidebar.height = "inherit";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
  switch (true) {
    case componentName.value === "Cover page":
      mainContent.height = "100vh";
      break;
    case componentName.value === "About me":
      mainContent.height = "100vh";
      break;
    case componentName.value === "Services":
      mainContent.height = "120vh";
      break;
    case componentName.value === "Skills":
      mainContent.height = "135vh";
      break;
    case componentName.value === "Proyects":
      mainContent.height = "150vh";
      break;
    case componentName.value === "Contact":
      mainContent.height = "100vh";
      break;
  }
};
//End High screen function//

//Start Medium screen function//
let mediumScreen = (
  sidebar,
  sidebarExpanded,
  sidebarCollapsed,
  navDesktop,
  componentName,
  mainContent,
  contentLayout
) => {
  navDesktop.value = "Expanded";
  sidebar.width = "205px";
  sidebar.height = "inherit";
  sidebar.transition = "0s";
  sidebarExpanded.display = "flex";
  sidebarCollapsed.display = "none";
  switch (true) {
    case componentName.value === "Cover page":
      mainContent.height = "110vh";
      break;
    case componentName.value === "About me":
      mainContent.height = "110vh";
      break;
    case componentName.value === "Services":
      mainContent.height = "130vh";
      break;
    case componentName.value === "Skills":
      mainContent.height = "145vh";
      break;
    case componentName.value === "Proyects":
      mainContent.height = "180vh";
      break;
    case componentName.value === "Contact":
      mainContent.height = "110vh";
      break;
  }
};
//End Medium screen function//

//Start Horizontal small screen function//
let horizontalSmallScreen = (
  sidebar,
  sidebarExpanded,
  sidebarCollapsed,
  navMobile,
  componentName,
  mainContent,
  contentLayout
) => {
  navMobile.value = "Collapsed";
  sidebar.width = "75px";
  sidebar.height = "inherit";
  sidebar.transition = "0s";
  sidebarCollapsed.display = "flex";
  sidebarExpanded.display = "none";

  switch (true) {
    case componentName.value === "Cover page":
      mainContent.height = "140vh";
      break;
    case componentName.value === "About me":
      mainContent.height = "145vh";
      break;
    case componentName.value === "Services":
      mainContent.height = "185vh";
      break;
    case componentName.value === "Skills":
      mainContent.height = "245vh";
      break;
    case componentName.value === "Contact":
      mainContent.height = "130vh";
      break;
  }
};
//End Horizontal small screen function//

//Start vertical small screen function//
let verticalSmallScreen = (
  sidebar,
  sidebarExpanded,
  sidebarCollapsed,
  navMobile,
  componentName,
  mainContent,
  contentLayout
) => {
  navMobile.value = "Collapsed";
  sidebar.width = "100%";
  sidebar.height = "0px";
  sidebar.transition = "0s";
  sidebarCollapsed.display = "none";
  sidebarExpanded.display = "none";
  sidebarExpanded.paddingBottom = "0px";

  switch (true) {
    case componentName.value === "Cover page":
      mainContent.height = "100vh";
      break;
    case componentName.value === "About me":
      mainContent.height = "105vh";
      break;
    case componentName.value === "Services":
      mainContent.height = "155vh";
      break;
    case componentName.value === "Skills":
      mainContent.height = "185vh";
      break;
    case componentName.value === "Contact":
      mainContent.height = "100vh";
      break;
  }
};
//End Horizontal small screen function//

//Start window onresize function//
window.onresize = () => {
  let anchoVentana = window.innerWidth;
  let altoVentana = window.innerHeight;

  let screenSize = document.getElementById("screenSize");
  let screenSizeHeight = document.getElementById("screenHeight");
  let navDesktop = document.getElementById("navDesktop");
  let navMobile = document.getElementById("navMobile");

  let sidebar = document.getElementById("sidebar").style;
  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;
  let componentName = document.getElementById("componentName");
  let mainContent = document.getElementById("mainContent").style;
  let contentLayout = document.getElementById("content").style;

  screenSize.value = anchoVentana;
  screenSizeHeight.value = altoVentana;

  //Cargar menu deacuerdo al tamanio de pantalla por medio de functions
  if (anchoVentana > 1200) {
    largeScreen(
      sidebar,
      sidebarExpanded,
      sidebarCollapsed,
      navDesktop,
      componentName,
      mainContent,
      contentLayout
    );
  } else if (anchoVentana <= 1200 && anchoVentana > 850) {
    mediumScreen(
      sidebar,
      sidebarExpanded,
      sidebarCollapsed,
      navDesktop,
      componentName,
      mainContent,
      contentLayout
    );
  } else if (anchoVentana <= 850 && anchoVentana > 650) {
    horizontalSmallScreen(
      sidebar,
      sidebarExpanded,
      sidebarCollapsed,
      navMobile,
      componentName,
      mainContent,
      contentLayout
    );
  } else if (anchoVentana <= 650) {
    verticalSmallScreen(
      sidebar,
      sidebarExpanded,
      sidebarCollapsed,
      navMobile,
      componentName,
      mainContent,
      contentLayout
    );
  }
};
//End window onresize function//

//Start header click with sidebar size//
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
        sidebarExpanded.paddingBottom = "7px";
        sidebarCollapsed.display = "none";
        sidebar.height = "220px";
        sidebar.transition = "0.5s";
        sidebar.width = "100%";
      } else {
        navMobile.value = "Collapsed";
        sidebarExpanded.display = "none";
        sidebarExpanded.paddingBottom = "0px";
        sidebarCollapsed.display = "none";
        sidebar.height = "0px";
        sidebar.transition = "0.5s";
        sidebar.width = "100%";
      }
      break;
  }
};
//End header click with sidebar size//
