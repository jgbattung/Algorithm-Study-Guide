Problem:
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

1. Think about how a hashmap would help here
2. You can create one hashmap for horizontal and vertical.
3. How to create the hashmap for the square blocks. Also has 9 blocks per square
4. When you have a hashmap, you just need to check if you have already seen the value. If not, that area is valid then move on to the next

Initial solution:
1. Create 3 sets for rows, cols, and boxes
2. With a double loop iterate over the elements
3. Use the formula (i / 3) * 3 + (j / 3) to get which box the current number belongs to
4. If that number hasn't been seen yet anywhere, add it to the sets
5. If seen, return false