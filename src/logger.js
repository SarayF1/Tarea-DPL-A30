// logger.js

export const Logger = {

    info: function (message, context = {}) {
        const timestamp = new Date().toISOString();
        console.log(`[INFO] ${timestamp} - ${message}`, context);
    },

    interaction: function (message, context = {}) {
        const timestamp = new Date().toISOString();
        console.log(`[INTERACTION] ${timestamp} - ${message}`, context);
    },

    error: function (message, error = null) {
        const timestamp = new Date().toISOString();
        console.error(`[ERROR] ${timestamp} - ${message}`, error);
    }

};