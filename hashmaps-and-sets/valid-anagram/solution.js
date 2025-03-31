const s1 = "anagram", t1 = "nagaram";
const s2 = "rat", t2 = "car";
const s3 = "ab", t3 = "a";

var isAnagram = function(s, t) {
  const map = new Map();
  const result = [];

  for (let i=0; i < s.length; i++) {
    if(map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i]) && map.get(t[i]) > 0) {
      map.set(t[i], map.get(t[i]) - 1)
    } else {
      return false
    }
  }

  for (const [key, value] of map.entries()) {
    if (value > 0) {
      result.push(key)
    }
  }

  if (result.length > 0) {
    return false
  } else {
    return true
  }
};

isAnagram(s1, t1);
isAnagram(s2, t2);
isAnagram(s2, t2);
isAnagram(s3, t3);