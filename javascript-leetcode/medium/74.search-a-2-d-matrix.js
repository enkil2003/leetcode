/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let l = 0;
  let r = rows * cols - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const row = Math.floor(mid / cols);
    const col = mid % cols;
    const current = matrix[row][col];

    if (current === target) {
      return true;
    } else if (current < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};
// @lc code=end
