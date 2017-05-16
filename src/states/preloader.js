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
      this.game.load.image('common_string', 'assets/blue.png', 85, 830);
      this.game.load.spritesheet('button', 'assets/button.png', 82, 82, 2);
      this.game.load.image('button_blue', 'assets/bluebeat.png', 82, 82);
      this.game.load.audio('bgm', ['assets/audio/Something_Just_Lik.mp3']);
      this.game.load.image('mainBg', 'assets/tv-open-02.png', 1920, 1080);
      this.game.load.image('endBg', 'assets/tv-end-01.png', 1920, 1080);
  }

  onLoadComplete() {
    this.ready = true;
  }
}

export default Preloader;
