function solution(num_list) {
    var answer = 0;
    let odds = [];
    let evens = [];
    
    
    for (let n of num_list){
        
        if( n %2 == 1){
            odds.push(String(n))
        } else {
            evens.push(String(n))
        }
    }
    
    let oddsSum = ''
    let evensSum = ''
    for (let odd of odds){
        oddsSum +=odd
    }
    for (let even of evens){
        evensSum  +=even
    }


    
    return Number(oddsSum) + Number(evensSum);
}