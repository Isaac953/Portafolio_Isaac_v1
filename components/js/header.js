//Function Normal NavBar
function headerClick() {

  let navMobile = document.getElementById("navMobile");
  let navMobileValue = navMobile.value;

  const sidebar = document.getElementById("sidebar").style;
  const sidebarExpanded = document.getElementById("sidebarExpanded").style;
  const sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  let screemSize = screen.width;
  console.log(screemSize);

  // console.log(navMobile);

  if (screemSize > 851 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebar.width = "70px";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  }
  else if (screemSize > 851 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
    sidebar.width = "210px";
    sidebarExpanded.display = "flex";
    sidebarCollapsed.display = "none";
    sidebar.transition = "0.5s";
  }
  else if (screemSize <= 850 && screemSize > 651 && navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebar.width = "65px";
    sidebarExpanded.display = "none";
    sidebarCollapsed.display = "flex";
    sidebar.transition = "0.5s";
  }
  else if (screemSize <= 850 && screemSize > 651 && navMobileValue === "Expanded") {
    navMobile.value = "Collapsed";
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