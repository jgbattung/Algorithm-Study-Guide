const numsArray = [2,-1,1]

const findClosestNumer = (nums) => {
  let smallestDistance = Infinity;
  let closestNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentDistance = Math.abs(nums[i]);

    if (currentDistance < smallestDistance) {
      smallestDistance = currentDistance;
      closestNumber = nums[i];
    } else if (currentDistance === smallestDistance && nums[i] > closestNumber) {
      closestNumber = nums[i]
    }
  }

  console.log(closestNumber)
  return closestNumber
}

findClosestNumer(numsArray);