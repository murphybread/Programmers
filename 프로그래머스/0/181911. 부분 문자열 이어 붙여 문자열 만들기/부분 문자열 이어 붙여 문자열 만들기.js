function solution(my_strings, parts) {
    var answer = '';
    
    
    // parts의 1차원 원소길이 많큼 반복
    for (let i = 0 ; i< parts.length ; i++){
    
        //s부터 e까지 부분 문자열'
        let part_str = my_strings[i].slice(parts[i][0],parts[i][1] + 1);
        answer += part_str;
    
    }
    
    
    
    return answer;
}