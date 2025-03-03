const s1 = "abcabcbb"
const s2 = "bbbbb"
const s3 = "aab"
const s4 = "dvdf"
const s5 = "pwwkew"
const s6 = "anviaj"

var lengthOfSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let chars = {};

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]] !== undefined && chars[s[i]] >= start) {
      start = chars[s[i]] + 1
    }

    chars[s[i]] = i;

    const currentLength = i - start + 1;
    maxLength = Math.max(maxLength, currentLength)
  }

  return maxLength
}

// lengthOfSubstring(s1)
// lengthOfSubstring(s2)
// lengthOfSubstring(s3)
// lengthOfSubstring(s4)
// lengthOfSubstring(s5)
lengthOfSubstring(s6)