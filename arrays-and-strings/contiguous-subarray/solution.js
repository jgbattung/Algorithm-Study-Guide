const nums1 = [-2,1,-3, 4,-1,2,1,-5,4] 

const largestContSubarray = (nums) => {

  let largestSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i]
    } else {
      currentSum += nums[i]
    }

    if (currentSum > largestSum) {
      largestSum = currentSum
    }
  }
  console.log(largestSum)
  return largestSum
}

largestContSubarray(nums1)