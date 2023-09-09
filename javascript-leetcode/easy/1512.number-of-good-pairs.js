/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const hashMap = {};
  let count = 0;
  for (const [i, n] of nums.entries()) {
    if (hashMap[n] === undefined) {
      hashMap[n] = 1;
    } else {
      count += hashMap[n];
      hashMap[n]++;
    }
  }
  return count;
};
// @lc code=end
