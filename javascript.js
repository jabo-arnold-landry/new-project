let menuBar = document.querySelector("#menu-bar");
let navLinks = document.querySelectorAll("#nav-link");

menuBar.addEventListener("click", () => {
    navLinks.forEach((link) => {
        link.classList.toggle("hidden");
    });
});
