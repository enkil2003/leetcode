/*
 * @lc app=leetcode id=1475 lang=javascript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [];
  const stack = [];
  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    result[i] =
      stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }
  return result;
};
finalPrices([8, 4, 6, 2, 3]);
// @lc code=end
