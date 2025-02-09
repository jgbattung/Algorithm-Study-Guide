Problem:
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Initial thoughts
1. Loop through the array to see if a the target is in nums
2. To avoid looping through the entire then going back to place the target, add a check if the current digit is larger than the target
3. If it is, return the current index
4. If the loop finishes, return the length of the array

Improvement
1. Just use an or condition to check if the current number is equal to or greater than the tareget, then return the current index