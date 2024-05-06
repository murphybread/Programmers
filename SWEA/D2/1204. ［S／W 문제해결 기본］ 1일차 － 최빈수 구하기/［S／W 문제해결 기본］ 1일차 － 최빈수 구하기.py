#import sys
#from collections import Counter
#sys.stdin = open("input.txt", "r")
from collections import defaultdict




T= int(input())

for i in range(1, T+1):
    
    d = defaultdict(int)
    _ = input()
    nums = list(map(int, input().split()))
    for n in nums:
        d[n] +=1
    
    answer = max(d, key=d.get)
    print(f'#{i}  {answer}')
