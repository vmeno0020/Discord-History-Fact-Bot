// requires discord.js
const Discord = require('discord.js');

// create a new client using discord.js (my own discord bot)
const client = new Discord.Client();

// prefix (thing you put at start of command to activate bot)
const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Facts Bot is online!');
});

// code the event (check if message started with prefix or not and if bot initated command itself)
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); 
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args)
    }
    else if(command === 'Axis') {
        message.channel.send('Germany, Italy, and Japan');
    }
    else if(command === 'Allies') {
        message.channel.send('France, Great Britain, United States, and the Soviet Union');
    }
    else if(command === 'Cram') {
        client.commands.get('Cram').execute(message, args)
    }
});

// log into the app

client.login('ODY0NTY3NTY0Mzk0NjkyNjU4.YO3VSg.PxrWKSMWOmel6bX2SAx9LFy6-i4');