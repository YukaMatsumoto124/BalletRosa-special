// ローディング画面
const loadingArea = document.querySelector('#loading');
const loadingText = document.querySelector('#loading div');

window.addEventListener('load', () => {
  // ローディング中（ぼかし画面）
  loadingArea.animate(
    {
      backdropFilter: ['blur(5px)', 'blur(0)'],
      background: ['rgb(220, 219, 219, 1)', 'rgb(220, 219, 219, 0)'],
      visibility: 'hidden',
    },
    {
      duration: 1800,
      delay: 1000,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中テキスト
  loadingText.animate(
    [
      {
       opacity: 1,
       offset: .8
      },
      {
       opacity: 0,
       offset: 1
      },
    ],
    {
      duration: 1000,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  
});

//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 429){
			var responsiveImage = [//PC用の画像
				{ src: 'images/Nouvel2-main.jpg'},
				{ src: 'images/Fantine.jpg'},
				{ src: 'images/Arlette.jpg'}
			];
		} else {
			var responsiveImage = [//SPサイズ（428px）以下用の画像
				{ src: 'images/Nouvel2-main-sp.jpg' },
				{ src: 'images/PHOEBE.jpg' },
				{ src: 'images/Duval3.jpg' }
			];
		}

//Vegas全体の設定

$('.main-visual').vegas({
		overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
	});


// アニメーション
AOS.init({
  duration: 1000,
  once: true,
});

// const items = document.querySelectorAll('.img-anime');
// // console.log(items);

// for (let i = 0; i < items.length; i++) {
  
//   const keyframes = {
//     opacity: [0, 1],
//     translate: ['0 50px', 0],
//   };
//   const options = {
//     duration: 600,
//     fill: 'forwards',
//   };
  
//   items[i].animate(keyframes, options);
// }


// ハンバーガーメニュー
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});


// vh設定
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// スクロール設定
$.scrollify({
	section : ".sc-section",//1ページスクロールさせたいエリアクラス名
	scrollbars:"false",//スクロールバー表示・非表示設定
	// interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
	easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 300, // スクロール時の速度
	
	//以下、ページネーション設定
	before:function(i,panels) {
    var ref = panels[i].attr("data-section-name");
      $(".pagination .active").removeClass("active");
      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      pagination += "</ul>";

      $("#box1").append(pagination);//はじめのエリアにページネーションを表示
      $(".pagination a").on("click",$.scrollify.move);
    }

  });
