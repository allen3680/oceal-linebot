'use strict';
const result = require('dotenv').config();
if (result.error) throw result.error;
const linebot = require('linebot');
const Express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const BodyParser = require('body-parser');

var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Swagger 接口文档',
  },
  host: process.env.PORT,
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
// Line Channel info
const bot = linebot({
  channelId: process.env.LINE_CHANNEL_ID,
  channelSecret: process.env.LIEN_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

const linebotParser = bot.parser();
const app = Express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
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

// echo user message
bot.on('message', function (event) {
  var userId = event.source.userId;
  var userName = event.source.userName;
  var replyMsg = `${event.message.text}`;
  event
    .reply(replyMsg + ' userId:' + userId + 'userName:' + userName)
    .then(function (data) {
      console.log('ok');
    })
    .catch(function (error) {
      console.error(error);
    });
});
