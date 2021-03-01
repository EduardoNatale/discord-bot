const Discord = require("discord.js");
require("dotenv/config");

const token = process.env.discordtoken;

var client;

client = new Discord.Client();

client.login(token);

module.exports = client;
