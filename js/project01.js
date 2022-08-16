/** @format */
const docProject01 = document.documentElement;
const documentH01 = document.body.scrollHeight;
const docHeight01 = window.pageYOffset;
const docScene01 = documentH01 / 6;

const project01h4 = document.querySelector("#project_detail01 > h4");
const project01h5 = document.querySelector("#project_detail01 > h5");
const project01h5s = document.querySelector("#project_detail01 > h5.second");
const project01p = document.querySelector("#project_detail01 > p");
const project01ps = document.querySelector("#project_detail01 > p.second");
const project01btn = document.querySelector("#project_detail01 > .goto");

window.addEventListener("scroll", function () {
  if (3800 < documentH01 && docScene01 < docProject01.scrollTop) {
    project01h4.style.animation = "project_detail 2s forwards alternate 0.3s";
    project01h5.style.animation = "project_detail 2s forwards alternate 0.5s";
    project01h5s.style.animation = "project_detail 2s forwards alternate 0.5s";
    project01p.style.animation = "project_detail 2s forwards alternate 0.7s";
    project01ps.style.animation = "project_detail 2s forwards alternate 0.7s";
    project01btn.style.animation = "project_detail 2s forwards alternate 1s";
  }
});
