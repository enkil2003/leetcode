/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const soldiers = {};
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (!soldiers[i]) soldiers[i] = 0;
      soldiers[i] += mat[i][j];
    }
  }
  const sortedRows = Object.entries(soldiers).sort(([, a], [, b]) => a - b);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(parseInt(sortedRows[i][0]));
  }
  return res;
};
const r = kWeakestRows(
  [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  3
);
r;
// @lc code=end
