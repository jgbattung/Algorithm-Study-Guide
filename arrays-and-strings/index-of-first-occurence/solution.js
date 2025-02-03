const h1 = "sadbutsad"
const n1 = "sad"
const h2 = "leetcode"
const n2 = "leeto"

const strStr = function(haystack, needle) {
  const nLen = needle.length;

  for (let i=0; i < haystack.length; i++) {
    if (haystack.slice(i, i + nLen) === needle) {
      console.log(i)
      return i;
    }
  }

  return -1
};

strStr(h1, n1);
strStr(h2, n2);
