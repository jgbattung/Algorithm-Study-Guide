const n1 = [0,1,2,4,5,7];
const n2 = [0,2,3,4,6,8,9];

const summaryRanges = function(nums) {
  let ranges = [];
  let currRange = [];
  
  if (nums.length == 0) return []

  for (let i=0; i < nums.length; i++) {
    let currNum = nums[i]
    let nextNum = nums[i + 1]


    if (nextNum !== undefined && nextNum === currNum + 1) {
      currRange.push(currNum);
    }

    if (nextNum === undefined) {
      if (currRange.length === 0) {
        currRange.push(currNum);
      }
      if (currRange[currRange.length - 1] === currNum - 1) {
        currRange.push(currNum);
      }
    }

    if (nextNum !== undefined && nextNum !== currNum + 1) {
      currRange.push(currNum);
      if (currRange.length === 1) {
        ranges.push(`${currRange[0]}`);
      } else {
        ranges.push(`${currRange[0]}->${currRange[currRange.length -1]}`);
      }
      currRange = [];
    }
  }

  if (currRange.length > 1) {
    ranges.push(`${currRange[0]}->${currRange[currRange.length - 1]}`);
  } else {
    ranges.push(`${currRange}`);
  }

  return ranges
};

summaryRanges(n1);
summaryRanges(n2);