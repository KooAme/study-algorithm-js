let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().toUpperCase();

let result = Array.from({length:26}, () => 0); //[0,0,0,0]

for(let i = 0; i < input.length; i++){
    result[input[i].charCodeAt()-65]+=1;
}

let maxValue = Math.max(...result); //maxValue = 최댓값
let index = 0;
let count = 0;

for(let i = 0; i < result.length; i++){
    if(result[i] === maxValue){
        count++;
        index = i;
    }
}

if(count === 1){
    console.log(String.fromCharCode(index + 65))
} else {
    console.log("?")
}
