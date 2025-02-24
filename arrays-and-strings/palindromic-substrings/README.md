Problem:
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Initial thoughts:
1. Check each char in the string as center. That char will also always be a palindrome
2. Check the chars to the left and right of the middle character to check if they are the same
3. If yes, they are also palindromes
4. If no, not palindromes, or if out of bounds already
5. Track a count variable to store how many palindromes there are. Increase the count on every loop since each individual char is a palindrome. 
6. In odd lengths, if chars to the left and right of the center char are the same and within bounds, increase the count then expand more using a while loop
7. For even lengths 

Next thoughts:
1. There are 2 types of palindromes, 1 center and 2 center palindrome (aba, abba)
2. These both need to be handled
3. Use wthe while loop to track these 2 centers individually