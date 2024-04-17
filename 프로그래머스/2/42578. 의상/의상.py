from collections import defaultdict

def solution(clothes):
    d = defaultdict(int)
    
    #현재 가지는 경우의 수를 간단하게 dict로 일단 정리
    for num, wear in clothes:
        d[wear] += 1
    answer = 1
    
    # 각 가지수 에 +none이라고 생각하고 곱하기. 곱하는 이유는 각 확률이 연속해서 이루어지는 경우 일반적인 게산방법
    for count in d.values():
        answer *= (count + 1)
        print(answer)
    
    #주의할점은 모든 카테고리가 none 일경우는 조건이 성립하지 않기 때문에, -1
    answer -=1
    
    
    
    
    return answer