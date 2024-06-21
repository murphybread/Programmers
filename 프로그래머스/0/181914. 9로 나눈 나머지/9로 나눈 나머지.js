function solution(number) {
    var answer = 0;
    
    let str = String(number);
    let sum = 0;
    let rest = 0 ;
    
    for (let s of str){
        sum += Number(s);
    }
    rest  = sum %9 ;
    

    
    return rest;
}