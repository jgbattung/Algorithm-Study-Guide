Problem:
Given a string s consisting of words and spaces, return the length of the last word in the string.

Initial thoughts:
1. Loop over the string
2. Create an array of words in the string
3. If the character is a non-empty string, keep adding to the word
4. If the character is a space
  1. Check if word is not empty.
  2. If not empty, push the word to the words array, then set the word to an empty string
  3. If it is empty, do nothing