# Arrays and Hashing

## 217. Contains Duplicate
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


## 242. Valid Anagram

[Question](https://leetcode.com/problems/valid-anagram/)

### My soulution

```
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        string1 = set()
        string2 = set()

        for i in s:
            string1.add(i)
        for j in t:
            string2.add(j)
            if j in string2 and string1:
                return True
            else:
                return False
```
