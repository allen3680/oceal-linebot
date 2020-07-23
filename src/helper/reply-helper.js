'use strict';
const result = require('dotenv').config();
if (result.error) throw result.error;
const linebot = require('linebot');
const Express = require('express');
const BodyParser = require('body-parser');
const questionList = require('./question-list');

const bot = linebot({
  channelId: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LIEN_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

class ReplyHelper {
  constructor() {}

  reply(event) {
    var userId = event.source.userId;
    var replyMsg = `${event.message.text}`;

    if (replyMsg == '請問') {
      event.reply(event.replyToken, questionList);
    }

    if (/pdf/.test(replyMsg)) {
      event.reply('pdf');
    }

    if (replyMsg == '問題一') {
      event.reply('答案一');
    }
  }
}

module.exports = ReplyHelper;
