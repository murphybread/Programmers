function solution(myStr) {
    var answer = [];

    
    //구분자 사이에 다른 문자 정규식으로 대체
    let str = myStr.replace(/a|b|c/g,' ');
    let arr = str.split(' ');
    
    
    // 빈문자열 원소 제외
    let filteredArr = arr.filter(item => item !== "");
    
    
    
    // 예외 빈 문자열 EMPTY
    
    return filteredArr.length > 0 ? filteredArr : ["EMPTY"];
}