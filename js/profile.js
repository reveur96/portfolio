/** @format */
const doc_profile = document.documentElement;
const documentH_profile = document.body.scrollHeight;
const docHeight_profile = window.pageYOffset;
const docScene_profile = documentH_profile / 8;

const profilebg = document.querySelector(".profile");
const profile03 = document.querySelector(".str01");
const profile04 = document.querySelector(".str02");
const profile05 = document.querySelector(".str03");

const technical01 = document.querySelector(".technical_part01");
const technical02 = document.querySelector(".technical_part02");
const technical03 = document.querySelector(".technical_part03");
// const technical02 = document.querySelector(".technical_part02");
// const technical03 = document.querySelector(".technical_part03");

console.log(documentH_profile);
console.log(docScene_profile);

window.addEventListener("scroll", function () {
  if (3800 < documentH_profile && docScene_profile < doc_profile.scrollTop) {
    profilebg.style.animation = "profilein 2s forwards alternate";
    profile03.style.animation = "profilestr 5s ease-in-out infinite";
    profile04.style.animation = "profilestr 5s ease-in-out infinite";
    profile05.style.animation = "profilestr 5s ease-in-out infinite";
    technical01.style.animation = "slide-down 1s ease-in-out alternate";
    technical02.style.animation = "slide-up 1s ease-in-out alternate";
    technical03.style.animation = "slide-in 1s ease-in-out alternate";
    // technical02.style.animation = "technical_part02 2s forwards alternate 0.2s";
    // technical03.style.animation = "technical_part03 2s forwards alternate 0.4s";
  }
});
