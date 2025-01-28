const s1 = "()"
const s2 = "()[]{}"
const s3 = "(]"
const s4 = "([])"

const isValid = (s) => {
  let brackets = []
  for (let i=0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      brackets.push(s[i])
    }

    switch (s[i]) {
      case ")":
        if (brackets[brackets.length - 1] === "(") {
          brackets.pop()
        } else {
          return false
        }
        break;
      case "}":
        if (brackets[brackets.length - 1] === "{") {
          brackets.pop()
        } else {
          return false
        }
        break;
      case "]":
        if (brackets[brackets.length - 1] === "[") {
          brackets.pop()
        } else {
          return false
        }
        break;
      default:
        break;
    }
  }
  return brackets.length === 0;
}

isValid(s1)
isValid(s2)
isValid(s3)
isValid(s4)