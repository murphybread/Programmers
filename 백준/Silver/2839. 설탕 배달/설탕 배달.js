const fs = require('fs');
let [n] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

n = parseInt(n, 10);    


let count1 = Math.trunc(n / 5);
let rest1 = n % 5;

let arr= [];



for (let i = count1 ; i >=0 ;i--){
    let firstRest = n - i*5
    if (firstRest % 3 === 0){
        let boxes = i + Math.trunc(firstRest / 3)
        arr.push(boxes)
        continue;
    }
}


if (arr.length === 0){
    console.log(-1)
}
else {
    console.log(Math.min(...arr))
}