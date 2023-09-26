/*
 * @lc app=leetcode id=2441 lang=javascript
 *
 * [2441] Largest Positive Integer That Exists With Its Negative
-3, -1, 2, 3
[-1,10,6,7,-7,1]
    l r
-7,-1,1,6,10
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let left = Math.abs(nums[l]);
    let right = Math.abs(nums[r]);
    if (left === right && nums[l] < 0 && nums[r] > 0) {
      return nums[r];
    } else if (left < right) {
      r--;
    } else {
      l++;
    }
  }
  return -1;
};
// @lc code=end
