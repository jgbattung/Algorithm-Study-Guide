const m1 = [[1,2,3],[4,5,6],[7,8,9]];
const m2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

var rotate = function(matrix) {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp;
    }
  }

  // reverse
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length/2; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp
    }
  }

  return matrix
}

rotate(m1)