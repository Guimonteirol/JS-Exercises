var input = require('fs').readFileSync('teste', 'utf8');
var lines = input.split('\n');

let A = Number(lines.shift());

let area = 3.14159*(A*A);

console.log(`A=${area.toFixed(4)}`);