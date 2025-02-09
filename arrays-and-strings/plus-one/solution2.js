d1 = [1,2,3];
d2 = [4,3,2,1];
d3 = [9];
d4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

const plusOne = function(digits) {
  for(let i=digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      console.log(digits)
      return digits;
    }
    if (digits[i] === 9) {
      digits[i] = 0;
    }
  }
  digits.unshift(1)
  return digits
};

// plusOne(d1);
// plusOne(d2);
plusOne(d3);
// plusOne(d4);