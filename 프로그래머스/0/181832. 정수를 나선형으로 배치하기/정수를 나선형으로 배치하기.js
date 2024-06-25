function solution(n) {
    var answer = Array.from({ length: n }, () => Array(n).fill(0));;
    let idx = 1;
    let row = 0;
    let col = 0;
    let turn = 1;
    
    // 처음시작 0,0 [row][i] , [j][col], [row][j],  [j][col]
    
    while (idx <= n*n){
    // 오른쪽 넘어가지 않고, 업데이트되지 않은 경우
        while (col < n && answer[row][col] === 0) {
            answer[row][col] = idx;
            idx++;
            col++;
        }
        // 다음 아래로내려갈준비
        col--;
        row++;

    // 아래
        while (row < n && answer[row][col] === 0) {
            answer[row][col] = idx;
            idx++;
            row++;
        }
        // 다음 왼쪽으로갈 준비
        row--;
        col--;
    // 왼쪽
        while (col >= 0 && answer[row][col] === 0) {
            answer[row][col] = idx;
            idx++;
            col--;
        }
        // 다음 왼쪽으로갈 준비
        row--;
        col++;
    // 위로    
        while (row >= 0 && answer[row][col] === 0) {
            answer[row][col] = idx;
            idx++;
            row--;
        }
        // 다음으로갈 준비
        row++;
        col++;
    // 표시 turn 업데이트
        for (let a of answer){
        console.log(a);
        }
        turn +=1;

    }
    

    
    
    return answer;
}