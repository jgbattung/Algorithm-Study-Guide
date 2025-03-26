Problem:
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Initial thoughts:

1. The matrix is n x n, so it will always have the same length and [i].length
2. The length of the matrix - 1 is the amount of places a digit moves, for example, if the matrix length is 3 x 3, each digit moves 3 - 1 (2) times
3. Maybe this could be handled with boundaries again, where we process in the following order
  1. starting at the top - left to right
  2. at the right edge - top to bottom
  3. at the bottom, right to left
  4. at the left edge - bottom to top
4. So in a 3x3 matrix, 
  1. processing the top, 0,0 becomes 0,2, as we added 2 to the outer position
    1. If it exceeds, like when 0,1 becomes 0,3, but there is no index 3 because length === 2, we instead add to the inner position, making it 1,2. Then for 0,2, adding 2 will make it 0,4, but again index 4 doesn't exist, so the excess is added to the inner position index, making it 2,2
  
Next thoughts:
1. There are actually only 2 things we need to do:
  1. transpose the matrix, flipping the rows and columns
  2. reverse the transposed matrix

To transpose, I will need a double loop. So the matrix[0][0] stays the same, matrix[0][1] becomes matrix[1][0], matrix[0][2] becomes matrix [2][0] etc.