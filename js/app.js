const langBtn = document.getElementById("langBtn");

if (langBtn) {
    langBtn.addEventListener("click", () => {

        const path = window.location.pathname;

        if (path.includes("/ar/")) {
            window.location.href =
                path.replace("/ar/", "/en/");
        }
        else if (path.includes("/en/")) {
            window.location.href =
                path.replace("/en/", "/ar/");
        }
    });
}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Footer direction
const footer = document.querySelector(".footer");
if (footer && window.location.pathname.includes("/en/")) {
    footer.classList.add("footer-en");
}

// Nav direction
if (navLinks && window.location.pathname.includes("/en/")) {
    navLinks.classList.add("nav-links-en");
}