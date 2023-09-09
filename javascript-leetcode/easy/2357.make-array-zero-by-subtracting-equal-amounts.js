/*
 * @lc app=leetcode id=2357 lang=javascript
 *
 * [2357] Make Array Zero by Subtracting Equal Amounts
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const s = new Set(nums);
  return [...s].filter((n) => n > 0).length;
};
// @lc code=end
