/*
 * @lc app=leetcode id=2154 lang=javascript
 *
 * [2154] Keep Multiplying Found Values by Two
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === original) {
      original = 2 * original;
    }
  }

  return original;
};
// @lc code=end
