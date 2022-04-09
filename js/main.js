
// Search Form
let searchBtn =document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-xmark');
    searchForm.classList.toggle('active');
    navbarMenu.classList.remove('active');
    menuBtn.classList.remove('fa-xmark');
}

// Navbar Menu 
let menuBtn =document.querySelector('#menu-btn');
let navbarMenu = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-xmark');
    navbarMenu.classList.toggle('active');
    searchForm.classList.remove('active');
    searchBtn.classList.remove('fa-xmark');
}

window.onscroll = () => {
    searchBtn.classList.remove('fa-xmark');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-xmark');
    navbarMenu.classList.remove('active');
}