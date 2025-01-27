const i1 = [1, 2, 3, 1]
const i2 = [1, 2, 3, 4]
const i3 = []

const containsDuplicate = (nums) => {
  if (nums.length === 0) {
    return false
  }

  for (let i=0; i < nums.length; i++) {
    for (let j=0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        return true
      }
    } 
  }

  return false
};

containsDuplicate(i1)
containsDuplicate(i2)
containsDuplicate(i3)