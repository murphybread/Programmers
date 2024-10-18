const fs = require('fs');
let [n, ...inputArr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = inputArr.map(line => line.split(" ").map(Number));

n = parseInt(n, 10);

// DP 배열 생성 (최대 수익을 저장할 배열)
let dp = Array(n + 1).fill(0);

// DP 점화식
for (let i = n - 1; i >= 0; i--) {
    let time = input[i][0]; // 상담에 걸리는 기간 (Ti)
    let pay = input[i][1];  // 상담의 수익 (Pi)
    let nextDay = i + time; // 상담 후 다음으로 진행 가능한 날짜

    // 상담을 진행할 수 있는 경우
    if (nextDay <= n) {
        dp[i] = Math.max(dp[i + 1], pay + dp[nextDay]);
    } else {
        // 상담을 진행할 수 없는 경우 (퇴사일을 넘는 경우)
        dp[i] = dp[i + 1];
    }
}

console.log(dp[0]);
