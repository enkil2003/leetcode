/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    let count = 1;
    while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      r++;
      count++;
    }
    for (let i = 0; i < Math.min(2, count); i++) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  return l;
};
// @lc code=end
