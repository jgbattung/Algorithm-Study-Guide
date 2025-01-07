const nums1 = [3, 1, 4, 1, 5, 9]
const nums2 = [-3, 0, -5, 2, -1]

const findSmallestAndLargest = (nums) => {
  let currentSmallest = Infinity
  let currentLargest = -Infinity
  let result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < currentSmallest) {
      currentSmallest = nums[i];
    }

    if (nums[i] > currentLargest) {
      currentLargest = nums[i];
    }
  }

  result.push(currentSmallest, currentLargest)
  console.log(result)
};

findSmallestAndLargest(nums1);
findSmallestAndLargest(nums2);