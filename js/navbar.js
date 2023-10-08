const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('menuDisplay');
    nav.classList.toggle('active');

}


btnMobile.addEventListener('click', toggleMenu);