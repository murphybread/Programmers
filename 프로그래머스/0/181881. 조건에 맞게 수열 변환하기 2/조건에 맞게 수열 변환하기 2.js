function sameArr(arr1,arr2){
    
    for(let i =0; i<arr1.length;i++){
        if (arr1[[i]] !== arr2[i]){
            return false;
        }
    }
    
    return true;
}
function solution(arr) {
    var answer = 0;
    
    
    // arr[i] >= 50 % 2 == 0 -> arr[i]/2
    // arr[i] <50 && %2 == 1 -> arr[i]*2 +1
    
    while (true){
        
        let newArr = new Array(arr.length);
        for (let i =0 ; i< arr.length;i++){
            if (arr[i] >=50 && arr[i]%2 ==0){
                newArr[i] = arr[i] / 2
            }
            else if (arr[i] <50 && arr[i]%2 ==1){
                newArr[i] = arr[i]*2 +1
            }
            else{
                newArr[i] = arr[i]
            }

        }
        if (sameArr(arr, newArr)){
            break;
        }
        answer +=1;
        arr = newArr;


    }

    
    return answer;
}