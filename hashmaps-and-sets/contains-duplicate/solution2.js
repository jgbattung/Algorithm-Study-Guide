const i1 = [1, 2, 3, 1]
const i2 = [1, 2, 3, 4]
const i3 = []

const containsDuplicate = (nums) => {
  const numbers = new Set();

  for (n of nums) {
    if (numbers.has(n)) {
      return true
    } else {
      numbers.add(n)
    }
  }
  return false
};

containsDuplicate(i1)
containsDuplicate(i2)
containsDuplicate(i3)