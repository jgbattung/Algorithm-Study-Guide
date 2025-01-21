const p1 = [7,1,5,3,6,4];
const p2 = [7,6,4,3,1];
const p3 = [2,4,1];

const maxProfit = (prices) => {
  let largestDiff = 0;
  let largestPrice;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] - prices[i] > largestDiff) {
        largestDiff = prices[j] - prices[i]
      }
    }
  }
  console.log(largestDiff)
  return largestDiff
};

maxProfit(p1);
maxProfit(p2);
maxProfit(p3);