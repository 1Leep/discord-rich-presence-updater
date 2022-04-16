const { clientId } = require('../config.json');
const { Client } = require('discord-rpc');
const setStatus = require('./functions/setStatus');

const client = new Client({ transport: 'ipc' });

client.on('ready', () => setStatus(client));

client.login({ clientId });