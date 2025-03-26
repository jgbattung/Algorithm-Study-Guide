const r1 = "a", m1 = "b";
const r2 = "aa", m2 = "ab";
const r3 = "aa", m3 = "aab";

var canConstruct = function(ransomNote, magazine) {
  const map = new Map();

  for (let i=0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1)
    } else {
      map.set(magazine[i], 1);
    }
  }

  for (let i=0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i]) && map.get(ransomNote[i]) > 0) {
      map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
    } else {
      return false
    }
  }

  return true
};

canConstruct(r3, m3);