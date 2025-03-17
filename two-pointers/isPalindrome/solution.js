const s1 = "A man, a plan, a canal: Panama"
const s2 = "race a car"
const s3 = " "
const s4 = "ab_a"

const isPalindrome = function(s) {
  const string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  console.log(string)
  let count = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === string[count]) {
      count += 1
    } else {
      return false
    }
  }
  return true
};

isPalindrome(s1);
isPalindrome(s2);
isPalindrome(s3);
isPalindrome(s4)