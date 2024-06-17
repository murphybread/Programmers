function solution(number, n, m) {
    var answer = 0;
    
    // n의배수 and m의 배수 판별 나머지 0여부 확인
    if (number%n == 0 && number%m ==0){
        answer = 1;
    }
    return answer;
}