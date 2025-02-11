const n1 = [1,2,3,4];
const n2 = [-1,1,0,-3,3];
const n3 = [0,0];

const productExceptSelf = function(nums) {
  let ans = [];
  let product = 1;

  for(let i=0; i < nums.length; i++) {
    for(j=0; j < nums.length; j++) {
      if (i !== j) {
        product = nums[j]*product
      }
    }
    if(product === -0) {
      product = 0
    }
    ans.push(product)
    product = 1;
  }

  return ans
};

productExceptSelf(n1)
productExceptSelf(n2)
productExceptSelf(n3);