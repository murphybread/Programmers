function solution(n) {
    var answer = 0;
    let i = 1;
    while ( i < Math.sqrt(n)){
        if(n%i ===0 ){ answer  +=1;}
        
        
        i +=1;
    }
    answer = answer *2;
    
    if ( n % Math.sqrt(n) === 0 ) {answer += 1;}
    
    return answer;
}