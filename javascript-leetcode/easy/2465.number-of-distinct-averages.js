/*
 * @lc app=leetcode id=2465 lang=javascript
 *
 * [2465] Number of Distinct Averages
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  const averages = new Set();
  // o(n log (n))
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  // O(n)
  while (l < r) {
    let n1 = nums[l++];
    let n2 = nums[r--];
    const avg = (n1 + n2) / 2;
    averages.add(avg);
  }
  return averages.size;
};
// @lc code=end
