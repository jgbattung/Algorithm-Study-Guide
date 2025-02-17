const h1 = [1,4,3,2,5]
const h2 = [5,4,3,4,5]

const tallerBuildings = function(heights) {
  let ans = new Array(heights.length).fill(0);

  let maxLeft = 0;
  for (let i=0; i < heights.length; i++) {
    if (heights[i] <= maxLeft) {
      ans[i]++
    }
    maxLeft = Math.max(heights[i], maxLeft);
  }
  
  let maxRight = 0;
  for (let i=heights.length - 1; i >= 0; i--) {
    if (heights[i] <= maxRight) {
      ans[i]++
    }
    maxRight = Math.max(heights[i], maxRight);
  }

  annswer = ans.map((count) => count === 2 ? 1 : 0)
  console.log(annswer)
  return ans.map((count) => count === 2 ? 1 : 0)
}

tallerBuildings(h1);
tallerBuildings(h2);