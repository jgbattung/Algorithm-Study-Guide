Problem:
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Initial thoughts: 
1. Need to convert the string to a 2-D array pattern then join it to get the converted string
2. The numRows dictate how many levels in the array (0, 1, 2) when numRows = 3
3. Create a 2D array based on the numRows value
4. Loop through the string and assign the values alternating the number of rows
5. Since it has to be assigned in  a zigzag pattern, it would look like this for numRows = 3 (1, 2, 3, 2, 1, 2, 3 etc)
6. Create a loop that increases until it equals the numRows, then decreases back to 0
7. Add a flag if we are going up or going down

After trying solution:
1. It should not be simply alternating because it is zigzag
2. Count is still the same (0, 1, 2, 1, 0, 1, 2, etc)
3. Add a flag to check if it is going down or up
4. Increase or decrease the current level based on the flag