/*
 * @lc app=leetcode id=2283 lang=javascript
 *
 * [2283] Check if Number Has Equal Digit Count and Digit Value
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (nums) {
  const frequency = new Map();
  for (let val of nums.split("")) {
    let n = Number(val);
    frequency.set(n, frequency.get(n) + 1 || 1);
  }
  for (let i = 0; i < nums.length; i++) {
    let num = +nums[i];
    if (!frequency.get(i) && num === 0) {
      continue;
    }
    if (frequency.get(i) !== num) {
      return false;
    }
  }
  return true;
};
// @lc code=end
