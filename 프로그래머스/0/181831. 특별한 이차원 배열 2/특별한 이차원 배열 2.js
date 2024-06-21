function solution(arr) {
    var answer = 1;
    var flag = 0;
    // 모든 원소 확인
    for (let i = 0 ; i< arr.length; i++){        
        for (let j = 0 ; j<arr[0].length ; j ++){
            
            if( arr[i][j] != arr[j][i]){
                flag = 1;
                break;
            }
            
        }
    }
    
    //조건상태 , 조건식 
    if (flag){
        answer = 0;
    }
    
    return answer;
}