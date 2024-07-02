function solution(n) {
    var answer = 0;
    let str = String(n);
    
    for(let s of str){
        answer += Number(s);
    }
    return answer;
}