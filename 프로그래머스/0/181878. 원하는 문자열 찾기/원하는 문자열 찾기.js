function solution(myString, pat) {
    var answer = 0;
    // 1 모두대문자, 모두 소문자로 바꾼후 비교하기
    
    // 2 정규표현식 사용해보기
    let pattern = new RegExp(pat, "i");
    
    answer = Number(pattern.test(myString));
    
    
    return answer;
}