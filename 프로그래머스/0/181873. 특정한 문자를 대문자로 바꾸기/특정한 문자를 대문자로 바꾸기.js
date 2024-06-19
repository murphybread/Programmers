function solution(my_string, alp) {
    var answer = '';
    let pattern = new RegExp(alp, "g");
    let change = alp.toUpperCase();
    
    
    answer = my_string.replace(pattern,change);
    return answer;
}