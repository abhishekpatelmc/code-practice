# Arrays and Hashing

- **what is an array?**

> An array organizes items sequentially, one after another in memory. Each position in the array has an index, starting at 0.

[Quick Reference](https://www.interviewcake.com/concept/python/array?)

- **what is a Hashtable and HashMap?**

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

> - I am initilizing a hashmap and then check if the element is present in the hashmap and if it is present then return true else add the element to the hashmap and return false

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]]) {
      return true;
    } else {
      hashmap[nums[i]] = "a";
    }
  }
  return false;
};
```

## 242. Valid Anagram

[Question](https://leetcode.com/problems/valid-anagram/)

> **Note:** The length of the strings must be same. Before we do any solution

### Solution 1

> - Initally we chekc if the length of the two strings are same. If not we return false
> - Then initialize the two hashmaps
> - Next we count the occurance of the character in the sring and store in the hashmap
> - Then we compare two hashmaps if both of them have the same count values for each character

> **Note:** .get() mehtod is used so that the whenever there is no value present it alteast returns 0

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countS , countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i],0)
            countT[t[i]] = 1 + countT.get(t[i],0)

        for j in countS:
            if countS[j] != countT[j]:
                return False
        return True
```

### Shortcut Solution

> - Counter is a data structure in python which is a hashmap that counts
> - we run two counters on both of the strings and then compare them both by using "" == ""

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
      return Counter(s) == Counter(t)
```

### Solution to reduce the Space Complexity to O(1)

> - So In order to achive this we sort the strings then compare them then we will be using O(nlongn) for sorting and then O(1) or O(n) for space complexity

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
      return sorted(s) == sorted(t)
```

> - Sorted() is a built function on python which sorts the items
> - So we sorte the two strings and compare them which will actually decrease the time complexity to O(nlogn) and space complexity to O(1)
