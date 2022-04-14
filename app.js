console.log(); // global object available throughout node. settimeout


const fs = require("fs");

const files = fs.readdirSync("./", function (err, files) {});

fs.readdir("./", function (err, files) {
  if (err) console.log("error", err);
  else console.log("Result", files);
});

fs.readdir("./");
// setTimeout(() => {}, timeout);

// clearTimeout();

// setInterval;

// clearInterval;
//global functions for node.
// var message ='';
// global.setTimeout

// console.log(global.message);
const logger = require("./logger");

console.log(logger);

logger.log("message");


const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
const path = require("path");

const pathObj = path.parse(__filename);

console.log(pathObj);


//template string 

// es6 /2015; ECMA Script 6;

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);