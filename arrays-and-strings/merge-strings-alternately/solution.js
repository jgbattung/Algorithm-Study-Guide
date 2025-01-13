const w1 = "abc"
const w2 = "pqr"

const mergeAlternately = (word1, word2) => {
  let array1 = Array.from(word1)
  let array2 = Array.from(word2)
  let result = [];
  let mergedString;
  
  for (let i=0; i < array1.length + array2.length; i++) {
    result.push(array1[i], array2[i]);
  }

  mergedString = result.join("");
  console.log(mergedString)
  return mergedString;
}

mergeAlternately(w1, w2);