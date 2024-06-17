function solution(n) {
    var answer = 0;
    let num = n;
    // 홀수 짝수 판별
    let odd = n%2 == 1 ? 1: 0;

    // 홀수인 경우 n이하의 모든 양의 홀수의 합
    if (odd){
        while (num > 0){
            answer += num;
            num -= 2;
        }
        
    }
    // 짝수인 경우 n이하의 모든 양의 짝수의 제곱의 합
    else {
        while (num > 0){
            answer += num ** 2;
            num -= 2;
        }
    }
    
    return answer;
}