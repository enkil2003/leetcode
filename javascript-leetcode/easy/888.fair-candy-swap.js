/*
 * @lc app=leetcode id=888 lang=javascript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const result = new Array(2);
  const map = {};
  let totalA = 0;
  let totalB = 0;

  for (let i = 0; i < A.length; i++) {
    totalA += A[i];
  }

  for (let i = 0; i < B.length; i++) {
    totalB += B[i];
    map[B[i]] = true;
  }

  let delta = (totalB - totalA) / 2;

  for (let i = 0; i < A.length; i++) {
    if (map[A[i] + delta]) {
      result[0] = A[i];
      result[1] = A[i] + delta;
      return result;
    }
  }
};
const r = fairCandySwap([1, 1], [2, 2]);
r;
// @lc code=end
