import { Bugfender } from '@bugfender/sdk';

export const Logger = {
    info(message: string, context: Record<string, unknown> = {}): void {
        Bugfender.log(`[INFO] ${message} ${JSON.stringify(context)}`);
    },

    interaction(message: string, context: Record<string, unknown> = {}): void {
        Bugfender.log(`[INTERACTION] ${message} ${JSON.stringify(context)}`);
    },

    error(message: string, error: unknown = null): void {
        if (error instanceof Error) {
            Bugfender.error(`[ERROR] ${message} - ${error.message}`);
        }
        else {
            Bugfender.error(`[ERROR] ${message} - ${String(error)}`);
        }
    }
};