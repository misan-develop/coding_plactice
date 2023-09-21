$(function () {
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
  });
  Run Pen
  
  
  Resources