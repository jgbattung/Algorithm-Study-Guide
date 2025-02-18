const n1 = 3749;
const n2 = 58;
const n3 = 1994;

const intToRoman = function(num) {
  let ans = "";

  let n = num % 1000
  let thousands
  if (n !== num) {
    thousands = num - n
    let M = thousands/1000
    ans += "M".repeat(M)
  }
  
  let n2 = n % 100
  let hundreds
  if (n2 !== n) {
    hundreds = n - n2
    let H = hundreds/100
    if (H === 9) {
      ans += "CM"
    } else if (H === 4) {
      ans += "CD"
    } else if (H ===5) {
      ans += "D"
    } else if (H > 5) {
      let hun = H - 5
      hun = "D" + "C".repeat(hun)
      ans += hun
    } else {
      ans += "C".repeat(H);
    }
  }
  
  let n3 = n2 % 10
  let tens = n2 - n3
  if (n3 !== n2) {
    let T = tens/10
    if (T === 9) {
      ans += "XC"
    } else if (T === 4) {
      ans += "XL"
    } else if (T === 5) {
      ans += "L"
    } else if (T > 5) {
      let ten = T - 5
      ten = "L" + "X".repeat(ten)
      ans += ten
    } else {
      ans += "X".repeat(T)
    }
  }
  
  if (n3 === 9) {
    ans += "IX"
  } else if (n3 === 4) {
    ans += "IV"
  } else if (n3 === 5) {
    ans += "V"
  } else if (n3 > 5) {
    let ones = n3 - 5
    ones = "V" + "I".repeat(ones)
    ans += ones
  } else {
    ans += "I".repeat(n3)
  }

  return ans
}

intToRoman(n1);
intToRoman(n2);
intToRoman(n3);