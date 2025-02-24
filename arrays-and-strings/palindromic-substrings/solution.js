const s1 = "abc"
const s2 = "abc"
const s3 = "aaa"
const s4 = "aaaa"

const countSubstrings = function(s) {
  let count = 0;
    
  for (let i = 0; i < s.length; i++) {
      expandAroundCenter(s, i, i);
      expandAroundCenter(s, i, i + 1);
  }
  
  function expandAroundCenter(s, left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          count++;
          left--;
          right++;
      }
  }
  return count;
} 
countSubstrings(s1)
countSubstrings(s2)
countSubstrings(s3)
countSubstrings(s4)