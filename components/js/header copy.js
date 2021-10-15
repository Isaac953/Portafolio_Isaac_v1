//Function Normal NavBar
function headerClick() {

  const sidebarValue = (document.getElementById("sidebar").offsetWidth).toString() + 'px';

  const sidebar = document.getElementById("sidebar").style;
  const sidebarExpanded = document.getElementById("sidebarExpanded").style;
  const sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  let screemSize = screen.width;
  console.log(screemSize);

  console.log(sidebarValue);

  switch (sidebarValue) {
    case '210px':
      sidebar.width = "70px";
      sidebarExpanded.display = "none";
      sidebarCollapsed.display = "flex";
      sidebar.transition = "0.5s";
      console.log('Sidebar es de 210px');
      break;
    case '70px':
      sidebar.width = "210px";
      sidebarExpanded.display = "flex";
      sidebarCollapsed.display = "none";
      sidebar.transition = "0.5s";
      console.log('Sidebar es de 70px');
      break;
    case '195px':
      sidebar.width = "65px";
      sidebarExpanded.display = "none";
      sidebarCollapsed.display = "flex";
      sidebar.transition = "0.5s";
      console.log('Sidebar es de 195px');
      break;
    case '65px':
      sidebar.width = "195px";
      sidebarExpanded.display = "flex";
      sidebarCollapsed.display = "none";
      sidebar.transition = "0.5s";
      console.log('Sidebar es de 65px');
      break;
  }
}

//Function Mobile NavBar
function headerMobileClick() {
  let navMobile = document.getElementById("navMobile");
  let navMobileValue = navMobile.value;
  let sidebar = document.getElementById("sidebar").style;
  let sidebarExpanded = document.getElementById("sidebarExpanded").style;
  let sidebarCollapsed = document.getElementById("sidebarCollapsed").style;

  if (navMobileValue === "Collapsed") {
    navMobile.value = "Expanded";
    sidebar.display = "flex";
    sidebar.transition = "0.5s";
  }
  else {
    navMobile.value = "Collapsed";
    sidebar.display = "none";
    sidebar.transition = "0.5s";
  }
}