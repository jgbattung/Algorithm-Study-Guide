const s1 = "abc"
const t1 = "ahbgdc"
const s2 = "axc"
const t2 = "ahbgdc"
const s3 = "aza"
const t3 = "abzba"
const s4 = "ab"
const t4 = "baab"
const s5 = "aaaaaa"
const t5 = "bbaaaa"

const isSubsequence = (s, t) => {
  let arr = Array.from(t);
  let ans = [];

  if (s === "") {
    return true
  }
  
  for (char of s) {
    if (arr.includes(char)) {
      let pos = arr.indexOf(char)
      ans.push(char)
      arr.splice(0, pos + 1)
    } else {
      return false
    }
  }

  if (ans.join("") === s) {
    console.log(ans.join(""))
    return true
  } else {
    return false
  }
};

isSubsequence(s1, t1);
isSubsequence(s2, t2);
isSubsequence(s3, t3);
isSubsequence(s4, t4);
isSubsequence(s5, t5);