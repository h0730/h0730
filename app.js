const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Loaded.');
});

client.on('message', message => {
   if (message.content === 'ping') {
    message.reply('Hello');
   }
});

client.login(process.env.NDg1MDYyNTEzNjM4MjQ0Mzcy.DmwSVg.zFP0Uc-RpiAjLkqlo8UjOmLdROk);
