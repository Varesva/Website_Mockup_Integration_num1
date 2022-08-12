// pour avoir l'année actualisée du copyright 
let dateCopyright = new Date();
let yearCopyright = dateCopyright.getFullYear();
document.getElementById("year").innerHTML = yearCopyright;

// SHOW MENU ON SCROLL
const menuHeader = document.getElementById('headerScroll');

// declare + initialize
let lastScroll = window.scrollY;
// console.log(menuHeader);

window.addEventListener("scroll", function () {
    if (lastScroll < this.window.scrollY) {
        menuHeader.classList.add("hide-header");
    } else {
        menuHeader.classList.remove("hide-header");
    }
    // new initialization
    lastScroll = this.window.scrollY;
});

