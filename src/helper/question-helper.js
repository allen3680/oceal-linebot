'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b8188f8b56ceba',
  password: '90c78067',
  database: 'heroku_1910ca2834ffcea',
  port: '3306',
});

function saveUserProfile(event) {
  var addSql = 'insert into user(id,name,group,createdDate)values(?,?,?,?)';
  var userId = event.source.userId;
  connection.connect();
  bot.getUserProfile(userId).then((x) => {
    var addSqlParams = [userId, x.displayName, A, Date.now()];
    connection.query(addSql, addSqlParams);
  });
  connection.end();
}

module.exports = saveUserProfile;
