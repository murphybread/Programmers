def solution(n):
    answer = ''
    
    # 1, 2, 4를 사용하는 3진법 변환
    while n > 0:
        remainder = n % 3
        if remainder == 0:
            answer = '4' + answer
            n = (n // 3) - 1
        else:
            answer = str(remainder) + answer
            n = n // 3
    
    return answer
