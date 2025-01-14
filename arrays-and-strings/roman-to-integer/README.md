Problem:
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Initial thoughts
1. When a smaller symbol comes before the bigger symbol, I need to subtract the value of the smaller symbol to the bigger symbol
2. Otherwise, just add the symbols
3. Assign the value of each symbol
4. Convert the symbols to a number array
5. When converted to numbers, check if the previous number is smaller, if yes, subtract
6. 2 rules: if the current number is bigger than the next number, ans = ans + current number
7. if the current number is smaller than the next number, ans = next number - current number, then add 1 to the loop to skip the next number