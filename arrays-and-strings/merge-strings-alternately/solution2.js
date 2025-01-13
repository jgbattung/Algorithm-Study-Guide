const w1 = "abc"
const w2 = "pqr"
const w3 = "ab"
const w4 = "pqrs"

const mergedAlternately = (word1, word2) => {
  const minLen = Math.min(word1.length, word2.length);
  const maxLen = Math.max(word1.length, word2.length);
  let longestWord = word1.length > word2.length ? word1 : word2;
  let result = [];
  let mergedString;

  for (let i=0; i < minLen; i++) {
    result.push(word1[i], word2[i])
  }

  for (let i=minLen; i < maxLen; i++) {
    result.push(longestWord[i]);
  }

  mergedString = result.join("")
  console.log(mergedString)
  return mergedString;
};

mergedAlternately(w1,w2)
mergedAlternately(w3,w4)