function solution(arr, flag) {
    var answer = [];
    
    //boolean true false 확인
    for (let i = 0 ; i < flag.length ; i ++){
        
        let n = arr[i]
        
        if (flag[i]){
            let newarr = new Array(n*2).fill(n);
            
            answer = [...answer, ...newarr];           
        }
        
        else {
            
            answer.length = answer.length - n;
            
        }
    }
    
    // 추가 arr[i]값을 숫자로 해석 *2 번
    
    
    // 삭제 arr[i] 값을 숫자로해석 pop
    return answer;
}