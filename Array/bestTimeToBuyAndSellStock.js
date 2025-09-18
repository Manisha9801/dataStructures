//Brute Force Approach
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// var maxProfit = function (prices) {
//   let maxP = 0;
//   for (let i = 0; i <= prices.length - 1; i++) {
//     for (j = i + 1; j <= prices.length - 1; j++) {
//         console.log(prices[i], prices[j]);
//       if (prices[j] > prices[i] && prices[j] - prices[i] > maxP) {
//         maxP = prices[j] - prices[i];
//       }
//     }
//   }
//   return maxP;
// };

//optimal solution

var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (value of prices) {
    if (value < minPrice) {
      minPrice = value;
    } else {
      maxProfit = Math.max(maxProfit, value - minPrice);
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
