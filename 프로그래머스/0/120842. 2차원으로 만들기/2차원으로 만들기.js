function solution(num_list, n) {
    
    let row = Math.floor( num_list.length / n)
    var answer = Array.from({length: row}, () => Array(n));
    // console.log(row)
    let count =0 ;
    for( let i = 0 ; i<row;i++){
        for (let j = 0 ; j<n;j++){
            answer[i][j] =num_list[count];
            count +=1;
        }
    }
    
    return answer;
}