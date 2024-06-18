function solution(arr, n) {
    var answer = [];
    var i = 0;
    
    // idx 변수하나 정해서 해당 여부에 따라 짝수위치, 홀수위치에서값 추가
    if (arr.length %2 == 1){
        
        
        
        for (let num of arr){
            let plus = i%2 == 0? n :0;
            answer.push(num+plus);
            i+=1;

        }
        
    }
    else{
        
        
        
        for (let num of arr){
            let plus = i%2 == 0? 0 :n;
            answer.push(num+plus);
            i+=1;
        }        
    }
    return answer;
}