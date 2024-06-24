function solution(picture, k) {
    var answer = [];
    
    // 일단 가로로 두배늘리고
    //가로로 2배늘린다는 의미는  1번더 반복
    for (let line of picture){
        let lineTimes = '';
        for (let s of line){
            let sTimes = s.repeat(k);
             lineTimes += sTimes;
        }
        
        for (let i = 0 ; i < k ; i++){
             answer.push(lineTimes);
        }
            
    }
    console.log(answer)
    
    //이후 세로로 두배 복사
    return answer;
}