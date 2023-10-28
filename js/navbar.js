function toggleNav() {
    const nav = document.querySelector("#nav-links");
    nav.classList.toggle('nav-open');
    
    const icon = document.querySelector("#icon");
    icon.classList.toggle('bi-list'); // Adicione a classe para o ícone de barras
    icon.classList.toggle('bi-x-lg'); // Remova a classe para o ícone de vezes
}

const navToggle = document.querySelector("#navToggle");
navToggle.addEventListener("click", toggleNav);