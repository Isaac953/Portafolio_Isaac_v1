// Start Functions Load Components with index.html //
const loadHeader = async () => {
  header.innerHTML = await (
    await fetch("./components/html/01_header.html")
  ).text();
  loadInput();
};

const loadSidebar = async () => {
  sidebar.innerHTML = await (
    await fetch("./components/html/02_sidebar.html")
  ).text();
};

let loadCoverPage = async () => {
  content.innerHTML = await (
    await fetch("./components/html/03_cover_page.html")
  ).text();

  let componentName = document.getElementById("componentName");
  componentName.value = "Cover page";
  backgroundContent();

};

let loadAboutMe = async () => {
  content.innerHTML = await (
    await fetch("./components/html/04_about_me.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "About me";
  backgroundContent();


};

let loadServices = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Services";
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección servicios en construcción";
  backgroundContent();
};

let loadSkills = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Skills";
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección habilidades en construcción";
  backgroundContent();
};

let loadProyects = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Proyects";
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección proyectos en construcción";
  backgroundContent();
};

let loadContact = async () => {
  content.innerHTML = await (
    await fetch("./components/html/08_contact.html")
  ).text();
  let componentName = document.getElementById("componentName");
  componentName.value = "Contact";
  backgroundContent();
};

const loadFooter = async () => {
  footer.innerHTML = await (
    await fetch("./components/html/09_footer.html")
  ).text();
};

//Funciones adicionales de carga para componentes
const loadInput = () => {
  let anchoVentanaH = window.innerWidth;
  let screenSizeH = document.getElementById("screenSize");
  screenSizeH.value = anchoVentanaH;
};

const backgroundContent = () => {
  let mainContent = document.getElementById("mainContent").style;
  let contentLayout = document.getElementById("content").style;

  contentLayout.flexDirection = "column";
  contentLayout.backgroundAttachment = "fixed";
  contentLayout.backgroundPosition = "center";
  contentLayout.backgroundRepeat = "no-repeat";
  contentLayout.backgroundSize = "cover";

  switch (true) {
    //Case largeScreen
    case componentName.value === "Cover page":
      contentLayout.backgroundImage = 'url("./assets/cover_page_img.jpg")';
      break;
    case componentName.value === "About me":
      contentLayout.backgroundImage = 'url("./assets/about_me_img.jpg")';
      break;
    case componentName.value === "Services":
      contentLayout.backgroundImage = 'none';
      contentLayout.backgroundColor = "blue";
      break;
    case componentName.value === "Skills":
      contentLayout.backgroundImage = 'none';
      contentLayout.backgroundColor = "red";
      break;
    case componentName.value === "Proyects":
      contentLayout.backgroundImage = 'none';
      contentLayout.backgroundColor = "purple";
      break;
    case componentName.value === "Contact":
      contentLayout.backgroundImage = 'url("./assets/contact_img.jpg")';
      break;
  }

}

// End Functions Load Components with index.html //

// Start Load Functions default //

let loadPage = () => {
  //   let mainContent = document.getElementById("mainContent").style;
  //   let contentLayout = document.getElementById("content").style;

  loadHeader();
  loadSidebar();
  //   loadMaintenancePage(mainContent);
  loadCoverPage();
  loadFooter();
};

// End Load Functions default //

loadPage();
