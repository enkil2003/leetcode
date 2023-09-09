/*
 * @lc app=leetcode id=1822 lang=javascript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negatives = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n === 0) return 0;
    if (n < 0) {
      negatives++;
    }
  }
  return negatives % 2 !== 0 ? -1 : 1;
};
// arraySign([-1, -2, -3, -4, 3, 2, 1]);
// @lc code=end
