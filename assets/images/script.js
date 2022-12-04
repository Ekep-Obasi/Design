let clickMenuElement = document.querySelector(".menu-btn");
let menuElement = document.querySelector("#btn");

let count = 0;
clickMenuElement.addEventListener("click", () => {
  document.querySelector(".nav-links").style.display = "block";
  menuElement.src = "assets/images/icon-menu-close.svg";
  count += 1;
  if (count > 1) {
    document.querySelector(".nav-links").style.display = "none";
    menuElement.src = "assets/images/icon-menu.svg";
    count = 0;
  }
});
