'use strict';
const result = require('dotenv').config();
if (result.error) throw result.error;
const linebot = require('linebot');
const Express = require('express');
const BodyParser = require('body-parser');
const replyHelper = require('./src/helper/reply-helper');
const questionHelper = require('./src/helper/question-helper');
const questionList = require('./src/helper/question-list');

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
      res.send('fail:　', error);
    });
});

app.post('/pushMessage', (req, res) => {
  bot
    .push(req.body.to, req.body.message)
    .then(() => {
      res.send('success');
    })
    .catch(function (error) {
      res.send('fail:　', error);
    });
});

app.post('/pushImage', (req, res) => {
  bot
    .pushImage(req.body.to, req.body.image, req.body.thumbnail)
    .then(() => {
      res.send('success');
    })
    .catch(function (error) {
      res.send('fail:　', error);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('‘listening 3000…’');
});

bot
  .on('message', function (event) {
    try {
      replyHelper(event);
      event.reply(questionList.selectProduct).then((res) => {
        console.log(res);
        questionHelper.updateUserProduct(event.userId, res);
      });

      // bot
      //   .push(event.source.userId, questionList.selectProduct)
      //   .then(() => {
      //     event.reply();
      //   })
      //   .catch(function (error) {
      //     res.send('fail:　', error);
      //   });
      // var userId = event.source.userId;
      // bot.getUserProfile(userId).then((x) => {
      //   saveUserProfile(x);
      // });
    } catch (error) {
      console.log(error);
    }
  })
  .on('follow', function (event) {
    try {
      questionHelper.saveUserProfile(event);
      // bot
      //   .push(event.source.userId, questionList.selectProduct)
      //   .then((response) => {
      //     res.send('success');
      //   })
      //   .catch(function (error) {
      //     res.send('fail:　', error);
      //   });
    } catch (error) {
      console.log(error);
    }
  });
