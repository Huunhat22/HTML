const menu = document.querySelector(".header__menu");
const isActive = document.querySelector(".header__bar");

isActive.addEventListener("click", function () {
  menu.classList.add("is-active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".header__bar")) {
    menu.classList.remove("is-active");
  }
});
