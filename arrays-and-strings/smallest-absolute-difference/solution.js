const nums1 = [5, 2, 9, 1, 7, 6, 3];
const nums2 = [2, 4, 8, 9, 10, 11]

const smallestAbsoluteDiff = (nums) => {
  let smallestDifference = Infinity;
  let result = [];

  for (let i=0; i < nums.length; i++) {
    let smallerNumber = 0;
    let largerNumber = 0;
    let difference = 0;
    for (let j=0; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
        difference = Math.abs(nums[i] - nums[j])
        if (difference < smallestDifference) {
          smallestDifference = difference;
          if (nums[i] > nums[j]) {
            largerNumber = nums[i];
            smallerNumber = nums[j];
          } else {
            largerNumber = nums[j];
            smallerNumber = nums[i];
          }
          result.length = 0;
          result.push(smallerNumber, largerNumber);
        }
      }
    }
  }

  console.log(result)
  return result
}

smallestAbsoluteDiff(nums1);
smallestAbsoluteDiff(nums2);