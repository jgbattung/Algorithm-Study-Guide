Problem:
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Initial thoughts:
1. Find the shortest string, that would be the minimum length to loop over
2. Create 2 loops. Outer loop goes through each string in the array, second goes through each character up to the length of the shortest word

Improvement:
1. Switch the loop logic. The outer loop should chech the same index in each word, looping until the length of the shortest word. 
2. The inner loop goes through each word in the array
3. Get the current letter and compare it the the letter being looped for each word