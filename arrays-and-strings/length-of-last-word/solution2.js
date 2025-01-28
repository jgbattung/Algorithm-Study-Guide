const s1 = "Hello World"
const s2 = "   fly me   to   the moon  "
const s3 = "luffy is still joyboy"
const s4 = "a"

const lengthOfLastWord = (s) => {
  let word = "";

  for (let i=s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      word = s[i] + word
    }

    if (s[i] === " ") {
      if (word !== "") {
        return word.length
      }
    }
  }

  return word.length
};

lengthOfLastWord(s1)
lengthOfLastWord(s2)
lengthOfLastWord(s3)
lengthOfLastWord(s4)