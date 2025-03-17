const m1 = [[1,2,3],[4,5,6],[7,8,9]]
const m2= [[1,2,3],[4,5,6]]

var spiralOrder = function(matrix) {
  let result = [];
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  let left = 0

  while (top <= bottom && left <= right) {
    // left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    if (top <= bottom) {
      // right to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom-- 
    }

    if (left <= right) {
      // bottom to top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }
  }

  return result
}

spiralOrder(m2)