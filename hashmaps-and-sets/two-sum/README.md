Problem:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Initial thoughts:
1. Loop through the nums array
2. Subtract nums[i] from target, then check if the difference exists in the nums array
3. If it does, return the indices of nums[i] and 
4. If not, continue looping