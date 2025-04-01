Problem:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Initial thoughts:
1. Loop through the nums array
2. Subtract nums[i] from target, then check if the difference exists in the nums array
3. If it does, return the indices of nums[i] and 
4. If not, continue looping

Immprovement:
1. Runtime too slow
2. Consider how you can use a map here
3. Loop over the nums array
4. We're looking for a number that is equal to the complement, where complement = target - currValue
5. Get the currentDiff for nums[i]
6. Check if we have already seen this number in the map
7. If yes, return the index of that number, which should be saved as number:index