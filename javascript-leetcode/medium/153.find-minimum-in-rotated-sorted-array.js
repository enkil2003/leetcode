/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let min = nums[0];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }

    const index = l + Math.floor((r - l) / 2);
    const num = nums[index];

    min = Math.min(min, num);

    if (num >= nums[l]) {
      l = index + 1;
    } else {
      r = index - 1;
    }
  }
  return min;
};
// @lc code=end
