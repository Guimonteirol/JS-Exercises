var input = require('fs').readFileSync('teste', 'utf8');
var lines = input.split('\n');

let A = Number(lines.shift());
let B = Number(lines.shift());

console.log(`PROD = ${A*B}`);