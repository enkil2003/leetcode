/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299]
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let rightMax = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const newMax = Math.max(rightMax, arr[i]);
    arr[i] = rightMax;
    rightMax = newMax;
  }

  return arr;
};
// @lc code=end
