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