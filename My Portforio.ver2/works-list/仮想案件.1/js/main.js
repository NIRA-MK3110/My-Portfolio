$(function(){
  /*=================================================
  ハンバーガーメニュー（アコーディオン表示）
  ===================================================*/
  $(".sp-menu .hamburger").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
});