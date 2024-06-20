function solution(arr) {
    var answer = [];
        
    
    
    
    //나머지 그대로
    for (let num of arr){
        // >= 50 에 짝수면 2로나누기

        if (num >= 50 && num %2 == 0){
            num /= 2;
            num = Math.floor(num);
        }
        // <50 홀수라면 2곱하기
        else if (num < 50 && num % 2 == 1){
            num *= 2;
        }
        answer.push(num);
        
        
    }

    return answer;
}