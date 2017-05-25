class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    var coverBg = this.add.sprite(this.world.centerX, 0, 'endBg');
    coverBg.anchor.set(0.5, 0);

    this.saveVarsToLocalStorage();

    this.input.onDown.add(this.restartGame, this);

    var scores = [];
    for(var i = 0;i<this.game.state.states['game'].hud.length;i++)
    {
      scores.push(this.game.state.states['game'].hud[i].currentScore);
    }
    var orderscores = scores.slice(0);
    orderscores.sort(function(a, b){return b-a});
    console.log(orderscores);
    var no5 = scores.indexOf(orderscores[4])+1;
    scores[no5-1] = -1;
    var no5doll = this.add.sprite(this.world.centerX-700, 200, 'end_'+no5+'_5');
    no5doll.anchor.set(0.5, 0);
    var no4 = scores.indexOf(orderscores[3])+1;
    scores[no4-1] = -1;
    var no4doll = this.add.sprite(this.world.centerX+700, 200, 'end_'+no4+'_4');
    no4doll.anchor.set(0.5, 0);
    var no3 = scores.indexOf(orderscores[2])+1;
    scores[no3-1] = -1;
    var no3doll = this.add.sprite(this.world.centerX-400, 200, 'end_'+no3+'_3');
    no3doll.anchor.set(0.5, 0);
    var no2 = scores.indexOf(orderscores[1])+1;
    scores[no2-1] = -1;
    var no2doll = this.add.sprite(this.world.centerX+400, 200, 'end_'+no2+'_2');
    no2doll.anchor.set(0.5, 0);
    var no1 = scores.indexOf(orderscores[0])+1;
    scores[no1-1] = -1;
    var no1doll = this.add.sprite(this.world.centerX, 0, 'end_'+no1+'_1');
    no1doll.anchor.set(0.5, 0);
  }

  saveVarsToLocalStorage(){

  }

  resetGlobalVariables(){

  }

  update() {}

  restartGame () {
    this.resetGlobalVariables();
    this.game.state.start('main');
  }

}

export default Menu;
