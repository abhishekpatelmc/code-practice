# Arrays and Hashing

**what is an array?**

> An array organizes items sequentially, one after another in memory. Each position in the array has an index, starting at 0.

[Quick Reference](https://www.interviewcake.com/concept/python/array?)

**what is a Hashtable and HashMap?**

> A Hashtable is a data structure that stores key-value pairs.It gives and option for easy lookup. A HashMap and a Hashtable are the same thing.But have a slight difference.

[Quick Reference](https://www.interviewcake.com/concept/python/hashtable?)

## 217. Contains Duplicate

[Question](https://leetcode.com/problems/contains-duplicate/)

### Solution

> - Here we make use of the hashmap, Initally we store all the values present in the nums in a hasmap
> - Then we check if the value is duplicated in the hashmap

```python
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

> **Note:** The length of the strings must be same. Before we do any solution

### My soulution

> - I created to hashmaps initally and then added both the strings character to inividual hashmaps.
> - Then I compared two hashmaps and if the values were equal the anagrams are same else they are different.

```python
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
