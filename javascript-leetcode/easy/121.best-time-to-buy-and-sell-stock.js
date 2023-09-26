/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxP = 0;
  let sellDay = 1;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      if (profit > maxP) {
        maxP = profit;
        sellDay = r;
      }
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
};

maxProfit([7, 1, 5, 3, 6, 4]);
// @lc code=end
