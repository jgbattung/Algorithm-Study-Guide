const n1 = [1,2,3,4];
const n2 = [-1,1,0,-3,3];
const n3 = [0,0];

const productExceptSelf = function(nums) {
  let ans = new Array(nums.length).fill(1)

  let leftProduct = 1;
  for(let i=0; i < nums.length; i++) {
    ans[i] = leftProduct
    leftProduct = leftProduct * nums[i]
  }

  let rightProduct = 1;
  for (let i=nums.length - 1; i >= 0; i--) {
    ans[i] = rightProduct * ans[i]
    rightProduct = rightProduct * nums[i]
  }

  return ans;
};

productExceptSelf(n1)
// productExceptSelf(n2)
// productExceptSelf(n3);