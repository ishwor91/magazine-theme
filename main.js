const heading = document.querySelector(".header-navbar");
const menu = document.querySelector(".header-menu");
const navigation = document.querySelector(".header-navbar-list");
menu.addEventListener("click", () => {
    heading.classList.toggle("active");
});


