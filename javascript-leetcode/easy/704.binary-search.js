/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = (l + r) >> 1;
    let current = nums[m];

    if (current === target) {
      return m;
    } else if (current < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
};
// @lc code=end
