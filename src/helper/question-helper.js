'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b8188f8b56ceba',
  password: '90c78067',
  database: 'heroku_1910ca2834ffcea',
  port: '3306',
});

function saveUserProfile(user) {
  var selectSql = 'select * from heroku_1910ca2834ffcea.user where id = ?';
  var createSql = 'insert into heroku_1910ca2834ffcea.user values(?,?,?,?)';
  try {
    var addSqlParams = [user.userId];
    var user = connection.query(selectSql, addSqlParams);
    if (user) {
      return;
    }
    addSqlParams = [user.userId, '', user.displayName, Date.now()];
    connection.query(createSql, addSqlParams);
  } catch (error) {
    throw error;
  }
}

function updateUserProduct(userId, productId) {
  var createSql = 'insert into heroku_1910ca2834ffcea.user values(?,?,?,?)';
  var updateSql =
    'update heroku_1910ca2834ffcea.user set user.group = ? where user.id = ?';
  try {
    var addSqlParams = [productId, userId];

    if (!user) {
      addSqlParams = [user.userId, productId, user.displayName, Date.now()];
      connection.query(createSql, addSqlParams);
      return;
    }

    connection.query(updateSql, addSqlParams);

    return;
  } catch (error) {
    throw error;
  }
}

module.exports = { saveUserProfile, updateUserProduct };
