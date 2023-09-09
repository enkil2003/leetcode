/*
 * @lc app=leetcode id=1929 lang=javascript
 *
 * [1929] Concatenation of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    nums[i + numsLength] = nums[i];
  }
  return nums;
};
// @lc code=end
