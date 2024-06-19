function solution(arr, delete_list) {
    var answer = [];
    
    for (let string of arr ){
        if (!delete_list.includes(string)){
            answer.push(string);
        }
    }
    return answer;
}