function getDateNumber(strArr){
    
    let year = Number(strArr[0]) * 336;
    let month = Number(strArr[1]) * 28;
    let day = Number(strArr[2]);
    
    return year+month+day;

}

function solution(today, terms, privacies) {
    var answer = [];
    let i =  0;
    
    let todayDate = today.split(".");
    let todayNumber = getDateNumber(todayDate);
    
    let map = new Map();

    terms.forEach(item => {
        let [key, value] = item.split(" ");
        map.set(key, parseInt(value));
    });

    // 1~n번
    
    // 6달=168, 12달=336, 3달 28*3 = 84, 
    
    
    // 전부 28기준으로 처리하기
    
    for (let item of privacies){
        item = item.split(" ");

        let currDate = getDateNumber(item[0].split("."))
        
        currDate += map.get(item[1]) *28;
        
        
        if (todayNumber >= currDate ){
            answer.push(i+1);
        }
        
        i++;
        
        
    }
    
    
    
    // 모든달은 28일
    return answer;
}