$(function () {
  // ハンバーガーメニューボタンにクリックイベントを指定
  $(".menu_btn").click(function () {
    // ハンバーガーメニューボタンとナビゲーションメニューに
    // 同時にopenクラスを付けたり外したりする
    $(this).toggleClass("open");
    $(".header_nav").toggleClass("open");
  });



  // 各ナビゲーションメニューをクリックしたときの処理
  // セレクタでhref属性がID指定で始まるa要素を指定
  $('a[href^="#"]').click(function () {
    // ハンバーガーメニューを閉じる
    $(".menu-btn").removeClass("open");
    $(".header_nav").removeClass("open");

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
  $(".menu-btn").click(function () {
    $(this).toggleClass("open");
    $(".header_nav").toggleClass("open");
  });




  
  // .accordion1 へのクリックイベント指定
  $(".accordion1").click(function () {
    // 後ろにある要素をスライドして、表示・非表示を切り替える
    $(this).next().stop().slideToggle();
  });

  // .accordion2 へのクリックイベント指定
  $(".accordion2").click(function () {
    // 後ろにある要素をスライドして、表示・非表示を切り替える
    var e = $(this);
    e.next().stop().slideToggle();
    e.toggleClass("open");
  });

  // .accordion3 li へのクリックイベント指定
  $(".accordion3 li").click(function () {
    // 子要素を取得して表示・非表示を切り替える
    $(this).children().stop().slideToggle();
    return false;
  });

  // .accordion4 li へのクリックイベント指定
  $(".accordion4 li").click(function () {
    // クリックされた要素を変数liに入れる
    var li = $(this);

    // 子要素を取得して表示・非表示を切り替える
    li.children().stop().slideToggle();
    // 兄弟要素を取得して非表示とする
    li.siblings().children().stop().slideUp();
    return false;
  });

  // .accordion5 へのクリックイベント指定
  $(".accordion5").click(function () {
    // 後ろにある要素をスライドして、表示・非表示を切り替える
    // ※stop()メソッド無し
    $(this).next().slideToggle();
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







  





  // カテゴリ選択ボタンにクリックイベントを指定
  $(".category li").click(function () {
    // 選択されたカテゴリボタンにselectクラスを付け、兄弟要素からは外す
    $(this).addClass("select").siblings().removeClass("select");

    // カテゴリボタンからID属性の_(アンダースコア)以降を取得する
    var category = $(this).attr("id").split("_")[1];
    if (category == "all") {
      // カテゴリがallの場合はすべての記事を表示
      $(".article *").show();
    } else {
      // カテゴリがallでない場合は該当するカテゴリのクラスを指定して表示
      $(".article ." + category).show();

      // 該当しないカテゴリは非表示
      $(".article :not(." + category + ")").hide();
    }
  });
  // 初期状態では"全て"のカテゴリボタンにselectクラスを付けておく
  $("#category_all").addClass("select");
});


Resources