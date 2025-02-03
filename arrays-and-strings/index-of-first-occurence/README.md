Problem:
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Initial thoughts:
1. The length of needle would be the same as the length of its occurence in the haystack
2. Check the characters of the same length as needle, starting with the first character in haystack
3. Return index of the current character if the sequence matches with needle
4. Return -1 if the loop completes without finding a match

Improvement:
1. Use indexOf