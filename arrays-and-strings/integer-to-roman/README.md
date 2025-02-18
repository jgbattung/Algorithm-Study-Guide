Problem:
Given an integer, convert it to a Roman numeral.

Initial thoughts:

1. In roman to int problem, I used a switch case to add each number to the array, then made a computation based on the order of these numbers.
2. Decimal place values seem to be important to solve this
3. There are exemptions for ints starting at 4 or 9.
4. When smaller symbols are placed after larger ones, we add the values
5. When smaller symbols are placed before larger ones, we subtract the smaller from the larger
6. If a num doesnt start with 4 or 9, you need to get the biggest value you can fit
7. using modulo, handle each place