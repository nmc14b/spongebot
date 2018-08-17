const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');
var mode = false;

client.on('ready', () => {
  console.log('I am ready');
});

client.on('message', async message => {
  if (!message.author.bot) {
    if (message.content === '!spongify') {
      message.channel.send('Now sponging!');
      mode = true;
    } else if (message.content === '!spongify -off') {
      message.channel.send('No longer sponging!');
      mode = false;
    }
    if (mode == true && message.content != '!spongify') {
      message.channel.send(spongify(message.content));
    }
  }
});

function spongify(content){
  var sponged = content;
  for (var i = 0; i < sponged.length; i++){
    var r = Math.round(Math.random());
    if (r == 1) {
      sponged = setCharAt(sponged, i, sponged.charAt(i).toUpperCase());
    } else {
      sponged = setCharAt(sponged, i, sponged.charAt(i).toLowerCase());
    }
  }
  return sponged;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

client.login(auth.token);
