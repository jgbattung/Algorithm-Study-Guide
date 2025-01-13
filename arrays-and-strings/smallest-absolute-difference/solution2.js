// This is an improved solution for this problem
// However, this may yield a different result vs an unsorted input.

const nums1 = [5, 2, 9, 1, 7, 6, 3];
const nums2 = [2, 4, 8, 9, 10, 11]

const smallestAbsoluteDiff = (nums) => {
  nums.sort((a,b) => a-b)
  let smallestDifference = Infinity
  let result = []

  for (let i=0; i < nums.length; i++) {
    const difference = nums[i+1] - nums[i]
    
    if (difference < smallestDifference) {
      smallestDifference = difference
      result = [nums[i], nums[i+1]]
    }
  }

  console.log(result)
  return result
};

smallestAbsoluteDiff(nums1)
smallestAbsoluteDiff(nums2)