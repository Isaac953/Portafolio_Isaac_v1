// Start Functions Load Components with index.html //

async function loadHeader() {
    header.innerHTML = await (await fetch('01_header_v1.html')).text();
}

async function loadCoverPage() {
    content.innerHTML = await (await fetch('02_cover_page_v1.html')).text();
}

async function loadAboutMe() {
    content.innerHTML = await (await fetch('../../components/html/03_about_me.html')).text();
}

async function loadServices() {
    content.innerHTML = await (await fetch('../../components/html/04_services.html')).text();
}

async function loadSkills() {
    content.innerHTML = await (await fetch('../../components/html/05_skills.html')).text();
}

async function loadProyects() {
    content.innerHTML = await (await fetch('../../components/html/06_proyects.html')).text();
}

async function loadContact() {
    content.innerHTML = await (await fetch('../../components/html/07_contact.html')).text();
}

async function loadFooter() {
    footer.innerHTML = await (await fetch('../../components/html/08_footer.html')).text();
}

// End Functions Load Components with index.html //

// Start Load Functions default //

loadHeader();

loadCoverPage();

loadFooter();

// End Load Functions default //