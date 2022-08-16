/** @format */
const doc02 = document.documentElement;
const documentH = document.body.scrollHeight;
const docHeight02 = window.pageYOffset;
const docScene02 = documentH / 10;

const profilebg = document.querySelector(".profile");
const profile01 = document.querySelector(".profile_img ");
const profile02 = document.querySelector(".profile_txt");
const profile03 = document.querySelector(".Strength");

const technical01 = document.querySelector(".technical_part01");
const technical02 = document.querySelector(".technical_part02");
const technical03 = document.querySelector(".technical_part03");

window.addEventListener("scroll", function () {
  if (3800 < documentH01 && docScene02 < doc02.scrollTop) {
    profilebg.style.animation = "profiledown 2s forwards alternate";
    profile01.style.animation = "profiledown02 2s forwards alternate";
    profile02.style.animation = "profiledown02 2s forwards alternate 0.2s";
    profile03.style.animation = "profiledown02 2s forwards alternate 0.4s";
    technical01.style.animation = "technical_part01 2s forwards alternate";
    technical02.style.animation = "technical_part01 2s forwards alternate 0.2s";
    technical03.style.animation = "technical_part01 2s forwards alternate 0.4s";
  }
});
