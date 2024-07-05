function solution(my_string) {
    
    var answer = my_string.toLowerCase();
    
    console.log(answer)
    
    
    let sortedString = answer.split("").sort().join("");
    
    console.log(sortedString)
    return sortedString;
}