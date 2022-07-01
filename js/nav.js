
window.addEventListener('load',function(){
    const menu_btn = document.querySelector('.menu_btn');
    const menu = document.querySelector('.menu');

  menu_btn.addEventListener('click', function () {
    menu.classList.toggle('menu_on');
    menu.classList.toggle('menu');
  });
});

function gogo () {
  const menu = $('.menu > li');
  const contents = $('#wrap > article');

  $('.menu> li').click(function (event) {
    event.preventDefault();
        
    const tg = $(this);
    const i = tg.index();
        
    const section = $('#wrap > article').eq(i);
    const tt = section.offset().top;
        
    $('html, body').stop().animate({scrollTop: tt});
  });
};