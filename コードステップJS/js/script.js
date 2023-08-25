$(function () {
    // ハンバーガーメニューボタンにクリックイベントを指定
    $(".menu_btn").click(function () {
      // ハンバーガーメニューボタンとナビゲーションメニューに
      // 同時にopenクラスを付けたり外したりする
      $(this).toggleClass("open");
      $(".header_nav").toggleClass("open");
    });
  });