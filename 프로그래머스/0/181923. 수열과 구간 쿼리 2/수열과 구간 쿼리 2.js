function solution(arr, queries) {
    var answer = [];
    
    
    for (let query of queries){
        let [s,e,k] = query;
        
        let part = arr.slice(s,e+1);
        
        let checkNum =  Math.max(...part);
        
        
        if (checkNum <= k){
            answer.push(-1);
        }
        else {
            let result = [];
            
            for (let i = 0; i<part.length;i++ ){
                if (part[i] > k){
                    result.push(part[i])
                }
            }
            
            answer.push(Math.min(...result));
        }
        
        
    }
    
    return answer;
}