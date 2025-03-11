Problem:
Given an m x n matrix, return all elements of the matrix in spiral order.

Initial thoughts
1. The number of rows in the 2D array are represented by the length of the matrix array, while the columns in each row is represented by the length of each array in matrix
2. Probably need a double loop to access the rows and columns
3. The order looks to be first row, last column, last row, first column (except first item), second row (except last column item)

1. Instead of a nested loop, use four separate loops for each movement in the spiral:
  1. left to right top row
  2. top to bottom right most column
  3. right to left bottom row
  4. bottom to top left most column
2. After processing the row or column (boundary), we need to shrink the area, basically removing that part so it doesn't get added to the result array

[1  2  3]
[4  5  6]
[7  8  9]
