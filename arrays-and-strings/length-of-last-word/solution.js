const s1 = "Hello World"
const s2 = "   fly me   to   the moon  "
const s3 = "luffy is still joyboy"

const lengthOfLastWord = (s) => {
  const words = [];
  let word = ""
  for (let i=0; i < s.length; i++) {
    if (s[i] !== " ") {
      word = word + s[i]
    }

    if (s[i] === " ") {
      if (word !== "") {
        words.push(word)
        word = ""
      }
    }
  }

  if (word !== "") {
    words.push(word)
  }
  console.log(words[words.length - 1].length)
  return words[words.length - 1].length
};

lengthOfLastWord(s1)
lengthOfLastWord(s2)
lengthOfLastWord(s3)