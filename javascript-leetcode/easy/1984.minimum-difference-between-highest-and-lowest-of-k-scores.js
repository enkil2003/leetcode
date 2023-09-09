/*
 * @lc app=leetcode id=1984 lang=javascript
 *
 * [1984] Minimum Difference Between Highest and Lowest of K Scores
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  let minimum = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - k; i++) {
    let min = nums[i];
    let max = nums[i + k - 1];
    minimum = Math.min(minimum, max - min);
  }
  return minimum;
};
// @lc code=end
