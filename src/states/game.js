import Hud from '../prefabs/hud';
import BanjoString from '../prefabs/banjostring';
import Billboard from '../prefabs/billboard';

class Game extends Phaser.State {
  constructor() {
    super();
    this.timer = 0;
    this.strings = [];
    this.billboard = [];
  }

  create() {
    this.hud = new Hud(this.game);
    for(var index=0; index<STRING_KEYS.length; index++) {
      //var mybillboard = billboard[Math.floor(index/2)];
      var string = new BanjoString(this.game, index, STRING_KEYS[index]);
      string.onHit((type)=>{
        //TODO: Implement strategy pattern here!
        switch(type) {
          case "GREAT":
            this.billboard[Math.floor((string.stringNumber-1)/2)].showGreat();
            this.hud.score();
            break;
          case "GOOD":
            this.billboard[Math.floor((string.stringNumber-1)/2)].showGood();
            this.hud.score();
            break;
          case "MISS":
            this.billboard[Math.floor((string.stringNumber-1)/2)].showMiss();
            this.hud.miss();
            break;
        }
      });
      this.strings.push(string);
    }
    for(var index=0; index<5; index++) {
      this.billboard.push(new Billboard(this.game, GAME_WIDTH-380*index-52-STRING_WIDTH));
    }
    this.game.time.events.loop(Phaser.Timer.SECOND, this.setNote, this);
    this.music = this.game.add.audio('bgm');
    //music.play();
  }

  update() {
    for(var i in this.strings)
    {
      this.strings[i].update();
    }
  }

  setRandomNote() {
    var rand = Math.floor(Math.random() * this.strings.length);
    this.strings[rand].setNote();
  }

  setNote() {
    for(var index=0; index<STRING_KEYS.length; index++) {
      if(STRING_Notes["STRING_"+(index+1)][this.timer]==1)
      {
        this.strings[index].setNote();
      }
    }
    this.timer++;
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
