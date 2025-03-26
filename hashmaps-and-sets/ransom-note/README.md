Problem:
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Initial thoughts:
1. Check if each char in ransom note is in magazine
2. Create a map out of magazine and store the count of each character
3. Loop through ransomNote. If the char exists in map and the count is not 0, decrement the count.
4. If not found or count is zero, return false