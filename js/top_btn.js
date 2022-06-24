const doc = document.documentElement;
const topBtn = document.querySelector("#top_btn");
const docHeight = window.pageYOffset;
const docScene = (docHeight/6) + 500;

window.addEventListener('scroll', function () {
  if (docScene < doc.scrollTop) {
    topBtn.className = "visible";
  } else {
    topBtn.className = "";
  };
});