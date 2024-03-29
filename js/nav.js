/** @format */
const doc_nav = document.documentElement;
const menu_btn = document.querySelector("#menu_btn");
const menu = document.querySelector(".menu");
const documentH_nav = document.body.scrollHeight;
const docHeight_nav = window.pageYOffset;
const docScene_nav = documentH_nav / 8;

window.addEventListener("scroll", function () {
  if (docScene_nav < doc_nav.scrollTop) {
    menu_btn.classList.add("menu_btn_on");
    menu_btn.classList.remove("menu_btn_off");
  } else {
    menu_btn.classList.remove("menu_btn_on");
    menu_btn.classList.add("menu_btn_off");
    menu.classList.remove("menu_on");
    menu.classList.add("menu");
  }
});

menu_btn.addEventListener("click", function () {
  menu.classList.toggle("menu");
  menu.classList.toggle("menu_on");
});

function gogo() {
  const menu = $(".menu > li");
  const contents = $("#wrap > article");

  $(".menu> li").click(function (event) {
    event.preventDefault();

    const tg = $(this);
    const i = tg.index();

    const section = $("#wrap > article").eq(i);
    const tt = section.offset().top;

    $("html, body").stop().animate({ scrollTop: tt });
  });
}
