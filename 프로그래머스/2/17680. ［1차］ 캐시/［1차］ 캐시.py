from collections import deque

def solution(cacheSize, cities):
    answer = 0
    cache = deque([])
    # LRU -> cachesize내에서 있으면 hit, 아니면 miss
    # 가장 최근에 불리는것은 list[0]에 넣고 기존의 것들은 1칸씩 뒤로밀고, cachesize초과시 마지막꺼 삭제
    
    # 먼저 내 캐쉬에 있는지확인 시간변화

    for city in cities:
        if city.upper() in cache:
            answer +=1
            cache.remove(city.upper())
            cache.appendleft(city.upper())
            # 이미 있는 경우 위치만 변화
        else:
            answer +=5
            cache.appendleft(city.upper())
        
        
        if len(cache) > cacheSize:
            cache.pop()
            
    
        # 이후 캐쉬리스트를 맨앞에 append and pop
    
    
    return answer