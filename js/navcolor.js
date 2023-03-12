/** @format */

const navdoc = document.documentElement;
const nav = document.querySelector("nav");
const navdocumentH = document.body.scrollHeight;
const navdocHeight = window.pageYOffset;
const navdocScene = navdocumentH / 12;

nav.className = "intro";
window.addEventListener("scroll", function () {
  if (navdocScene < navdoc.scrollTop) {
    nav.className = "reverse";
  } else {
    nav.className = "intro";
  }
});
