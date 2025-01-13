Problem:
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Initial thoughts:
1. Turn both words into arrays, array1 and array2
2. Loop through the combined length of both arrays
3. Concat the arrays, alternating
4. Join the array

Improvements:
1. No need to turn word into an array, you can process it as is
2. Initially, I did 'i < array1.length + array2.length;' on the loop, making the loop run more times than needed. 
3. Instead, take note of 2 things, the min length (length of shorter string) and max length (length of longer string)
4. Run a first loop using the min length
5. Run a second loop starting from the min length until the max length, using the longer string