const text1 = "nlaebolko";
const text2 = "loonbalxballpoon";
const text3 = "leetcode";

var maxNumberOfBallons = function(text) {
  let maxBallons = Infinity;
  let map = new Map();
  const balloon = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1
  }

  for (let i=0; i < text.length; i++) {
    if (text[i] === 'b' || text[i] === 'a' || text[i] === 'l' || text[i] === 'o' || text[i] === 'n') {
      if (map.has(text[i])) {
        map.set(text[i], map.get(text[i]) + 1);
      } else {
        map.set(text[i], 1);
      }
    }
  }

  for (const char in balloon) {
    if (!map.has(char)) {
      return 0
    }

    const charCount = Math.floor(map.get(char) / balloon[char]);

    maxBallons = Math.min(maxBallons, charCount);
  }

  return maxBallons;
} 

maxNumberOfBallons(text1)
maxNumberOfBallons(text2)
maxNumberOfBallons(text3)