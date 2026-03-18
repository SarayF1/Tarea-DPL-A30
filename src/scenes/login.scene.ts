import { Scene } from 'phaser';
import { Logger } from '../logger';
import { Bugfender } from '@bugfender/sdk';

export class LoginScene extends Scene {

    constructor() {
        super('login');
    }

    create(): void {

        // Fondo nuevo (azul claro)
        this.cameras.main.setBackgroundColor('#0ea5e9');

        Logger.info('LoginScene creada');

        // Título
        this.add.text(400, 150, 'Bienvenido', {
            fontSize: '48px',
            color: '#0f172a' // oscuro para contraste
        }).setOrigin(0.5);

        // BOTÓN
        const startBtn = this.add.text(400, 300, 'INICIAR JUEGO', {
            fontSize: '32px',
            color: '#ffffff',
            backgroundColor: '#16a34a'
        })
            .setPadding(15)
            .setOrigin(0.5)
            .setInteractive();

        startBtn.on('pointerover', () => {
            startBtn.setStyle({ backgroundColor: '#15803d' });
        });

        startBtn.on('pointerout', () => {
            startBtn.setStyle({ backgroundColor: '#16a34a' });
        });

        startBtn.on('pointerdown', () => {
            try {
                Logger.interaction('Click en iniciar juego');
                Bugfender.log('Usuario inicia el juego');

                this.scene.start('preloader');
            }
            catch (error: unknown) {
                Logger.error('Error al iniciar juego', error);
                Bugfender.error('Error iniciar juego: ' + String(error));
            }
        });
    }
}