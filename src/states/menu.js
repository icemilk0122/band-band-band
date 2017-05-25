class Menu extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    var menuBg = this.add.sprite(this.world.centerX, 0, 'menuBg');
    menuBg.anchor.set(0.5, 0);
    menuBg.scale.setTo(0.6, 0.6);


    // var bobi = this.add.sprite(this.world.centerX-600, 0, 'menu＿bobi_off');
    // bobi.anchor.set(0.5, 0);
    //
    // var dodo = this.add.sprite(this.world.centerX+400, 0, 'menu＿dodo_off');
    // dodo.anchor.set(0.5, 0);
    //
    // var juju = this.add.sprite(this.world.centerX-400, 0, 'menu＿juju_off');
    // juju.anchor.set(0.5, 0);
    //
    // var momo = this.add.sprite(this.world.centerX-200, 0, 'menu＿momo_off');
    // momo.anchor.set(0.5, 0);
    //
    // var chipa = this.add.sprite(this.world.centerX+200, 0, 'menu＿chipa_off');
    // chipa.anchor.set(0.5, 0);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame () {
    this.game.state.start('game');
  }

}

export default Menu;
