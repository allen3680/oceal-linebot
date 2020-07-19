'use strict';
const result = require('dotenv').config();
if (result.error) throw result.error;

const linebot = require('linebot');
const Express = require('express');
const BodyParser = require('body-parser');

// const line = require("@line/bot-sdk");

// const client = new line.Client({
//   channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
// });

// const richmenu = {
//   select: true,
//   size: {
//     width: 2500,
//     height: 1686,
//   },
//   name: "firstMenu",
//   chatBarText: "目錄",
// };

// client.createRichMenu(richmenu).then((richMenuId) => console.log(richMenuId));

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
      res.send('broadcast ok' + `使用者 ID: ${event.source.userId}`);
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
  // get user message from `event.message.text`
  // reply same message
  var replyMsg = `${event.message.text}`;
  event
    .reply(replyMsg)
    .then(function (data) {
      console.log('ok');
    })
    .catch(function (error) {
      console.error(error);
    });
});
