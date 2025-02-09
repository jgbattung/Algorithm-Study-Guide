Problem:
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Initial thoughts:
1. Conver the array to string using join, then parseInt
2. Add 1 to the number
3. Convert to array by looping

Improved:
1. parseInt has a limit
2. Loop by starting at the last number
3. If last number is less than 9, just add 1 and then return
4. If last number is = 9, convert number to 0 and check the next digit in the loop.
5. If all digits are looped through, add 1 at teh beggining of the array