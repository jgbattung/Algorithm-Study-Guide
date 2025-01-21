const p1 = [7,1,5,3,6,4];
const p2 = [7,6,4,3,1];
const p3 = [2,4,1];

const maxProfit = (prices) => {
  let minPrice = Infinity;
  let largestProfit = 0;

  for (num of prices) {
    if (num < minPrice) {
      minPrice = num
    }
    
    let profit = num - minPrice
    if (profit > largestProfit) {
      largestProfit = profit
    }
  }
  console.log(largestProfit)
  return largestProfit
};

maxProfit(p1);
maxProfit(p2);
maxProfit(p3);
