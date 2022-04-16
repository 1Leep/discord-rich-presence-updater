const { activity } = require('../../config.json');
const colorful = require('./colorful');
const mosaic = require('../utils/mosaic');

module.exports = async (client) => {
    await client.setActivity(activity);
    
    console.log(colorful('\n\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
    console.log(`\n     Rich Presence is running to user: \x1b[96m${client.user.username}#${client.user.discriminator}\x1b[0m`);
    console.log(colorful('\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
    console.log(`\n\n${mosaic}`);
};