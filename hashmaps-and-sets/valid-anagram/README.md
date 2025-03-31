Problem:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Initial thoughts:
1. An anagram means there is a 1:1 usage of the letters in both words.
2. A set would mean we can't really store duplicate letters, so I think a map should be used here
3. Create a map for each letter in s, letter:1 key:value
4. Loop over t, checking if current t letter is in the map.
5. If it is, remove the letter from the map
6. If not, return false

Next thoughts:
1. Turns out maps can't in fact contain duplicates, so same approach with ransomNote the, have a count for each letter, then reduce if seen already in the second loop
2. Check if there are any remaining letters in the map after the loop
3. Use map.entries with for of loop for this

Improved version:
1. compare lengths for early check (improves runtime)
2. Use for of loop for setting the chars in the map (doesn't seem to improve runtime but makes code shorter)