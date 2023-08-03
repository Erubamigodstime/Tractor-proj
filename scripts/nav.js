const hamburger = document.querySelector('#hamburger');
const navLink = document.querySelector('#navLink');

function toggleMenu() {
    navLink.classList.toggle("open");
    hamburger.classList.toggle("open");
    
}
hamburger.onclick = toggleMenu;
