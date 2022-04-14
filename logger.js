var url = "http://mylogger.io/log";

//sending an http request to this url

function log(message) {
  //send an HTTP request
  console.log(message);
}

//these are scoped to this module, private. want to use this in app.js

module.exports.log = log;

module.exports.url = url;
