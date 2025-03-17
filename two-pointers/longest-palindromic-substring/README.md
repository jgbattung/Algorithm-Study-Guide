Problem:
Given a string s, return the longest palindromic substring in s.

Initial thoughts:
1. The solution for this will be similar to the palindromic substring problem, where we check both one char and two char center palindromes.
2. In this problem, we also need to track the actual palindromes to check which is the longest.
3. How to store the actual palindrome string

1. We don't need to construct or store the palindrome immediately. 
2. We could instead just store the indices (start and end) whenever we find a new palindrome, and keep updating the start and end indices when a longer palindrome is found
3. After the loop completes, return the substring of s using the start and end + 1
