function solution(my_string, n) {
    var answer = '';
    start = my_string.length - n
   answer = my_string.slice(start);
    return answer;
}