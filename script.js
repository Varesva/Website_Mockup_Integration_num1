// pour avoir l'année actualisée du copyright 
let dateCopyright = new Date();
let yearCopyright = dateCopyright.getFullYear();
document.getElementById("year").innerHTML = yearCopyright;

// SHOW MENU ON SCROLL
const mediaQuery = window.matchMedia("(max-width: 768px)");
const menuHeader = document.getElementById("header");

// declare + initialize
let lastScroll = window.scrollY;
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

