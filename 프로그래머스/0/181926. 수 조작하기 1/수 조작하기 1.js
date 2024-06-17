function solution(n, control) {
    var answer = n;
    const c = {
        "w": 1,
        "s": -1,
        "d":10,
        "a": -10
    };

    for (let command of control){
       answer += c[command]
    }
    
    return answer;
}