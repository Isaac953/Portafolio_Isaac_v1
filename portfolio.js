async function loadCoverPage() {
    content.innerHTML = await (await fetch('/components/html/02_cover_page.html')).text();
}

async function loadAboutMe() {
    content.innerHTML = await (await fetch('/components/html/03_about_me.html')).text();
}

async function loadServices() {
    content.innerHTML = await (await fetch('/components/html/04_services.html')).text();
}

async function loadContact() {
    content.innerHTML = await (await fetch('/components/html/06_contact.html')).text();
}

loadCoverPage();