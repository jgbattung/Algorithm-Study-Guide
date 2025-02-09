Problem:
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Initial thoughts:
1. Conver the array to string using join, then parseInt
2. Add 1 to the number
3. Convert to array by looping