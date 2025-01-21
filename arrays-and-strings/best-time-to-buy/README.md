Problem:
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Initial thougts:
1. Get the lowest value in the array
2. If the lowest value is the last digit in the array, return 0
3. Note the index of the lowest value
4. Subtract the next values in the array to the lowest value, store the largestDiff.
5. If that value returns the largest diff, store that value
6. Return the value 

Issue with initial implementation:
I am getting the smallest value in the array, but finding the smallest value doesnt guarantee that value will yield the highest profit. (ex, [2,4,1])

New approach:
1. Loop over the array, subtracting the current number to the next digits in the array
2. Track the largest difference
3. The loop should only check the next values after the current i
4. Since the new approach is a double loop, it takes too much time in very large inputs

How to improve new approach
1. Track only 2 things, the lowest price you've seen so far and the largest profit
2. Loop through the array only once

Final improved solution
1. Use a traditional for loop
2. Initialize the minPrice to the first item in the array
