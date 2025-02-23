Problem:
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Initial thoughts:
1. If empty string, return false
2. Remove spaces from the string using regexp, then lowercase it
3. Compare each char in the string on opposite sides by looping