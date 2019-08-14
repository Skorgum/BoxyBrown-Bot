require("dotenv").config();
const keys = require("./keys.js");
const config = require("./config.json")
const moment = require("moment");
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

const reminded = function() {
    msg.reply('I did the thing!')
};

client.on('message', msg => {
 if (msg.content === '$ping') {
 msg.reply('pong');
 } else if (msg.content === '$remindme') {
     msg.reply('Ok I will do the thing.');
    setTimeout(reminded(), 5000)
 }
 });

client.login(keys.token);

