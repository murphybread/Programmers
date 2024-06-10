def solution(n):
    answer = 0
    
    # 부분집합? 투포인터 비슷하게 , 중간 선별잘하기
    
    half = int(n/2)
    for i in range(1, half+1):
        sum_part = i
        j = i+1
        while sum_part <= n:
            sum_part += j
            j+=1
            if sum_part == n:
                answer+=1
                # print("break", i)
                break
        # print(sum_part)
    
    
    # 마지막에 자기자신
    return answer+1