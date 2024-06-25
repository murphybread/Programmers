function solution(a, b, c, d) {
    const dice = [a, b, c, d].sort((x, y) => x - y);

    if (dice[0] === dice[3]) {
        // 네 주사위 숫자가 모두 같은 경우
        return 1111 * dice[0];
    } else if (dice[0] === dice[2] || dice[1] === dice[3]) {
        // 세 주사위 숫자가 같은 경우
        const p = dice[1];
        const q = dice[0] === dice[1] ? dice[3] : dice[0];
        return (10 * p + q) ** 2;
    } else if (dice[0] === dice[1] && dice[2] === dice[3]) {
        // 두 주사위씩 같은 값이 나오는 경우
        return (dice[0] + dice[2]) * Math.abs(dice[0] - dice[2]);
    } else if (dice[0] === dice[1] || dice[1] === dice[2] || dice[2] === dice[3] ){
        if (dice[0] === dice[1]){
            return dice[2] * dice[3];
        }
        else if (dice[1] === dice[2]){
            return dice[0] * dice[3];
        }
        
        else if (dice[2] === dice[3]){
            return dice[0] * dice[1];
        }
    } else {
        // 네 주사위 숫자가 모두 다른 경우
        return Math.min(...dice);
    }
}
