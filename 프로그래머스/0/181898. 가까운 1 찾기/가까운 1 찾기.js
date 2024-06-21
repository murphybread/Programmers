function solution(arr, idx) {
    var answer = 0;
    
    
    // 순서가 중요하니 함부로 sort하면 안됨
    // findindex로 인덱스 추출
    const result = arr.findIndex((value, index) => index >= idx && value === 1);
    

    
    
    return result;
}