def solution(begin, end):
    answer = []
    max_num = 1e7
    # 각 위치 가장 큰 약수찾기
    # a부터 b까지 체크
    for i in range(begin, end +1):
        if i <=3:
            if i ==1:
                answer.append(0)
                continue
            answer.append(1)
            continue
        
        max_divisor =1
        s = int(i**(1/2))
        for d in range(2,s+1):
            if i%d == 0: #나누어떨어진다는 소리
                if i // d <= max_num:   
                    max_divisor = i // d # 큰 약수로 수정
                    break
                
                elif d <= max_num:
                    max_divisor = d
                    
        answer.append(max_divisor)
        # print(f'max_divisor:{max_divisor}, i:{i},s:{s},d:{d}, answer:{answer}')


    
    return answer