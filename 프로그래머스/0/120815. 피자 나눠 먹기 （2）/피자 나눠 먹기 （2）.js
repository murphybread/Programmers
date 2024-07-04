function gcd( a,b){
    
    if (b<=0){
        return a;
        
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n) {
    var answer = 0;
    
    
    return parseInt(lcm(6,n) / 6);
}