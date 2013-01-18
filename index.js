enchant();
window.onload = function() {
	var game = new Game(320, 480);

	game.preload('http://enchantjs.com/assets/images/chara1.gif');
	
	game.onload = function() {
               
		var bgSprite = new Sprite(320, 480); //背景画像となるスプライト
		var bgSurface = new Surface(320, 480); //スプライトの画像データ
		bgSurface.context.strokeStyle = 'brack'; //線の色を赤にする
        //区切り線
		bgSurface.context.beginPath(); //描画開始
		bgSurface.context.moveTo(100, 0); //直線の始点
		bgSurface.context.lineTo(100, 300); //直線の終点
		bgSurface.context.moveTo(200, 0); //直線の始点
		bgSurface.context.lineTo(200, 300); //直線の終点
		bgSurface.context.moveTo(0, 100); //直線の始点
		bgSurface.context.lineTo(300, 100); //直線の終点
		bgSurface.context.moveTo(0, 200); //直線の始点
		bgSurface.context.lineTo(300, 200); //直線の終点
		bgSurface.context.stroke(); //描画指示

		bgSprite.image = bgSurface; //image 属性として指定
		game.rootScene.addChild(bgSprite); //子として追加
        //ここまで
        
        //画像を透明で表示しておく
        var mrflg = Array(9);
        var mr = Array(9);
		var mrx = 35;
		var mry = 30;
 		for (i = 0; i < 9; i++) {
            mrflg[i] = 0;
            mr[i]= new Sprite(32, 32);
			mr[i].image = game.assets['http://enchantjs.com/assets/images/chara1.gif']; //熊の画像で代用
			mr[i].frame = 9;	//何も画像はないところ
			mr[i].x = mrx;
			mr[i].y = mry;
			mrx += 100;
			if (mrx > 250) {
				mrx = 35; //初期化
				mry += 100;
			}
            game.rootScene.addChild(mr[i]); //子として追加
   		}        
		//ここまで

        //キーで画像を変更する処理 ・ CPU側の処理
        
        //ここまで
        
        //勝敗判定
        
        //ここまで
    };

	game.start(); // ゲームスタート
};

