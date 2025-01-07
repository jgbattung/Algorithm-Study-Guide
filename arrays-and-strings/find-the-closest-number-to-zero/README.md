Problem:
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

Initial thought process

1. Using the given nums array, get the distance of each number in the array from zero and store it in another array.
2. If positive, n - n = 0. If negative n - (-n) = 0
3. I notice that getting the distance from n will always be the number itself if positive, and the absolute value of the number if negative
4. Instead of computing manually, I can just store the absolute value of the numbers. If the number is positive, keep that number. If the number is negative, multiply it by -1
5. There is also an option to use the function Math.abs

Improved analysis
1. Track 2 things: smallest distance seen and the closest number
2. Iterate over the array, getting the distance of the current integer from 0
3. if the current distance is less than the smallest distance, update the smallest distance to the current distance, then update the smallest number to the current integer
4. If the current integers's distance is equal to the current smallest distance, check if the current integer is larger than the current closest number. If yes, update the current closest number to the current integer.