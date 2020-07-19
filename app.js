'use strict';
const result = require('dotenv').config();
if (result.error) throw result.error;

const linebot = require('linebot');
const Express = require('express');
const BodyParser = require('body-parser');

// Line Channel info
const bot = linebot({
  channelId: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LIEN_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();
const app = Express();
// for line webhook usage
app.post('/linewebhook', linebotParser);

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

// a http endpoint for trigger broadcast
app.post('/broadcast', (req, res) => {
  bot
    .broadcast(req.body.message)
    .then(() => {
      res.send('broadcast ok');
    })
    .catch(function (error) {
      res.send('broadcast fail');
    });
});

app.post('/push', (req, res) => {
  bot
    .push(req.body.to, req.body.message)
    .then(() => {
      res.send('broadcast ok');
    })
    .catch(function (error) {
      res.send('broadcast fail');
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('‘listening 3000…’');
});

// echo user message
bot.on('message', function (event) {
  var userId = event.source.userId;
  var replyMsg = `${event.message.text}`;
  event
    .reply(replyMsg + ' userId:' + userId)
    .then(function (data) {
      console.log('ok');
    })
    .catch(function (error) {
      console.error(error);
    });
});
