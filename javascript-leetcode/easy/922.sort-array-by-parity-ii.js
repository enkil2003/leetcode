/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 === 1) {
      while (nums[j] % 2 === 1) {
        j += 2;
      }

      let tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
    }
  }
  return nums;
};
sortArrayByParityII([3, 4]);
// @lc code=end
