function solution(strArr) {
    var answer = 0;
    
    let groups = Array.from({ length: 31 }, () => []);
    
    //길이가 같은 문자열들의 그룹
    for (let str of strArr){
        
        let n = str.length
        groups[n].push(1);
        
    }
    

    //원소 개수 확인
    answer = groups.reduce((max, arr) => Math.max(max, arr.length));
    
    return answer;
}