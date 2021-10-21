var input = require('fs').readFileSync('teste', 'utf8');
var lines = input.split('\n');

let X = Number(lines.shift());
let Y = Number(lines.shift());

let soma = X + Y;

console.log(`SOMA = ${soma}`);