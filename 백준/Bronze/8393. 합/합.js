let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = Number(input[0]);
let value = 0

for(let i = 1; i <= data; i++){
    value += i;
}

console.log(value);