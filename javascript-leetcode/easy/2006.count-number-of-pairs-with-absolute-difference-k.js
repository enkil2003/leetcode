/*
 * @lc app=leetcode id=2006 lang=javascript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const hashMap = {};
  for (let num of nums) {
    hashMap[num] = (hashMap[num] ?? 0) + 1;
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i] - k]) {
      count += hashMap[nums[i] - k];
    }
  }
  return count;
};
// @lc code=end
