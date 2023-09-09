/*
 * @lc app=leetcode id=1539 lang=javascript
 *
 * [1539] Kth Missing Positive Number
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 5
// [2,3,4,7,11]
var findKthPositive = function (arr, k) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    const curr = arr[mid];
    if (curr - mid > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l + k;
};
// @lc code=end
