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

Redoing the problem:
1. Essentially, we go through an order of operations where when one operation is completed, we shrink the area that we are processing
2. Start with the top row, going left to right, then remove the top row since it's done
3. Next, the rightmost column, go top top to bottom, then remove
4. Then, the bottom row, go from left to right using a reverse loop, then remove
5. Lastly, left most column, go from bottom to top, then remove
6. Use a while loop that checks if top <= bottom AND left <= right, which means there are still boundaries we haven't processed yet 