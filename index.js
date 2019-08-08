require("dotenv").config();
const keys = require("./keys.js");
const moment = require("moment");
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === '!ping') {
 msg.reply('pong');
 }
 });

client.login(keys.token);

