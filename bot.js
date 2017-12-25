const Discord = require('discord.js');
const client = new Discord.Client();

client.on'ready', () => {
    console.lg('I am ready!');
});

client.on('message'', message => {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

// THIS MUST BE  THIS WAY
client.login(process.env.MzkxMzI5Njg1MzczNTgzMzYw.DSKUiA.0bhIZZ3pA9sE98CE6vajsu7mebY);
