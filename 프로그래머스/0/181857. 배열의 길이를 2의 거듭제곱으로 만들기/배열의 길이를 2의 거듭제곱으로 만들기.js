function solution(arr) {
    let n = arr.length;
    
    // 가장 가까운 2의 거듭제곱 찾기
    let nextPowerOfTwo = 1;
    while (nextPowerOfTwo < n) {
        nextPowerOfTwo *= 2;
    }

    // 필요한 0의 개수를 계산
    let zeroCount = nextPowerOfTwo - n;

    // 배열에 0을 추가
    for (let i = 0; i < zeroCount; i++) {
        arr.push(0);
    }

    return arr;
}