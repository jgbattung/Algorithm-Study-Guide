Problem:

Given an array of integers, find the contiguous subarray with the largest sum

Example: [-2,1,-3,4,-1,2,1,-5,4] → The contiguous subarray [4,-1,2,1] has the largest sum = 6

Initial thougths
1. Track current largest sum
2. Add the current number to the next number
3. If the sum of the next number isn't bigger than the largestSum, dont update the largestSum
4. But I need to consider that it has to be a total of a subarray
5. Since I am looping through it one by one, any largestSum I would get is techincally a subarray

Improvements:
1. Update largest sum when there is a larger sum
2. Update currentSum when the current number is larger than currentSum + current number