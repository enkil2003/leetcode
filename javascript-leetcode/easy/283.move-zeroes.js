/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      let tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      j++;
    }
  }
  // return nums;
};
// moveZeroes([0, 1, 0, 3, 12]);
// @lc code=end
