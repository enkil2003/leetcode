/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let l = 0;
  let window = new Set();
  for (let r = 0; r < nums.length; r++) {
    if (r - l > k) {
      window.delete(nums[l]);
      l++;
    }
    if (window.has(nums[r])) {
      return true;
    }
    window.add(nums[r]);
  }
  return false;
};
containsNearbyDuplicate([99, 99]);
// @lc code=end
