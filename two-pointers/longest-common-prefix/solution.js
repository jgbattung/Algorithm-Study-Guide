const s1 = ["flower","flow","flight"]
const s2 = ["dog","racecar","car"]

const longestCommongPrefix = (strs) => {
  const shortestWord = strs.reduce((a, b) => (a.length <= b.length ? a : b))
  let prefix = "";

  for (let i=0; i < shortestWord.length; i++) {
    let currentLetter = strs[0][i]

    for (let j=0; j < strs.length; j++) {
      if (strs[j][i] !== currentLetter) {
        return prefix;
      }
    }
    prefix += currentLetter
  }
  return prefix
}

longestCommongPrefix(s1)
longestCommongPrefix(s2)