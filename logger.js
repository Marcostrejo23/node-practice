// let x =

const url = "http://mylogger.io/log";

//sending an http request to this url

function log(message) {
  //send an HTTP request
  console.log(message);
}

//these are scoped to this module, private. want to use this in app.js
//require is one of the arguments locally. not globally.
// module.exports.log = log;  <- to export it all

module.exports = log; //this exports only the function

// module.exports.url = url;

//sometimes you only want to export a single function from a module
