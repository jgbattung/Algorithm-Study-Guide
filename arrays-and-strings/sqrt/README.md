Problem:
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

Initial thoughts:
1. Square root is a number multiplied twice becomes the original number
2. Get square root by repeated subtraction of increasing odd numbers
3. Start by subtracting 1 from the num, then increase by 2 until it reaches 0 or negative
4. The number of operations is the square root
5. If number becomes negative, subtract 1 to the number of operations