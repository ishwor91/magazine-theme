
// Js for Tab
function tabs(all, fashion, travel) {
  var btnWrapper = document.querySelector(all);
  var tabBtns = btnWrapper.querySelectorAll(fashion);
  var tabPanes = document.querySelectorAll(travel);
  tabBtns.forEach(function (btn) {
    btn.onclick = function () {
      var dataTarget = this.getAttribute("data-show");
      var targetID = document.getElementById(dataTarget);
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      tabPanes.forEach((pane) =>
        (pane.classList.remove('show')));
      targetID.classList.add('show');
    };
  });
}
tabs('.hot-topic-title', '.nav-link', '.hot-topic-content-swiper');


// js for sticky navbar 
let nav = document.querySelector(".header-navbar");
let sticky = nav.offsetTop;
myFunc = () => {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
window.addEventListener("scroll", myFunc);


// loader js 
let load = document.querySelector(".loader");
let showContent = document.querySelector(".links-container-show");
let btn = document.querySelector(".loader-btn")

btn.addEventListener("click", () => {
  load.style.display = "block";
  setTimeout(loadContent, 3000
  );
})
function loadContent() {
  showContent.style.display = "grid";
  load.style.display = "none"
}


