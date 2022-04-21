const mysql = require('mysql');
const dbConfig = require("../Config/config").DatabaseCreds
const util = require("util")

var connection = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.pwd,
    database : dbConfig.name
  });
   
  connection.query = util.promisify(connection.query).bind(connection)
  connection.connect( function (err){
      console.log("Inside DB Connect")
      if(err){
          console.log("Error Connecting to DB ->", err.stack)
          return
      }
      console.log("Database Connected")
  });

  module.exports = connection;