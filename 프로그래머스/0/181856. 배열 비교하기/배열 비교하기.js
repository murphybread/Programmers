function solution(arr1, arr2) {
    var answer = 0;
    // 배열 대소관계비교
    
    // 두배열길이가 다른경우
    if (arr1.length > arr2.length){
        
        answer = 1;
    }
    else if (arr1.length < arr2.length){
        answer = -1;
    }
    // 배열의 길이가 같은 경우, 모든 원소의 합 비교
    else
    {
        let sum1 = arr1.reduce((acc,n) => acc+n);
        let sum2 = arr2.reduce((acc,n) => acc+n);
        
        if (sum1 > sum2){
            answer = 1;
        }
        else if (sum1 < sum2){
            answer = -1;
        }
        
        
    }
    
    return answer;
}