d1 = [1,2,3];
d2 = [4,3,2,1];
d3 = [9];
d4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

const plusOne = function(digits) {
  let ans =[];
  let num = parseInt(digits.join(''));

  console.log(num)

  num += 1;
  let nums = num.toString();

  for(let i=0; i < nums.length; i++) {
    ans.push(parseInt(nums[i]))
  };

  console.log(ans)
  return ans
};

plusOne(d1);
plusOne(d2);
plusOne(d3);
plusOne(d4);