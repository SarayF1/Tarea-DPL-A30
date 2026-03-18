import { Scene, Types } from 'phaser';
import { Logger } from '../logger';
import { Bugfender } from '@bugfender/sdk';

export class GameScene extends Scene {
    private achoThePup!: Types.Physics.Arcade.ImageWithDynamicBody;

    constructor() {
        super('game');
    }

    create(): void {

        // LOG inicio escena
        Logger.info('GameScene iniciada');

        this.add.image(400, 570, 'fondo');

        this.achoThePup = this.physics.add.image(0, 0, 'acho');

        this.achoThePup.setCollideWorldBounds(true);
        this.achoThePup.setBounce(1, 1);
        this.achoThePup.setVelocityX(300);

        // INTERACCIÓN con el personaje
        this.achoThePup.setInteractive();
        this.achoThePup.on('pointerdown', () => {
            Logger.interaction('Click en AchoThePup');
        });

        // ---------------------------
        // BOTÓN ERROR TIPO 1
        // ---------------------------
        const errorBtn1 = this.add.text(650, 50, 'Error 1', {
            backgroundColor: '#ff0000',
            color: '#ffffff'
        })
            .setPadding(10)
            .setInteractive();

        errorBtn1.on('pointerdown', () => {
            try {
                Logger.interaction('Click en botón Error 1');

                // Error manual
                throw new Error('Error de prueba tipo 1');

            } catch (error) {
                Logger.error('Error controlado tipo 1', error);
                Bugfender.error('Error tipo 1: ' + error);
            }
        });

        // ---------------------------
        // BOTÓN ERROR TIPO 2
        // ---------------------------
        const errorBtn2 = this.add.text(650, 120, 'Error 2', {
            backgroundColor: '#ff9900',
            color: '#000000'
        })
            .setPadding(10)
            .setInteractive();

        errorBtn2.on('pointerdown', () => {
            try {
                Logger.interaction('Click en botón Error 2');

                // Error forzado (undefined)
                const obj: any = null;
                console.log(obj.prop); // rompe

            } catch (error) {
                Logger.error('Error controlado tipo 2', error);
                Bugfender.error('Error tipo 2: ' + error);
            }
        });
    }
}