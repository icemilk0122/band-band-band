import Hud from '../prefabs/hud';
import BanjoString from '../prefabs/banjostring';
import Billboard from '../prefabs/billboard';

class Game extends Phaser.State {
  constructor() {
    super();
    this.timer = 0;
    this.strings = [];
    this.billboard = [];
    this.hud = [];
  }

  create() {
    var gameBg = this.add.sprite(this.world.centerX, 0, 'gameBg1');
    gameBg.anchor.set(0.5, 0);
    for(var index=0; index<STRING_KEYS.length; index++) {
      //var mybillboard = billboard[Math.floor(index/2)];
      var string = new BanjoString(this.game, index, STRING_KEYS[index]);
      string.onHit((type,stringNumber)=>{
        //TODO: Implement strategy pattern here!
        switch(type) {
          case "GREAT":
            this.billboard[Math.floor((stringNumber-1)/2)].showGreat();
            this.hud[Math.floor((stringNumber-1)/2)].score();
            break;
          case "GOOD":
            this.billboard[Math.floor((stringNumber-1)/2)].showGood();
            this.hud[Math.floor((stringNumber-1)/2)].score();
            break;
          case "MISS":
            this.billboard[Math.floor((stringNumber-1)/2)].showMiss();
            this.hud[Math.floor((stringNumber-1)/2)].miss();
            break;
        }
      });
      this.strings.push(string);
    }
    for(var index=0; index<5; index++) {
      var gameBar = this.add.sprite(GAME_WIDTH-385*index-100-STRING_WIDTH, 793, 'common_bar'+(index+1));
      gameBar.anchor.set(0.5, 0);
      this.billboard.push(new Billboard(this.game, GAME_WIDTH-385*index-52-STRING_WIDTH));
      this.hud.push(new Hud(this.game, GAME_WIDTH-385*index-52-STRING_WIDTH));
    }
    this.game.time.events.loop(Phaser.Timer.SECOND, this.setNote, this);
    this.music = this.game.add.audio('bgm');
    this.music.play();
    this.music.onStop.add(()=>{
      this.endGame();
    });
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
