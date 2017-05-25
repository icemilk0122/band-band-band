import Boot from './states/boot';
import Game from './states/game';
import Main from './states/main';
import Menu from './states/menu';
import Preloader from './states/preloader';
import Gameover from './states/gameover';


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'band-band-game');
//airconsole
var deviceIds = [];
var airconsole = new AirConsole();

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('main', new Main());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');

airconsole.onConnect = function(deviceId){
  airconsole.message(deviceId,{type:"sendID",id:deviceId});
  if (deviceIds.indexOf(deviceId) == -1) {
      // pushing the device id
      deviceIds.push(deviceId);
  }
}
//airconsole
airconsole.onMessage = function(deviceId, data) {
    console.log(data.type);
    // checking if the deviceId is already in deviceIds vector, and if it's not...
    if(data.type == "startMenu")
    {
      airconsole.broadcast({type:"gamemenu"});
      game.state.start('menu');
    }
    if(data.type == "sendReady")
    {
        airconsole.broadcast({type:"gamestart"});
        game.state.start('game');
    }
    if(data.type == "startGame")
    {
      switch (deviceId) {
        case 1:
            console.log('1'+','+data);
            if(data.val == '0')
            {
              game.state.states['game'].strings[9].pulse();
            }else {
              game.state.states['game'].strings[8].pulse();
            }
            break;
        case 2:
            console.log('2'+','+data);
            if(data.val == '0')
            {
              game.state.states['game'].strings[7].pulse();
            }else {
              game.state.states['game'].strings[6].pulse();
            }
            break;
        case 3:
            console.log('3'+','+data);
            if(data.val == '0')
            {
              game.state.states['game'].strings[5].pulse();
            }else {
              game.state.states['game'].strings[4].pulse();
            }
            break;
        case 4:
            console.log('4'+','+data);
            if(data.val == '0')
            {
              game.state.states['game'].strings[3].pulse();
            }else {
              game.state.states['game'].strings[2].pulse();
            }
            break;
        case 5:
            console.log('5'+','+data);
            if(data.val == '0')
            {
              game.state.states['game'].strings[1].pulse();
            }else {
              game.state.states['game'].strings[0].pulse();
            }
            break;
      }
    }
}
