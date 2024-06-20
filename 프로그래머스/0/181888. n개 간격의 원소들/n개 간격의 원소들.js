function solution(num_list, n) {
    var answer = [];
    
    // 인덱스 접근전 길이-1보다 같거나 작은지 체크
    // 인덱스를 i++이 아닌 i += i+n형태
    for (let i = 0 ; i<num_list.length; i += n){
        
        answer.push(num_list[i]);
    }
    

    
    
    
    return answer;
}