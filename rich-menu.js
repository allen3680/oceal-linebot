const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken: "<channel access token>",
});

const richmenu = {
  size: {
    width: 2500,
    height: 1686,
  },
  // Other rich menu object properties
  // ...
};

client.createRichMenu(richmenu).then((richMenuId) => console.log(richMenuId));
