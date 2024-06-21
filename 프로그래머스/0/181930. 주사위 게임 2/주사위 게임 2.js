function solution(a, b, c) {
    var answer = 0;
    
    let first = (a+b+c);
    let second = (a**2 + b**2 + c**2);
    let third = (a**3 + b**3 +c**3);
    
    // 구현. 조건문 그대로 따라하기
    if ( a!= b && b!=c && a!=c){
        answer = first;
    }
    else if ( (a==b && a!=c) || (a==c && a!=b) || (b==c && b!=a) ){
        answer = first * second;
    }
    else if (a==b && b==c){
        answer = first * second * third;
    }
    
    
    return answer;
}