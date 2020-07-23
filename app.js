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
      res.send('success');
    })
    .catch(function (error) {
      res.send('fail');
    });
});

app.post('/pushMessage', (req, res) => {
  bot
    .push(req.body.to, req.body.message)
    .then(() => {
      res.send('success');
    })
    .catch(function (error) {
      res.send('fail');
    });
});

app.post('/pushImage', (req, res) => {
  bot
    .pushImage(req.body.to, req.body.image, req.body.thumbnail)
    .then(() => {
      res.send('success');
    })
    .catch(function (error) {
      res.send('fail');
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('‘listening 3000…’');
});

bot
  .on('message', function (event) {
    var userId = event.source.userId;
    var replyMsg = `${event.message.text}`;
    bot.getUserProfile(userId).then((x) => {
      event
        .reply(replyMsg + '\nuserId:' + userId + '\nuserName:' + x.displayName)
        .then(function (data) {
          console.log('ok');
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  })
  .on('follow', function (event) {
    var userId = event.source.userId;
    bot.getUserProfile(userId).then((x) => {
      event
        .reply('Hello!\nuserId:' + userId + '\nuserName:' + x.displayName)
        .then(function (data) {
          console.log('ok');
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  });
