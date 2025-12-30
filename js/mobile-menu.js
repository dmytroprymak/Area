const mobileMenu = document.querySelector(".header__nav");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const header = document.querySelector(".header");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  header.classList.toggle("is-open");
  document.body.classList.toggle("is-scroll-disabled");
};

// const disableScroll = () =>

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

// menuBtnOpen.addEventListener("click", disableScroll);
// menuBtnClose.addEventListener("click", disableScroll);
