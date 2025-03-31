Problem:
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Initial thoughts:
1. Check if each char in ransom note is in magazine
2. Create a map out of magazine and store the count of each character
3. Loop through ransomNote. If the char exists in map and the count is not 0, decrement the count.
4. If not found or count is zero, return false

Answering this problem again:
1. Use a map that has a letter: count key:value
2. The count is tracked since a letter in magazine can only be used once, so checking if the letter has already been used up is needed
3. Loop over the magazine to create the map
4. If the map already has the letter, add to the count, if not, add to the map
5. Loop over ransomNote to check if it contains all the letters it needs within magazine
6. If the ransomNote letter can be found in the map and the count is not zero, reduce the count by 1
7. Return false otherwise
8. Return trtue if the loop finishes