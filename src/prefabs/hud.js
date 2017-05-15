//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Hud extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game) {
    super(game);
		this.game = game;
		this.missCount = 0;
		this.currentScore = 0;
		this.scoreText = this.game.add.text(10, 10, "score: "+this.currentScore, { font: '12px Arial', fill: '#fff' });
		this.missText = this.game.add.text(10, 24, "miss: "+this.missCount, { font: '12px Arial', fill: '#f00' });
  }

	score(){
		this.currentScore++;
		this.scoreText.text = "score: "+this.currentScore;
	}
	miss(){
		this.missCount++;
		this.missText.text = "miss: "+this.missCount;
	}

}

export default Hud;
