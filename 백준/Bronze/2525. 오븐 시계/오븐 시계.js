let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//let [a, b] = input[0].split(' ').map(Number);
let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);
let cookTime = Number(input[1]);

let totalMinute = a * 60 + b + cookTime;
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(hour + " " + minute);