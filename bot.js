const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('Loaded!');
});

client.on('message', message => {
   if (message.content === 'ping'} {
    message.reply('pong');
  }
});


client.login(process.env."NDg1MDYyNTEzNjM4MjQ0Mzcy.Dm0_KQ.Z-6whtORc07xOhEaNEvkwcR7Edo");
