// Start Functions Load Components with index.html //

let mainContent = document.getElementById("mainContent").style;
let contentLayout = document.getElementById("content").style;

const loadHeader = async () => {
  header.innerHTML = await (
    await fetch("./components/html/01_header.html")
  ).text();
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
  mainContent.height = "110vh";
  contentLayout.flexDirection = "column";
  contentLayout.backgroundAttachment = "fixed";
  contentLayout.backgroundImage = 'url("./assets/cover_page_img.jpg")';
  contentLayout.backgroundPosition = "center";
  contentLayout.backgroundRepeat = "no-repeat";
  contentLayout.backgroundSize = "cover";
};

let loadAboutMe = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección sobre mí en construcción";
  mainContent.height = "120vh";
  contentLayout.backgroundAttachment = "fixed";
  contentLayout.backgroundImage = 'url("./assets/about_me_img.jpg")';
  contentLayout.backgroundPosition = "center";
  contentLayout.backgroundRepeat = "no-repeat";
  contentLayout.backgroundSize = "cover";
};

let loadServices = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección servicios en construcción";
  mainContent.height = "120vh";
  contentLayout.backgroundImage = "none";
  contentLayout.backgroundColor = "blue";
  // contentLayout.backgroundAttachment = "fixed";
  // contentLayout.backgroundImage = 'url("../../assets/contact_img.jpg")';
  // contentLayout.backgroundPosition = "center";
  // contentLayout.backgroundRepeat = "no-repeat";
  // contentLayout.backgroundSize = "cover";
};

let loadSkills = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección habilidades en construcción";
  mainContent.height = "120vh";
  contentLayout.backgroundImage = "none";
  contentLayout.backgroundColor = "red";
  // contentLayout.backgroundAttachment = "fixed";
  // contentLayout.backgroundImage = 'url("../../assets/contact_img.jpg")';
  // contentLayout.backgroundPosition = "center";
  // contentLayout.backgroundRepeat = "no-repeat";
  // contentLayout.backgroundSize = "cover";
};

let loadProyects = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección proyectos en construcción";
  mainContent.height = "120vh";
  contentLayout.backgroundImage = "none";
  contentLayout.backgroundColor = "purple";
  // contentLayout.backgroundAttachment = "fixed";
  // contentLayout.backgroundImage = 'url("../../assets/contact_img.jpg")';
  // contentLayout.backgroundPosition = "center";
  // contentLayout.backgroundRepeat = "no-repeat";
  // contentLayout.backgroundSize = "cover";
};

let loadContact = async () => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  let maintenanceComponent = document.getElementById("maintenanceComponent");
  maintenanceComponent.innerHTML = " Sección contactos en construcción";
  mainContent.height = "120vh";
  contentLayout.backgroundAttachment = "fixed";
  contentLayout.backgroundImage = 'url("./assets/contact_img.jpg")';
  contentLayout.backgroundPosition = "center";
  contentLayout.backgroundRepeat = "no-repeat";
  contentLayout.backgroundSize = "cover";
};

let loadMaintenancePage = async (mainContent, content) => {
  content.innerHTML = await (
    await fetch("./components/html/10_maintenance_page.html")
  ).text();
  mainContent.height = "120vh";
};

const loadFooter = async () => {
  footer.innerHTML = await (
    await fetch("./components/html/09_footer.html")
  ).text();
};

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

// loadHeader();

// loadSidebar();

// loadCoverPage();

// loadMaintenancePage();

// loadFooter();

// End Load Functions default //

loadPage();
