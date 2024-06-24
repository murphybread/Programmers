function solution(my_string) {
    var answer = [];
    let arr = Array(52).fill(0);
    // A ~ Z 65~90
    
    // a ~ z 97~122
    for (let str of my_string){
        let ascii = str.charCodeAt();
        
        if (ascii >=65 && ascii <=90){
            
            arr[str.charCodeAt()-65] += 1
        }
        
        else{
            arr[str.charCodeAt()-97+26] += 1
        }

        
    }
    
    
    return arr;
}