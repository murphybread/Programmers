function solution(myString) {
    var answer = '';

    for (let s of myString) {
        if (s === 'a') {
            answer += 'A';
        } else if (s === 'A') {
            answer += 'A';
        } else {
            answer += s.toLowerCase();
        }
    }

    return answer;
}
