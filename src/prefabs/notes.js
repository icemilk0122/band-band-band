//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class NotesHandler extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game,string) {
    super(game);
		this.game = game;
		this.string = string;
		this.notes = [];
		this.onHit = function(){};
  }
	add() {
		this.notes.push(new Note(this.game, this.string));
	}
	update() {
		for(var i in this.notes) {
			this.notes[i].move();
		}
		if (this.notes.length > 0)	{
			if (this.notes[0].sprite.y > GAME_HEIGHT-300) {
				this.onHit("MISS",this.string.stringNumber);
				this.removeNote();
			}
		}
	}
	checkCollission(collisionArea){
		var first = this.notes[0];
		if (first !== undefined){
			var firstEndDiff = collisionArea.y - first.sprite.y;
			var secondEndDiff = (collisionArea.y-collisionArea.height) - (first.sprite.y-first.sprite.height);
			var match = (Math.abs(firstEndDiff)+Math.abs(secondEndDiff))/2;
			if (match <= first.sprite.height) {
				this.removeNote();
				if (match <= 5)
					this.onHit("GREAT",this.string.stringNumber);
				else
					this.onHit("GOOD",this.string.stringNumber);
			}
		}
	}
	removeNote(){
		var note = this.notes.shift();
		note.destroy();
	}


}

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Note extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game,string) {
    super(game);
		this.game = game;
    this.string = string;
    if(this.string.stringNumber%2 == 1)
    {
      this.sprite = game.add.sprite(string.sprite.x+2, 0 , 'button_blue');
    }else {
      this.sprite = game.add.sprite(string.sprite.x+2, 0 , 'button_red');
    }

  }
	move(){
		this.sprite.y+=2;
	}
	destroy(){
		this.sprite.destroy();
		this.sprite = undefined;
	}
}

export default NotesHandler;
