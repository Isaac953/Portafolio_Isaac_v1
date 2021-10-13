const sidebar = document.getElementById("sidebar");

sidebar.style.width = "210px";

// let logoname = document.getElementById("logoname");

// logoname.style.display = "flex";

function headerClick() {
  const sidebar = document.getElementById("sidebar");
  const sidebarNavbar = document.getElementById("sidebar__navbar");
  const aboutme = document.getElementById("aboutme");
  const aboutme_link = document.getElementById("aboutme_link");
  const services = document.getElementById("services");
  const services_link = document.getElementById("services_link");
  const skills = document.getElementById("skills");
  const skills_link = document.getElementById("skills");
  const proyects = document.getElementById("proyects");
  const proyects_link = document.getElementById("proyects_link");
  const contact = document.getElementById("contact");
  const contact_link = document.getElementById("contact_link");

  if (sidebar.style.width === "210px") {
    sidebar.style.width = "70px";
    sidebar.style.transition = "0.8s";
    sidebarNavbar.style.width = "55px";
    aboutme.style.display = "none";
    aboutme.style.justifyContent = "center";
    aboutme.style.minWidth = "55px";
    services.style.display = "none";
    services.style.minWidth = "55px";
    skills.style.display = "none";
    skills.style.minWidth = "55px";
    proyects.style.display = "none";
    proyects.style.minWidth = "55px";
    contact.style.display = "none";
    contact.style.minWidth = "55px";

  } else {
    sidebar.style.width = "210px";
    sidebar.style.transition = "0.8s";
    sidebarNavbar.style.width = "195px";
    aboutme.style.display = "flex";
    aboutme.style.justifyContent = "flex-start";
    aboutme.style.minWidth = "140px";
    services.style.display = "flex";
    services.style.justifyContent = "flex-start";
    services.style.minWidth = "140px";
    skills.style.display = "flex";
    skills.style.justifyContent = "flex-start";
    skills.style.minWidth = "140px";
    proyects.style.display = "flex";
    proyects.style.justifyContent = "flex-start";
    proyects.style.minWidth = "140px";
    contact.style.display = "flex";
    contact.style.justifyContent = "flex-start";
    contact.style.minWidth = "140px";

  }
}
