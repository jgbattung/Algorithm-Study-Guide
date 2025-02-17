Problem:
Given an array of building heights, return an array where result[i] represents the number of positions where:
1. There exists at least one building on the left side of i that is >= height[i]
AND
2. There exists at least one building on the right side of i that is >= height[i]

Return 0 if there are no taller buildings on both sides
Return 1 if there are taller buildings on both sides

Initial thoughts:
1. Track the highest number on the left and right using 2 loops
2. If a bigger number is found on the left, increment ans[i]
3. Do the same for the left
4. Check the ans array, 2 means both sides have bigger numbers, 1 or 0 returns 0.