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
var replaceElements2 = function (arr) {
  let rightMax = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const newMax = Math.max(rightMax, arr[i]);
    arr[i] = rightMax;
    rightMax = newMax;
  }

  return arr;
};

var replaceElements = function (arr) {
  let rightMax = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(rightMax, arr[i]);
    arr[i] = rightMax;
    rightMax = newMax;
  }
  return arr;
};
// @lc code=end
