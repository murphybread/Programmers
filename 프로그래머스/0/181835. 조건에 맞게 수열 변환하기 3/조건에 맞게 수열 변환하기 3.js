function solution(arr, k) {
    var answer = [];
    
    if( k%2 == 1){
        for (let a of arr){
            a = a*k;
            answer.push(a);
        }
    }
    else {
        for (let a of arr){
            a = a+k;
            answer.push(a);
        }
    }
    
    return answer;
}