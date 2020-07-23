'use strict';
import { questionList, quickReply } from './question-list';

function reply(event) {
  var userId = event.source.userId;
  var replyMsg = `${event.message.text}`;

  if (replyMsg == '請問') {
    event.reply(questionList);
    return;
  }

  if (/pdf/i.test(replyMsg)) {
    event.reply('pdf');
    return;
  }

  if (replyMsg == '問題一') {
    event.reply('答案一');
    return;
  }
  if (replyMsg == '問題二') {
    event.reply('答案二');
    return;
  }
  if (replyMsg == '問題三') {
    event.reply('答案三');
    return;
  }
  if (replyMsg == '問題四') {
    event.reply(quickReply);
    return;
  }

  event.reply(replyMsg + '\nuserId:' + userId);
  return;
}

export default reply;
