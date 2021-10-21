var input = require("fs").readFileSync("teste", "utf8");
var lines = input.split('\n');

var A = Number(lines.shift());
var B = Number(lines.shift());

console.log(`X = ${A+B}`);
