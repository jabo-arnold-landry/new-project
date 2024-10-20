let menuBar = document.querySelector("#menu-bar");
let navLinks = document.querySelector("#nav-links");
let cancel = document.querySelector("#cancel");
let overLay = document.querySelector("#overlay");
menuBar.addEventListener("click", () => {
    navLinks.classList.remove("hidden");
    overLay.classList.toggle("hidden");
});

cancel.addEventListener("click", () => {
    navLinks.classList.add("hidden");
    overLay.classList.toggle("hidden");
});
