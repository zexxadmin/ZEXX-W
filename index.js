const { sessionID, prefix } = require('./config');
const { default: makeWASocket } = require('maher-zubair-baileys'); // Assuming this is the correct Baileys import for your version
const menu = require('./plugins/menu'); // Import the menu plugin

async function startBot() {
    const bot = makeWASocket({
        auth: { session: sessionID }, // Use session ID from config.js
        logger: undefined,
    });

    bot.ev.on('messages.upsert', async (message) => {
        const msg = message.messages[0];
        if (!msg.message) return;

        const text = msg.message.conversation || '';
        if (text.startsWith(prefix)) {
            const command = text.slice(prefix.length).trim().split(' ')[0];

            if (command === 'menu') {
                // Send the menu when the .menu command is detected
                const menuText = menu.getMenu();
                await bot.sendMessage(msg.key.remoteJid, { text: menuText });
            }
            // Add additional command handling logic here if needed
        }
    });

    console.log('Bot is running...');
}

startBot();