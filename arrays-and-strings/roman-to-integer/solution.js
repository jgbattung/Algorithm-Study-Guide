const rom1 = "III"
const rom2 = "LVIII"
const rom3 = 'MCMXCIV'

const romanToInt = (s) => {
  let digitsArray = []
  let answer = 0

  for (let i=0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        digitsArray.push(1)
        break;
      case "V":
        digitsArray.push(5)
        break
      case "X":
        digitsArray.push(10)
        break
      case "L":
        digitsArray.push(50)
        break
      case "C":
        digitsArray.push(100)
        break
      case "D":
        digitsArray.push(500)
        break
      case "M":
        digitsArray.push(1000)
        break
    }
  }

  for (let i=0; i < digitsArray.length; i++) {
    if (digitsArray[i] >= digitsArray[i+1] || i+1 === digitsArray.length) {
      answer += digitsArray[i]
    } else if (digitsArray[i] < digitsArray[i+1]) {
      answer += digitsArray[i+1] - digitsArray[i]
      i += 1
    }
  }
  console.log(answer)
  return answer
}

romanToInt(rom1)
romanToInt(rom2)
romanToInt(rom3)