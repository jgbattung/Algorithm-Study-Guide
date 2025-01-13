Given an array of integers, find the two numbers that have the smallest absolute difference between them. Return them in an array [smaller_number, larger_number].

Initial thougths:
1. Probably use a double loop
2. Get the first number in the array and subtract it to the rest of the numbers in the array
3. Track 2 things, smallestDifference which is the answer we get from #2, and
4. an array noting which numbers resulted in the smallestDifference

Problem:
1. The array has many entries, find a way to delete the entries in the array if there is a new smallestDifference

Fix:
1. turn the length of the array to 0 if new smallestDifference was found
2. Forgot to reassign smallestDifference when a new one is found.

Improvement:
1. Sort the array first so that you only need to compare adjacent numbers and not do a loop for each number
