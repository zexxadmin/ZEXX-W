// plugins/menu.js
module.exports = {
    getMenu: () => {
        return `
            *Bot Menu*
            1. .menu - Show this menu
            2. .help - Get help
            3. .afk - Set AFK
            4. .status - Check bot status
            `; // Add any other commands you want here
    }
};