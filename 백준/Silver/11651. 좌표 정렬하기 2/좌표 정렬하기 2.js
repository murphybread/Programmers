const fs = require('fs');
let [n, ...inputArr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = inputArr.map(line => line.split(" ").map(Number));

n= parseInt(n, 10);

input.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    else {
        return a[1] - b[1];
    }
});

input.forEach(arr => console.log(arr.join(' ')));
