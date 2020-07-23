'use strict';
const Express = require('express');
const questionList = require('./question-list');

// class ReplyHelper {
//   constructor() {}

//   reply(event) {
//     var userId = event.source.userId;
//     var replyMsg = `${event.message.text}`;

//     if (replyMsg == '請問') {
//       event.reply(event.replyToken, questionList);
//       return;
//     }

//     if (/pdf/.test(replyMsg)) {
//       event.reply('pdf');
//       return;
//     }

//     if (replyMsg == '問題一') {
//       event.reply('答案一');
//       return;
//     }

//     event.reply(replyMsg + '\nuserId:' + userId);
//   }
// }

function reply(event) {
  var userId = event.source.userId;
  var replyMsg = `${event.message.text}`;

  if (replyMsg == '請問') {
    event.reply(event.replyToken, questionList);
    return;
  }

  if (/pdf/.test(replyMsg)) {
    event.reply('pdf');
    return;
  }

  if (replyMsg == '問題一') {
    event.reply('答案一');
    return;
  }

  event.reply(replyMsg + '\nuserId:' + userId);
  return;
}

module.exports = reply;
