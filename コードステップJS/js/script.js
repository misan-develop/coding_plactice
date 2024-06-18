$(function () {

  // ハンバーガーメニューボタンにクリックイベントを指定
  $(".menu_btn").click(function () {
    // ハンバーガーメニューボタンとナビゲーションメニューに
    // 同時にopenクラスを付けたり外したりする
    $(this).toggleClass("open");
    $(".header_nav").toggleClass("open");
  });

  // windowのスクロールした時の処理を指定
  $(window).scroll(function () {
    // windowのスクロール位置を取得する
    var st = $(this).scrollTop();

    // クラス名にscroll_を含む要素全てに対して処理を行う
    $("[class*='scroll_'").each(function () {
      var elm = $(this);
      var elmpos = elm.offset().top; //要素のtopからの位置
      var wh = $(window).height(); // ウィンドウの高さ

      // スクロール量が対象要素のtopからの位置+画面の1/4になったらshowクラスを追加
      // →画面に対象要素が1/4見えたら
      if (st > elmpos - wh + wh / 4) {
        elm.addClass("show");
      } else {
        elm.removeClass("show");
      }
    });
  });

  // セレクタでスライダー化する要素を取得し、slick()メソッドを実行する
  $(".slider").slick({
    autoplay: true, // 自動でスライドを再生する
    autoplaySpeed: 2000, // 自動再生の速度(ﾐﾘ秒)
    arrows: true, // 前後の矢印を有効にする
    prevArrow: "<button class='slide-prev slide-arrow'></button>", // 前へボタン
    nextArrow: "<button class='slide-next slide-arrow'></button>", // 次へボタン
    dots: true, // ドットナビゲーションを有効にする
    dotsClass: "slide-dots", // ドットナビのクラス名を指定
    centerMode: true, // スライドを中央に配置して前後のスライドが見切れるようにする
    centerPadding: "15%", // centerMode時の前後スライドの見える幅を指定する
    speed: 1500, // 速度
    responsive: [
      // レスポンシブスタイルを指定
      {
        // 画面幅400px以下は、settingsプロパティ内のオプションに変更
        breakpoint: 401,
        settings: {
          arrows: false, // 矢印を消す
          centerMode: false // センターモードをやめる
        }
      }
    ]
  });


  // topへ戻るボタンにクリックイベントを指定
  $("#go_top").click(function () {
    // <html>,<body>要素を1秒間のアニメーションしながらTOP位置へスクロール
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // windowにスクロールイベントを指定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // windowのスクロール位置を取得し、100pxを超えたらTOPへ戻るボタンを表示
      $("#go_top").fadeIn();
    } else {
      // windowのスクロール位置が100pxを超えなければTOPへ戻るボタンを非表示
      $("#go_top").fadeOut();
    }
  });




    // 各ナビゲーションメニューをクリックしたときの処理
    // セレクタでhref属性がID指定で始まるa要素を指定
    $('a[href^="#"]').click(function () {
      // ハンバーガーメニューを閉じる
      $(".sms_btn").removeClass("open");
      $(".sms_nav").removeClass("open");

      // 各aタグに指定されたhref属性を取得する
      var href = $(this).attr("href");

      // href属性で指定された要素(各section要素)をセレクタで指定し、位置を取得する
      // ※offset()メソッドはtop,leftをプロパティに持つオブジェクトを返す
      var pos = $(href).offset().top;

      // 取得した位置へ1秒でアニメーションスクロールする
      $("body,html").animate({ scrollTop: pos }, 1000);

      // aタグのデフォルト動作(画面遷移)を取り消す
      return false;
    });

    //   ハンバーガーメニューのクリックイベント
    $(".sms_btn").click(function () {
      $(this).toggleClass("open");
      $(".sms_nav").toggleClass("open");
    });
 

});

 
$(function() {
  $(this).toggleClass("slider-1st");
  $('.slider-1st').slick({
   
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  
     asNavFor: '.slider-2nd'
 });


 $('.slider-2nd').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 1000,
   asNavFor: '.slider-1st'
 });


  $('.slider-3rd').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
 
     asNavFor: '.slider-4th'
 });
 $('.slider-4th').slick({
  　 slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-3nd',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 1000
 });
 });

 
