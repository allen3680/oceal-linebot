'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b8188f8b56ceba',
  password: '90c78067',
  database: 'heroku_1910ca2834ffcea',
  port: '3306',
});
var createSql = 'insert into heroku_1910ca2834ffcea.user values(?,?,?,?)';
var selectSql = 'select * from heroku_1910ca2834ffcea.user where userId = ?';

function saveUserProfile(x) {
  try {
    connection.connect();
    var addSqlParams = [x.userId];
    var user = connection.query(selectSql, addSqlParams);
    if (!user) {
      return;
    }
    addSqlParams = [x.userId, 'A', x.displayName, Date.now()];
    connection.query(createSql, addSqlParams);
    connection.end();
  } catch (error) {
    throw error;
  }
}

module.exports = saveUserProfile;
