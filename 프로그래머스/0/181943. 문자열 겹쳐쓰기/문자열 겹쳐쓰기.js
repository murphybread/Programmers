function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    
    let len =  overwrite_string.length;
    // s전 까지 문자열 + 
    // overwrite_string
    // s후 까지 문자열
    
    
    let start = my_string.slice(0,s);
    let end = my_string.slice(s+len);
    
    answer = start + overwrite_string+end;

    
    
    
    return answer;
}