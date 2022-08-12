/** @format */
const docProject02 = document.documentElement;
const docHeightProject02 = window.pageYOffset;
const docSceneProject02 = 2400;

const project02h4 = document.querySelector("#project_detail02 > h4");
const project02h5 = document.querySelector("#project_detail02 > h5");
const project02h5s = document.querySelector("#project_detail02 > h5.second");
const project02p = document.querySelector("#project_detail02 > p");
const project02ps = document.querySelector("#project_detail02 > p.second");
const project02btn = document.querySelector("#project_detail02 > .goto");

window.addEventListener("scroll", function () {
  if (docSceneProject02 < docProject02.scrollTop) {
    project02h4.style.animation = "project_detail 2s forwards alternate 0.3s";
    project02h5.style.animation = "project_detail 2s forwards alternate 0.5s";
    project02h5s.style.animation = "project_detail 2s forwards alternate 0.5s";
    project02p.style.animation = "project_detail 2s forwards alternate 0.7s";
    project02ps.style.animation = "project_detail 2s forwards alternate 0.7s";
    project02btn.style.animation = "project_detail 2s forwards alternate 1s";
  }
});
