/** @format */

const doc = document.documentElement;
const topBtn = document.querySelector("#top_btn");
const topBtna = document.querySelector("#top_btn>a");
const docHeight = window.pageYOffset;
const docScene = docHeight / 6 + 500;

window.addEventListener("scroll", function () {
  if (docScene < doc.scrollTop) {
    topBtn.className = "visible";
  } else {
    topBtn.className = "invisible";
  }
});

topBtn.addEventListener("mouseover", function () {
  this.className = "mouseevent";
  topBtna.classList.add("mouseeventa");
});

topBtn.addEventListener("mouseleave", function () {
  this.className = "visible";
  topBtna.classList.remove("mouseeventa");
});
