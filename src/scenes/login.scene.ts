import { Scene } from 'phaser';
import { Logger } from '../logger';
import { Bugfender } from '@bugfender/sdk';

export class LoginScene extends Scene {

    constructor() {
        super('login');
    }

    create(): void {

        // 🎨 Cambiar color de fondo (azul oscuro más bonito)
        this.cameras.main.setBackgroundColor('#1e293b');

        Logger.info('LoginScene creada');

        // Título
        this.add.text(400, 150, 'Bienvenido', {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // -------------------
        // BOTÓN INICIAR JUEGO
        // -------------------
        const startBtn = this.add.text(400, 300, 'INICIAR JUEGO', {
            fontSize: '32px',
            color: '#ffffff',
            backgroundColor: '#22c55e' // verde bonito
        })
            .setPadding(15)
            .setOrigin(0.5)
            .setInteractive();

        // Hover efecto (opcional pero queda pro)
        startBtn.on('pointerover', () => {
            startBtn.setStyle({ backgroundColor: '#16a34a' });
        });

        startBtn.on('pointerout', () => {
            startBtn.setStyle({ backgroundColor: '#22c55e' });
        });

        // Click
        startBtn.on('pointerdown', () => {
            try {
                Logger.interaction('Click en iniciar juego');
                Bugfender.log('Usuario inicia el juego');

                this.scene.start('game');
            }
            catch (error: unknown) {
                Logger.error('Error al iniciar juego', error);
                Bugfender.error('Error iniciar juego: ' + String(error));
            }
        });
    }
}