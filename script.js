const burger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

burger.addEventListener('click', () => {
    navUl.classList.toggle('show');
})