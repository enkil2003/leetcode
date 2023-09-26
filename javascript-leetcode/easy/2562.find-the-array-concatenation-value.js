/*
 * @lc app=leetcode id=2562 lang=javascript
 *
 * [2562] Find the Array Concatenation Value
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let ans = 0;
  for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
    if (i !== j) {
      ans += +`${nums[i]}${nums[j]}`;
    } else {
      ans += nums[i];
    }
  }
  return ans;
};
// findTheArrayConcVal([5, 14, 13, 8, 12]);
// @lc code=end
