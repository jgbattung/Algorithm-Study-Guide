const j1 = "aA", s1 = "aAAbbbb";
const j2 = "z", s2 = "ZZ";

var numJewelsInStones = function(jewels, stones) {
  const j = new Set(jewels)
  let count = 0;

  for (let i=0; i < stones.length; i++) {
    if (j.has(stones[i])) {
      count++
    }
  }

  return count
};

numJewelsInStones(j1, s1);
numJewelsInStones(j2, s2);