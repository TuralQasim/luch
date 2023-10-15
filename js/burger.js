const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.querySelector(".burger_menu");
const closeBtn = document.getElementById("closeBtn");
function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
function enableScroll() {
  window.onscroll = null;
}
burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.add("burger_menu_visible");
  // disableScroll();
});
closeBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("burger_menu_visible");
  // enableScroll();
});
