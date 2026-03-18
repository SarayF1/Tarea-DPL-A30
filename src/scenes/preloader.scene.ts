import { Scene } from 'phaser';
import { Logger } from '../logger';

export class PreloaderScene extends Scene {
    constructor() {
        super('preloader');
    }

    preload(): void {
        Logger.info('Cargando assets...');

        this.load.image('acho', 'acho.png');
        this.load.image('fondo', 'fondo.png');
    }

    create(): void {
        Logger.info('PreloaderScene finalizada');

        this.scene.start('game');
    }
}