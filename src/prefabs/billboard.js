//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Billboard extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, offset_X) {
    super(game);
		this.game = game;
		var TEXT_STYLE = { font: '30px Arial', align: 'center', fill:'#0f0' };
		var GREAT = 'Great!!';
		var GREAT_COLOR = '#0f0';
		var GOOD = 'Good';
		var GOOD_COLOR = '#ff0';
		var MISS = 'Miss :(';
		var MISS_COLOR = '#f00';
		var offset_X;
		this.game = game;
		this.greatText = createText(this.game, GREAT, GREAT_COLOR);
		this.goodText = createText(this.game, GOOD, GOOD_COLOR);
		this.missText = createText(this.game, MISS, MISS_COLOR);
		offset_X = offset_X;

		function createText(game, string, color) {
			var style = TEXT_STYLE;
			style.fill = color;
			var text = game.add.text(offset_X, 400, string, style);
			text.visible = false;
			text.anchor.set(0.5);
			return text;
		}
  }

	show(text) {
		text.visible = true;
		setTimeout(function(){
			text.visible = false;
		}, 500);
	}
	showGreat(){
		this.hideAll();
		this.show(this.greatText);
	}
	showGood(){
		this.hideAll();
		this.show(this.goodText);
	}
	showMiss(){
		this.hideAll();
		this.show(this.missText);
	}
	hideAll(){
		this.greatText.visible = false;
		this.goodText.visible = false;
		this.missText.visible = false;
	}

}

export default Billboard;
