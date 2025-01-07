Problem:
Given an array of integers, find the second largest number. If there is no second largest number (e.g., array has fewer than 2 distinct values), return null.

Initial thoughts

1. I need to track 2 things: largest integer and the second largest. 
2. Loop over the array and assign the first integer as the largest
3. Check if the next integer is larger than the current largest, if yes, assign the current integer as the largest integer, and make the previous largest integer the second largest.
4. At the end, if largest and second largest are equal, return null

Improvement
1. Instead of checking if next integer is larger than current largest, check if it is larger or equal to for similar integers

