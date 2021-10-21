// Start Functions Load Components with index.html //

const loadHeader = async () => {
    header.innerHTML = await (await fetch('./components/html/01_header.html')).text();
}

const loadSidebar = async () => {
    sidebar.innerHTML = await (await fetch('./components/html/02_sidebar.html')).text();
}


let loadMaintenancePage = async (mainContent) => {
    content.innerHTML = await (await fetch('./components/html/10_maintenance_page.html')).text();
    mainContent.height = "120vh";
}

const loadFooter = async () => {
    footer.innerHTML = await (await fetch('./components/html/09_footer.html')).text();
}

// End Functions Load Components with index.html //

// Start Load Functions default //

let loadPage = () => {

    let mainContent = document.getElementById("mainContent").style;

    loadHeader();
    loadSidebar();
    loadMaintenancePage(mainContent);
    loadFooter();
}

// loadHeader();

// loadSidebar();

// loadCoverPage();

// loadMaintenancePage();

// loadFooter();

// End Load Functions default //

loadPage();