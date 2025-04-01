const nums1 = [2,7,11,15], target1 = 9;
const nums2 = [3,2,4], target2 = 6;
const nums3 = [3,3], target3 = 6;

var twoSum = function(nums, target) {
  const ans = []
  let diff;

  for (let i=0; i < nums.length; i++) {
    diff = target - nums[i];

    if (nums.indexOf(diff) !== -1 && i !== nums.indexOf(diff)) {
      ans.push(i, nums.indexOf(diff))
      break
    }
  }

  return ans
};

twoSum(nums1, target1);
twoSum(nums2, target2);
twoSum(nums3, target3);