const p1 = [7,1,5,3,6,4];
const p2 = [7,6,4,3,1];
const p3 = [2,4,1];

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let largestProfit = 0;

  for (let i=0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }

    let profit = prices[i] - minPrice
    if (profit > largestProfit) {
      largestProfit = profit
    }
  }

  return largestProfit
};

maxProfit(p1);
maxProfit(p2);
maxProfit(p3);