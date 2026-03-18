import * as Phaser from 'phaser';
import { PreloaderScene } from './scenes/preloader.scene';
import { GameScene } from './scenes/game.scene';
import { LoginScene } from './scenes/login.scene';
import { Logger } from './logger';
import { Bugfender } from '@bugfender/sdk';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: { default: 'arcade', arcade: { gravity: { x: 0, y: 500 } } },
    scene: [LoginScene, PreloaderScene, GameScene],
    backgroundColor: '#11bfef',
};

Bugfender.init({ appKey: '4BaEnz2L9u572Ch0gRRzeNopAGwsPD1a' });

Logger.info('Inicializando juego Phaser');

let game: Phaser.Game;

try {
    game = new Phaser.Game(config);
    Logger.info('Juego creado correctamente');
}
catch (error: unknown) {
    Logger.error('Error iniciando el juego', error);
    Bugfender.error('Crash: ' + String(error));
}

export default game!;