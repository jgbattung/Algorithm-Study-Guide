const s1 = "babad"
const s2 = "cbbbbd"
const s3 = "cbbd"
const s4 = "ccc"


const longestPalindrome = function(s) {
  let start = 0;
  let end = 0;

  for (let i=0; i < s.length; i++) {
    expandAroundCenter(s, i, i, false);
    expandAroundCenter(s, i, i + 1, true)

    function expandAroundCenter(s, left, right, isTwoCenter = false) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        if (right - left > end - start) {
          end = right;
          start = left;
        }
        left--;
        right++;
      }
    }
  }
  return s.substring(start, end + 1)
}

longestPalindrome(s1)
longestPalindrome(s2)
longestPalindrome(s3)
longestPalindrome(s4)