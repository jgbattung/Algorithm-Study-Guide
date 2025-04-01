const nums1 = [2,7,11,15], target1 = 9;
const nums2 = [3,2,4], target2 = 6;
const nums3 = [3,3], target3 = 6;

var twoSum = function(nums, target) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currDiff = target - nums[i];
    if (hash.has(currDiff)) {
      console.log([i, hash.get(currDiff)])
      return [i, hash.get(currDiff)]
    } else {
      hash.set(nums[i], i)
    }
  }
};

twoSum(nums1, target1);
twoSum(nums2, target2);
twoSum(nums3, target3);
