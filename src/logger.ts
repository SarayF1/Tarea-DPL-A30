import { Bugfender } from '@bugfender/sdk';

export const Logger = {

    info: function (message: string, context: Record<string, unknown> = {}): void {
        const timestamp = new Date().toISOString();
        console.log(`[INFO] ${timestamp} - ${message}`, context);
        Bugfender.log(`[INFO] ${message} ${JSON.stringify(context)}`);
    },

    interaction: function (message: string, context: Record<string, unknown> = {}): void {
        const timestamp = new Date().toISOString();
        console.log(`[INTERACTION] ${timestamp} - ${message}`, context);
        Bugfender.log(`[INTERACTION] ${message} ${JSON.stringify(context)}`);
    },

    error: function (message: string, error: unknown = null): void {
        const timestamp = new Date().toISOString();

        if (error instanceof Error) {
            console.error(`[ERROR] ${timestamp} - ${message}`, error);
            Bugfender.error(`[ERROR] ${message} - ${error.message}`);
        } else {
            console.error(`[ERROR] ${timestamp} - ${message}`, String(error));
            Bugfender.error(`[ERROR] ${message} - ${String(error)}`);
        }
    }

};