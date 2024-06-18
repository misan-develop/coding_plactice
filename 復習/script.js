const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

});


const hbg = $('#js_hbg');
const nav2 = $('#js_nav');
hbg.on('click', function () { //ハンバーガーメニューをクリックしたら
  hbg.toggleClass('open'); // ハンバーガーメニューにactiveクラスを付け外し
  nav2.toggleClass('open'); // ナビゲーションメニューにactiveクラスを付け外し

});