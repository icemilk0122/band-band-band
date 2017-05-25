import NotesHandler from '../prefabs/notes';

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class BanjoString extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game,index, key) {
    super(game);
		this.game = game;
		this.name = key;
		this.stringNumber = index+1;
    this.sprite = this.game.add.sprite(getPosition(this.stringNumber), 0, 'common_string'+(Math.floor(index/2)+1));  
		this.notes = new NotesHandler(this.game,this);
		this.key = this.game.input.keyboard.addKey(key);
		this.key.onDown.add(this.pulse, this);
		this.button = new Button(this.game,this);

		function getPosition(stringNumber) {
			// var offset = (stringNumber/2 == 0)?STRING_OFFSET:STRING_OFFSET*3;
			// return GAME_WIDTH - ((STRING_OFFSET + STRING_WIDTH) * stringNumber) - (Math.floor((stringNumber+1)/2)*150)
			var offset = Math.floor((stringNumber-1)/2)*214;
			return GAME_WIDTH-52-(STRING_WIDTH * stringNumber)-offset;
		}
  }

	setNote() {
		this.notes.add();
	}
	update() {
		this.notes.update();
	}
	pulse() {
		this.button.push();
		var collisionType = this.notes.checkCollission(this.button.getCollisionArea());
	}
	onHit(callback) {
		this.notes.onHit = callback;
	}

}

export default BanjoString;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Button extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, string) {
    super(game);
		this.game = game;
		this.sprite = this.game.add.sprite(string.sprite.x+2, string.sprite.y+740, 'button');
		this.push = function(){
			sprite = this.sprite;
			startInterval();
		}

		var timer;
		var sprite;

		function startInterval() {
			resetInterval();
			timer = setInterval(tick, 200);
			sprite.frame = 1;
		}
		function tick() {
			resetInterval();
			sprite.frame = 0;
		}
		function resetInterval() {
			clearInterval(timer);
			timer = undefined;
		}
  }

	getCollisionArea()
	{
		return {
			y:this.sprite.y,
			height:this.sprite.height
		};
	}
}
