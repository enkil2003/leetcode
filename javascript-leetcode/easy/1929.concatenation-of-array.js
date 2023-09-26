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
var getConcatenation2 = function (nums) {
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    nums[i + numsLength] = nums[i];
  }
  return nums;
};
var getConcatenation = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    nums.push(num);
  }
  return nums;
};
// getConcatenation([1, 2, 1]);
// @lc code=end
