class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    var coverBg = this.add.sprite(this.world.centerX, 0, 'endBg');
    coverBg.anchor.set(0.5, 0);

    this.saveVarsToLocalStorage();

    this.input.onDown.add(this.restartGame, this);
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
