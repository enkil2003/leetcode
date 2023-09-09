/*
 * @lc app=leetcode id=2367 lang=javascript
 *
 * [2367] Number of Arithmetic Triplets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let count = 0;

  let k = nums.length - 1;
  let j = k - 1;
  let i = j - 1;

  let tmpK = null;
  let tmpJ = null;
  let tmpI = null;

  // while (true) {
  while (k >= 2) {
    // base case
    if (nums[k] - nums[j] === diff) {
      tmpK = k;
      tmpJ = j;
    } else {
      j--;
    }
    if (nums[j] - nums[i] === diff) {
      tmpI = i;
    } else {
      i--;
    }

    if (tmpK !== null && tmpJ !== null && tmpI !== null) {
      count++;
      k = k - 1;
      j = k - 1;
      i = j - 1;
      tmpK = null;
      tmpJ = null;
      tmpI = null;
    }

    if (i < 0) {
      k = k - 1;
      j = k - 1;
      i = j - 1;
      tmpK = null;
      tmpJ = null;
      tmpI = null;
    }
  }

  return count;
};
// @lc code=end
