function solution(arr, queries) {
    var answer = [];
    
    
    for (let query of queries){
        let [s, e, k] = query;
        
        // i가 k의 배수인지 i%k==0이면

        for (let i =s; i<e+1;i++){
            if (i%k == 0){
                arr[i] +=1;    
            }
            
        }


        
    }
    

    
    // s와 e사이의 모든 i
    
    return arr;
}