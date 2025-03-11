const s1 = "PAYPALISHIRING", n1 = 3
const s2 = "PAYPALISHIRING", n2 = 4
const s3 = "AB", n3 = 1

var convert = function(s, numRows) {
  const mArray = Array.from({ length: numRows }, () => [])
  let currentLevel = 0;
  let isGoingDown = true;
  
  if (numRows === 1) return s

  for (let i = 0; i < s.length; i++) {
    console.log(currentLevel)

    if (currentLevel === numRows - 1) {
      isGoingDown = false
    } else if (currentLevel === 0) {
      isGoingDown = true
    }

    if (isGoingDown) {
      mArray[currentLevel].push(s[i])
      currentLevel++
    } else if (!isGoingDown) {
      mArray[currentLevel].push(s[i])
      currentLevel--
    }
  }

  const result = mArray.map(row => row.join('')).join('');
  console.log(result) 
}

convert(s3, n3)