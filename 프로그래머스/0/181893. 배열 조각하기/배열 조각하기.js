function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) {
            // 짝수 인덱스: query[i]번 인덱스를 제외하고 그 뒷부분을 자른다
            arr = arr.slice(0, query[i] + 1);
        } else {
            // 홀수 인덱스: query[i]번 인덱스를 제외하고 그 앞부분을 자른다
            arr = arr.slice(query[i]);
        }
    }
    return arr;
}