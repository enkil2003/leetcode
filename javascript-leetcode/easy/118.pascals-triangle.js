/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const output = [1];
  for (let i = 1; i < numRows; i++) {
    const row = [...output[i - 1]];
    for (let j = 0; j < i - 1; j++) {
      const element = array[j];
    }
  }
};
// @lc code=end
