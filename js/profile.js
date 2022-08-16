/** @format */
const doc_profile = document.documentElement;
const documentH_profile = document.body.scrollHeight;
const docHeight_profile = window.pageYOffset;
const docScene_profile = documentH_profile / 8;

const profilebg = document.querySelector(".profile");
const profile01 = document.querySelector(".profile_img ");
const profile02 = document.querySelector(".profile_txt");
const profile03 = document.querySelector(".Strength");

const technical01 = document.querySelector(".technical_part01");
const technical02 = document.querySelector(".technical_part02");
const technical03 = document.querySelector(".technical_part03");

console.log(documentH_profile);
console.log(docScene_profile);

window.addEventListener("scroll", function () {
  if (3800 < documentH_profile && docScene_profile < doc_profile.scrollTop) {
    profilebg.style.animation = "profiledown 2s forwards alternate";
    profile01.style.animation = "profiledown02 2s forwards alternate";
    profile02.style.animation = "profiledown02 2s forwards alternate 0.2s";
    profile03.style.animation = "profiledown02 2s forwards alternate 0.4s";
    technical01.style.animation = "technical_part01 2s forwards alternate";
    technical02.style.animation = "technical_part01 2s forwards alternate 0.2s";
    technical03.style.animation = "technical_part01 2s forwards alternate 0.4s";
  }
});
