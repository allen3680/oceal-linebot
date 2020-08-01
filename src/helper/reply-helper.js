'use strict';
const questionList = require('./question-list');

function reply(event) {
  var userId = event.source.userId;
  var replyMsg = `${event.message.text}`;

  if (replyMsg == '請問') {
    event.reply(questionList.questionList);
    return;
  }

  if (/pdf/i.test(replyMsg)) {
    event.reply('pdf');
    return;
  }

  if (replyMsg == '如果先付費的話到時候沒獲利反而虧損的話算誰的呢?') {
    event.reply(
      '我們只能給您提供我們分析的結果，縱使在回測我們AI表現良好，我們也不會跟您做保證100%獲利。結果都是平均得到的，您交易時間拉得越長，獲利會越接近我們提供的獲利百分比。'
    );
    return;
  }
  if (replyMsg == '需要電腦或手機使用嗎?') {
    event.reply('是的，您將透過自己的手機或電腦下單');
    return;
  }
  if (replyMsg == '勝率大概多少呢?') {
    event.reply(
      '2011-2019的勝率每個商品略有不同，台灣加權指數及金融指數都在55-60左右，電子期在70-75%'
    );
    return;
  }
  if (replyMsg == '請問你們是做什麼商品為主?') {
    event.reply(
      '目前針對的商品為電子指數，金融指數，台灣加權指數的期貨，以及諸多外匯保證金。'
    );
    return;
  }
  if (replyMsg == '本金要多少?') {
    event.reply(
      '各個商品不同：小台 6w,大台24w,金融 13w, 電子,24w,外匯保證金尚未確定'
    );
    return;
  }
  if (replyMsg == '可以獲利多少?') {
    event.reply(
      '2011-2019回測結果每年：台指期50%,金融指,３５％，電子,98%,外匯保證金尚未確定'
    );
    return;
  }
  if (replyMsg == '我還是不太明白要如何做?') {
    event.reply(
      '您需要有期貨/外匯保證金戶頭，由於帶操是違法以及客戶們也不放心將錢交給別人投資，交易都將由您本人進行。申辦戶頭後，依照每天的預測結果進行做多，做空，平倉及損停。'
    );
    return;
  }

  event.reply(replyMsg + '\nuserId:' + userId);
  return;
}

module.exports = reply;
