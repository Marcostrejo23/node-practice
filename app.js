console.log(); // global object available throughout node. settimeout

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


const path = require("path");

const pathObj = path.parse(__filename);

console.log(pathObj);
