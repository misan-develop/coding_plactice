// ★slick
$('.slick1').slick({
  autoplay: true, // 自動再生を有効にする

  arrows: true, // 前後の矢印を有効にする
  prevArrow: "<button class='slide-arrow slide-prev'></button>", // 前へボタン
  nextArrow: "<button class='slide-arrow slide-next'></button>", // 次へボタン
  centerMode: true, // スライドを中央に表示する
  centerPadding: "25%",


  dots: true, // ドットナビゲーションを有効にする
  dotsClass: "slide-dots", // ドットナビのクラス名を指定
})
$(function () {
  $(".menu__item").hover(
    function () {
      $(".menuSub:not(:animated)", this).slideDown();
    },
    function () {
      $(".menuSub", this).slideUp();
    }
  );
});