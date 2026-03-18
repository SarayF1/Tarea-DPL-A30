import { Scene } from 'phaser';
import { Logger } from '../logger';
import { Bugfender } from '@bugfender/sdk';

export class LoginScene extends Scene {

    constructor() {
        super('login');
    }

    create(): void {
        Logger.info('LoginScene creada');

        this.add.text(400, 100, 'Login', { fontSize: '48px', color: '#ffffff' }).setOrigin(0.5);

        const html = `
            <input type="text" id="username" placeholder="Usuario" style="font-size: 24px; margin: 5px;">
            <input type="password" id="password" placeholder="Contraseña" style="font-size: 24px; margin: 5px;">
            <button id="loginBtn" style="font-size: 24px; margin: 5px;">Login</button>
        `;
        this.add.dom(400, 250).createFromHTML(html);

        const loginBtn = document.getElementById('loginBtn');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                try {
                    Logger.interaction('Click en login');

                    const username = (document.getElementById('username') as HTMLInputElement).value;
                    const password = (document.getElementById('password') as HTMLInputElement).value;

                    if (!username || !password) {
                        Logger.error('Login fallido: campos vacíos');
                        Bugfender.error('Login fallido: campos vacíos');
                        return;
                    }

                    Logger.info('Login exitoso', { username });
                    this.scene.start('game');
                }
                catch (error: unknown) {
                    Logger.error('Error en login', error);
                    Bugfender.error('Error en login: ' + String(error));
                }
            });
        }
    }
}