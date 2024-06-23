function solution(arr) {
    // 예외: 배열에 2가 없는 경우
    if (!arr.includes(2)) {
        return [-1];
    }
    
    let result = [];
    let left =0, right = 0;
    // 2가 모두 포함된 배열. 그럼 왼쪽에서 시작해서 하나찾고, 오른쪽에서 시작해서 하나찾기
    for (let i = 0 ; i <arr.length;i++){
        if (arr[i] == 2){
            left = i;
            break;
        }
        
    }
    for(let j = arr.length-1; j>0;j--){
        if (arr[j] == 2){
            right =j;
            break;
        }
    }
    
    result = arr.slice(left,right+1);
    
    return result;
}