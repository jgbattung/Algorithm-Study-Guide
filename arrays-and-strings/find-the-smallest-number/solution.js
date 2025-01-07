const nums1 = [3, 1, 4, 1, 5, 9]
const nums2 = [-3, 0, -5, 2, -1]

const getSmallestInteger = (nums) => {
  let smallestInt = Infinity
  nums.forEach((num) => {
    if (num < smallestInt) {
      smallestInt = num;
    }
  })

  console.log(smallestInt)
  return smallestInt
};

getSmallestInteger(nums1);
getSmallestInteger(nums2);