const nums1 = [4, 1, 8, 3]
const target1 = 5
const nums2 = [-2, -1, 3, 8]
const target2 = 0

const closesInteger = (nums, target) => {
  let smallestDistance = Infinity
  let closestInt = 0

  for (i = 0; i < nums.length; i++) {
    let currentDistance = Math.abs(target - nums[i]);

    if (currentDistance < smallestDistance) {
      smallestDistance = currentDistance;
      closestInt = nums[i];
    }
  }

  console.log(closestInt);
  return closestInt;
};

closesInteger(nums1, target1);
closesInteger(nums2, target2);