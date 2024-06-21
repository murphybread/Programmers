function solution(n) {
    var answer = [];
    
    // while 1이 아닐때 까지
    while (n !=1){
        //짝수일 때 계산 후 push
        answer.push(n);
        if (n%2 == 0){
            n = n/2;
            
        }
        else{
            n = 3*n +1;
        }
    }
    
    answer.push(1);
    
    
    
    //홀수일 때 계산 후 push
    
    return answer;
}