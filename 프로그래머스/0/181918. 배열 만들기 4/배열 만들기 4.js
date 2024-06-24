function solution(arr) {
    var stk = [];
    //i의변화 주의깊게보기
    let i =  0;
    
    while (i <  arr.length){
        let n = stk.length;
        
        if (n == 0){
            stk.push(arr[i]);
            i+=1;
        }
        else{
            if (stk[stk.length-1] < arr[i]){
                stk.push(arr[i]);
                i+=1;
            }
            else{
                stk.pop();
            }
        }
    }
    
    
    // 빈배열이라면 arr[i] stk추가후 i 1증가
    
        // 원소가 있고 stk[-1]이   < arr[i] stk.push(arr[i]) i +=1
    
        // 원소가 있고 else stk.pop()
    
    return stk;
}