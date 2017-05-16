import Boot from './states/boot';
import Game from './states/game';
import Main from './states/main';
import Menu from './states/menu';
import Preloader from './states/preloader';
import Gameover from './states/gameover';


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'band-band-game');
//airconsole
// var deviceIds = [];
// var airconsole = new AirConsole();

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('main', new Main());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');
