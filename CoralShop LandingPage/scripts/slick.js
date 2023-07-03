// script for slick slider
$(function () {
  $(".best__list").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:
      '<span class="best__pre"><ion-icon class="best__pre-icon" name="chevron-back-outline"></ion-icon></span>',
    nextArrow:
      '<span class="best__next"><ion-icon class="best__pre-icon" name="chevron-forward-outline"></ion-icon></span>',

    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

// script for go to the Top
const goTop = document.getElementById("btnGotop");

const scrollToTheTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
goTop.addEventListener("click", scrollToTheTop);

// script for function visibility wrapper search
const searchbtn = document.querySelector(".header__search");
const wrapperSearch = document.querySelector(".header-wrapper");
const closebtn = document.querySelector(".header-close-icon");

// handle open wrapper search
const handleToVisibility = (event) => {
  event.preventDefault();
  wrapperSearch.classList.add("header-wrapper--active");
};
searchbtn.addEventListener("click", handleToVisibility);

// handle close
const handleToClose = (event) => {
  wrapperSearch.classList.remove("header-wrapper--active");
};
closebtn.addEventListener("click", handleToClose);

// handle open menu
const barbtn = document.querySelector(".header-bar__icon");
const headerMenu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {
  if (
    !headerMenu.contains(e.target) &&
    !e.target.matches(".header-bar__icon")
  ) {
    headerMenu.classList.remove("header__menu--active");
  }
  // console.log(e.target);
});

const handleToOpenMenu = (event) => {
  event.preventDefault();
  headerMenu.classList.add("header__menu--active");
};
barbtn.addEventListener("click", handleToOpenMenu);
