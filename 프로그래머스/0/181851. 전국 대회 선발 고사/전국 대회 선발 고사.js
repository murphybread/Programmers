function solution(rank, attendance) {
    var answer = 0;
    
    let newArr = [];
    let i = 0;
    // 참여가 가능한 학생들이 조건
    // 보는건 해당 등수가 아닌 등 번호 즉 인덱스
    for (let att of attendance){
        if (att){
            newArr.push([rank[i],i]);
        }
        i +=1;
    }
    
    console.log(newArr)
    // sort 오름차순
    
    let trueRanks = newArr.sort((a,b) => a[0]-b[0]);
    console.log(trueRanks);
    
    // 주어진 수식 처리
    let [a,b,c] = [trueRanks[0][1],trueRanks[1][1],trueRanks[2][1]]
    
    return 10000*a+100*b+c;
}