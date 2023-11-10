
function toggleNav() {
    const nav = document.querySelector("#nav-links");
    nav.classList.toggle('nav-open');
    
    const icon = document.querySelector("#icon");
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x-lg');

    const clipPath = document.querySelector("#clip-path");
    clipPath.style.display = (nav.classList.contains('nav-open')) ? 'block' : 'none';
}

const navToggle = document.querySelector("#navToggle");
navToggle.addEventListener("click", toggleNav);

document.addEventListener("DOMContentLoaded", function() {
    const clipPath = document.querySelector("#clip-path");
    clipPath.style.display = 'none';
});
