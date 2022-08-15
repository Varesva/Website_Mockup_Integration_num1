// pour avoir l'année actualisée du copyright 
let dateCopyright = new Date();
let yearCopyright = dateCopyright.getFullYear();
document.getElementById("year").innerHTML = yearCopyright;

// SHOW MENU ON SCROLL
const mediaQuery = window.matchMedia("(max-width: 768px)");
const menuHeader = document.getElementById("header");

let lastScroll = window.scrollY;    // declare + initialize
// console.log(menuHeader);
window.addEventListener("scroll", function () {
    if (lastScroll < this.window.scrollY && mediaQuery.matches) {
        menuHeader.classList.add("hide-header");
    } else {
        menuHeader.classList.remove("hide-header");
    }
    // new initialization
    lastScroll = this.window.scrollY;
});

// OFFCANVAS MENU
const menu = document.getElementById("offcanvasMenu");
function openOffcanvasMenu() {
    menu.style.width = "100vw";
};

function closeMenu() {
    menu.style.width = "0";
};