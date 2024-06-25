function solution(l, r) {
    var answer = [];

    // Helper function to check if a number contains only '0' and '5'
    function isValid(num) {
        for (let char of num) {
            if (char !== '0' && char !== '5') {
                return false;
            }
        }
        return true;
    }

    for (let i = l; i <= r; i++) {
        let numStr = String(i);
        if (isValid(numStr)) {
            answer.push(i);
        }
    }

    if (answer.length === 0) {
        return [-1];
    }
    return answer;
}