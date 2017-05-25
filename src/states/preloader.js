class Preloader extends Phaser.State {

  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    //setup loading bar
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(this.asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  update() {
      if (this.ready) {
        this.game.state.start('main');
      }
  }

  loadResources() {
      // load your resources here
      //menu
      this.game.load.image('menuBg', 'assets/menu/menu_fake.png', 1920, 1080);
      //this.game.load.image('menuBg', 'assets/menu/tv-choose_part1-01.png', 1920, 1080);
      this.game.load.image('menu＿bobi_off', 'assets/menu/bobi-off.png');
      this.game.load.image('menu＿bobi_ing', 'assets/menu/bobi-ing.png');
      this.game.load.image('menu＿bobi_ok', 'assets/menu/bobi-ok.png');
      this.game.load.image('menu＿momo_off', 'assets/menu/momo-off.png');
      this.game.load.image('menu＿momo_ing', 'assets/menu/momo-ing.png');
      this.game.load.image('menu＿momo_ok', 'assets/menu/momo-ok.png');
      this.game.load.image('menu＿chipa_off', 'assets/menu/chipa-off.png');
      this.game.load.image('menu＿chipa_ing', 'assets/menu/chipa-ing.png');
      this.game.load.image('menu＿chipa_ok', 'assets/menu/chipa-ok.png');
      this.game.load.image('menu＿juju_off', 'assets/menu/juju-off.png');
      this.game.load.image('menu＿juju_ing', 'assets/menu/juju-ing.png');
      this.game.load.image('menu＿juju_ok', 'assets/menu/juju-ok.png');
      this.game.load.image('menu＿dodo_off', 'assets/menu/dodo-off.png');
      this.game.load.image('menu＿dodo_ing', 'assets/menu/dodo-ing.png');
      this.game.load.image('menu＿dodo_ok', 'assets/menu/dodo-ok.png');
      //game
      this.game.load.image('common_string5', 'assets/game/green.png', 85, 830);
      this.game.load.image('common_string4', 'assets/game/orange.png', 85, 830);
      this.game.load.image('common_string3', 'assets/game/pink.png', 85, 830);
      this.game.load.image('common_string2', 'assets/game/yellow.png', 85, 830);
      this.game.load.image('common_string1', 'assets/game/blue.png', 85, 830);
      this.game.load.image('common_bar5', 'assets/game/bobi.png', 294, 153);
      this.game.load.image('common_bar4', 'assets/game/momo.png', 294, 153);
      this.game.load.image('common_bar3', 'assets/game/chipa.png', 294, 153);
      this.game.load.image('common_bar2', 'assets/game/juju.png', 294, 153);
      this.game.load.image('common_bar1', 'assets/game/dodo.png', 294, 153);
      this.game.load.spritesheet('button', 'assets/button.png', 82, 82, 2);
      this.game.load.image('button_blue', 'assets/game/bluebeat.png', 82, 82);
      this.game.load.image('button_red', 'assets/game/redbeat.png', 82, 82);
      this.game.load.audio('bgm', ['assets/audio/JoshWoodward-AirplaneMode.mp3']);
      this.game.load.image('mainBg', 'assets/tv-open-02.png', 1920, 1080);
      this.game.load.image('gameBg1', 'assets/game/tv-play-01.png', 1920, 1080);
      //end
      this.game.load.image('endBg', 'assets/end/end-1-01.png', 1920, 1080);
      this.game.load.image('end_1_1', 'assets/end/end_1_1.png');
      this.game.load.image('end_1_2', 'assets/end/end_1_2.png');
      this.game.load.image('end_1_3', 'assets/end/end_1_3.png');
      this.game.load.image('end_1_4', 'assets/end/end_1_4.png');
      this.game.load.image('end_1_5', 'assets/end/end_1_5.png');

      this.game.load.image('end_2_1', 'assets/end/end_2_1.png');
      this.game.load.image('end_2_2', 'assets/end/end_2_2.png');
      this.game.load.image('end_2_3', 'assets/end/end_2_3.png');
      this.game.load.image('end_2_4', 'assets/end/end_2_4.png');
      this.game.load.image('end_2_5', 'assets/end/end_2_5.png');

      this.game.load.image('end_3_1', 'assets/end/end_3_1.png');
      this.game.load.image('end_3_2', 'assets/end/end_3_2.png');
      this.game.load.image('end_3_3', 'assets/end/end_3_3.png');
      this.game.load.image('end_3_4', 'assets/end/end_3_4.png');
      this.game.load.image('end_3_5', 'assets/end/end_3_5.png');

      this.game.load.image('end_4_1', 'assets/end/end_4_1.png');
      this.game.load.image('end_4_2', 'assets/end/end_4_2.png');
      this.game.load.image('end_4_3', 'assets/end/end_4_3.png');
      this.game.load.image('end_4_4', 'assets/end/end_4_4.png');
      this.game.load.image('end_4_5', 'assets/end/end_4_5.png');

      this.game.load.image('end_5_1', 'assets/end/end_5_1.png');
      this.game.load.image('end_5_2', 'assets/end/end_5_2.png');
      this.game.load.image('end_5_3', 'assets/end/end_5_3.png');
      this.game.load.image('end_5_4', 'assets/end/end_5_4.png');
      this.game.load.image('end_5_5', 'assets/end/end_5_5.png');
      //
      // this.game.load.image('end_2_1', 'assets/end/momo/momo-01.png');
      // this.game.load.image('end_2_2', 'assets/end/momo/momo-02.png');
      // this.game.load.image('end_2_3', 'assets/end/momo/momo-03.png');
      // this.game.load.image('end_2_4', 'assets/end/momo/momo-04.png');
      // this.game.load.image('end_2_5', 'assets/end/momo/momo-05.png');
      // //
      // this.game.load.image('end_juju_1', 'assets/end/juju/juju-01.png');
      // this.game.load.image('end_juju_2', 'assets/end/juju/juju-02.png');
      // this.game.load.image('end_juju_3', 'assets/end/juju/juju-03.png');
      // this.game.load.image('end_juju_4', 'assets/end/juju/juju-04.png');
      // this.game.load.image('end_juju_5', 'assets/end/juju/juju-05.png');
      // //
      // this.game.load.image('end_dudu_1', 'assets/end/dudu/dudu-01.png');
      // this.game.load.image('end_dudu_2', 'assets/end/dudu/dudu-02.png');
      // this.game.load.image('end_dudu_3', 'assets/end/dudu/dudu-03.png');
      // this.game.load.image('end_dudu_4', 'assets/end/dudu/dudu-04.png');
      // this.game.load.image('end_dudu_5', 'assets/end/dudu/dudu-05.png');
      // //
      // this.game.load.image('end_chipa_1', 'assets/end/chipa/chipa-01.png');
      // this.game.load.image('end_chipa_2', 'assets/end/chipa/chipa-02.png');
      // this.game.load.image('end_chipa_3', 'assets/end/chipa/chipa-03.png');
      // this.game.load.image('end_chipa_4', 'assets/end/chipa/chipa-04.png');
      // this.game.load.image('end_chipa_5', 'assets/end/chipa/chipa-05.png');
  }

  onLoadComplete() {
    this.ready = true;
  }
}

export default Preloader;
