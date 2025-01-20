Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Initial thoughts:
1. Loop over the given s string to check if each character exists in the t string.
2. Track if the first letter is the first one that comes out of t string:
3. If yes, check the next string
4. If no, break the loop and return false
5. Disadvantage is the double loop, where for each character in s, I loop over t
6. Probably need to track the position of where the current letter is found

Thoughts after first implem 
1. Failing when a letter is repeated
2. Fails if the a subsequent letter in s can be found at the start of t string

Thinking of a new approach:
Iterate over the t string (turn it into an array), then just splice the letters if it doesnt match?

1. Turn t into an array.
2. for each character in s, check if it exists in the array
3. for each match, remove the previous chars
4. Push the matching char into a new array, and at the end of the loop, check if the joined array equals s

Failing on same letter s inputs
1. Include the current character in the splice