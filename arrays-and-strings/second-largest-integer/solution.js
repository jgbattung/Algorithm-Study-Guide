const nums1 = [3, 1, 4, 1, 5, 9]
const nums2 = [2, 2, 2]
const nums3 = [-2342, -3123, -50, -26]

const secondLargestInteger = (nums) => {
  let largestNumber = -Infinity
  let secondLargest = -Infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= largestNumber) {
      secondLargest = largestNumber
      largestNumber = nums[i]
    } else if (nums[i] < largestNumber && nums[i] > secondLargest) {
      secondLargest = nums[i]
    }
  }

  if (largestNumber === secondLargest) return null;

  console.log(secondLargest);
  return secondLargest
};

secondLargestInteger(nums1)
secondLargestInteger(nums2)
secondLargestInteger(nums3)