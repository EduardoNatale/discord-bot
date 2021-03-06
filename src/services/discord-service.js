const Discord = require('discord.js');

const token = process.env.discordtoken;

global.discordClient = new Discord.Client();

global.discordClient.login(token);
