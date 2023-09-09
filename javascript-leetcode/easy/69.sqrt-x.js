/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    let pow = mid * mid;

    if (pow === x) {
      return mid;
    } else if (pow > x) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l - 1;
};
// @lc code=end
