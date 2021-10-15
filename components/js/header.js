// sidebar.width = "210px";

// let logoname = document.getElementById("logoname");

// logoname.style.display = "flex";

function headerClick() {

  const sidebarValue = (document.getElementById("sidebar").offsetWidth).toString() + 'px';

  const sidebar = document.getElementById("sidebar").style;
  const sidebarNavbar = document.getElementById("sidebar__navbar").style;
  const aboutme = document.getElementById("aboutme").style;
  const services = document.getElementById("services").style;
  const skills = document.getElementById("skills").style;
  const proyects = document.getElementById("proyects").style;
  const contact = document.getElementById("contact").style;

  const aboutmeLink = document.getElementById("aboutme_link").style;
  const servicesLink = document.getElementById("services_link").style;
  const skillsLink = document.getElementById("skills_link").style;
  const proyectsLink = document.getElementById("proyects_link").style;
  const contactLink = document.getElementById("contact_link").style;

  console.log(sidebarValue);

  switch (sidebarValue) {
    case '210px':
      sidebar.width = "70px";
      console.log('Sidebar es de 210px');
      break;
    case '70px':
      sidebar.width = "210px";
      console.log('Sidebar es de 70px');
      break;
    case '195px':
      sidebar.width = "65px";
      console.log('Sidebar es de 195px');
      break;
    case '65px':
      sidebar.width = "195px";
      console.log('Sidebar es de 65px');
      break;
    case '0px':
      sidebar.width = "180px";
      sidebar.display = "flex";
      console.log('Sidebar es de 0px');
      break;
    case '180px':
      sidebar.width = "0px";
      sidebar.display = "none";
      console.log('Sidebar es de 180px');
      break;
  }


  // if (sidebar.width === "210px") {
  //   sidebar.width = "70px";
  //   sidebar.transition = "0.8s";
  //   sidebarNavbar.width = "55px";

  //   aboutme.display = "none";
  //   aboutme.justifyContent = "center";
  //   aboutme.minWidth = "55px";
  //   aboutme_link.minWidth = "55px";
  //   aboutme_link.justifyContent = "center";

  //   services.display = "none";
  //   services.justifyContent = "center";
  //   services.minWidth = "55px";
  //   services_link.minWidth = "55px";
  //   services_link.justifyContent = "center";

  //   skills.display = "none";
  //   skills.justifyContent = "center";
  //   skills.minWidth = "55px";
  //   skills_link.minWidth = "55px";
  //   skills_link.justifyContent = "center";

  //   proyects.display = "none";
  //   proyects.justifyContent = "center";
  //   proyects.minWidth = "55px";
  //   proyects_link.minWidth = "55px";
  //   proyects_link.justifyContent = "center";

  //   contact.display = "none";
  //   contact.justifyContent = "center";
  //   contact.minWidth = "55px";
  //   contact_link.minWidth = "55px";
  //   contact_link.justifyContent = "center";

  // } else (sidebar.width === "70px") {
  //   sidebar.width = "210px";
  //   sidebar.transition = "0.8s";
  //   sidebarNavbar.width = "195px";

  //   aboutme.display = "flex";
  //   aboutme.justifyContent = "flex-start";
  //   aboutme.minWidth = "140px";
  //   aboutme_link.minWidth = "185px";
  //   aboutme_link.justifyContent = "space-between";

  //   services.display = "flex";
  //   services.justifyContent = "flex-start";
  //   services.minWidth = "140px";
  //   services_link.minWidth = "185px";
  //   services_link.justifyContent = "space-between";

  //   skills.display = "flex";
  //   skills.justifyContent = "flex-start";
  //   skills.minWidth = "140px";
  //   skills_link.minWidth = "185px";
  //   skills_link.justifyContent = "space-between";

  //   proyects.display = "flex";
  //   proyects.justifyContent = "flex-start";
  //   proyects.minWidth = "140px";
  //   proyects_link.minWidth = "185px";
  //   proyects_link.justifyContent = "space-between";

  //   contact.display = "flex";
  //   contact.justifyContent = "flex-start";
  //   contact.minWidth = "140px";
  //   contact_link.minWidth = "185px";
  //   contact_link.justifyContent = "space-between";
  // }
}
