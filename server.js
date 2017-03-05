var Botkit = require('botkit');
const aws = require('aws-sdk');

let s3 = new aws.S3({
  elbanditoSlackBotToken: process.env.elbanditoSlackBotToken
});

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: s3.elbanditoSlackBotToken
}).startRTM()

// give the bot something to listen for.
controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});
