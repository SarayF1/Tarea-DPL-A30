import { Scene } from 'phaser';
import { Logger } from '../logger';
import { Bugfender } from '@bugfender/sdk';

export class LoginScene extends Scene {
    private usernameInput!: Phaser.GameObjects.DOMElement;
    private passwordInput!: Phaser.GameObjects.DOMElement;

    constructor() {
        super('login');
    }

    create(): void {
        Logger.info('LoginScene creada');

        // Título
        this.add.text(400, 100, 'Login', { fontSize: '48px', color: '#ffffff' }).setOrigin(0.5);

        // Crear formulario usando DOM Elements
        const html = `
            <input type="text" id="username" placeholder="Usuario" style="font-size: 24px; margin: 5px;">
            <input type="password" id="password" placeholder="Contraseña" style="font-size: 24px; margin: 5px;">
            <button id="loginBtn" style="font-size: 24px; margin: 5px;">Login</button>
        `;
        this.add.dom(400, 250).createFromHTML(html);

        // Acceso al botón
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                try {
                    const username = (document.getElementById('username') as HTMLInputElement).value;
                    const password = (document.getElementById('password') as HTMLInputElement).value;

                    if (!username || !password) {
                        Logger.error('Login fallido: usuario o contraseña vacíos');
                        Bugfender.error('Login fallido: campos vacíos');
                        return;
                    }

                    Logger.info('Login exitoso', { username });
                    // Pasar a GameScene
                    this.scene.start('game');

                } catch (error: any) {
                    Logger.error('Error en login', error);
                    Bugfender.error('Error en login: ' + error);
                }
            });
        }
    }
}