const s1 = "anagram", t1 = "nagaram";
const s2 = "rat", t2 = "car";
const s3 = "ab", t3 = "a";

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char) || map.get(char) === 0) {
      return false
    }
    map.set(char, map.get(char) - 1);
  }

  return true;
};

isAnagram(s1, t1)