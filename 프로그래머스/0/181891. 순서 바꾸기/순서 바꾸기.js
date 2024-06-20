function solution(num_list, n) {
    var answer = [];
    //조건에 따라 slice :n , n: 활용
    
    let a = num_list.slice(0,n);
    let b = num_list.slice(n);
    answer = [...b, ...a];
    
    return answer;
}