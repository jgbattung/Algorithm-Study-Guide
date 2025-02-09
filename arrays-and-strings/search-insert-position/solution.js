const n1 = [1,3,5,6], t1 = 5
const n2 = [1,3,5,6], t2 = 2
const n3 = [1,3,5,6], t3 = 7

const searchInsert = function(nums, target) {
  for(let i=0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i;
    }
  }
  return nums.length
};

searchInsert(n1, t1);
searchInsert(n2, t2);
searchInsert(n3, t3);