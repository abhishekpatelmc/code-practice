# Arrays and Hashing

### 217. Contains Duplicate
[Question](https://leetcode.com/problems/contains-duplicate/)

### Solution
```
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()
        
        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False
```
