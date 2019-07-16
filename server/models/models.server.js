var connectionString = 'mongodb://127.0.0.1:27017/colorborate1'; // for local host to connect to db

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely | connect with heroku
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds249017.mlab.com:49017/heroku_5f4wpw39'; // use yours
}

//imports the library
var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = db;