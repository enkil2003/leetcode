/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0;
  let r = num;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    let curr = mid * mid;

    if (curr === num) {
      return true;
    } else if (curr > num) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
};
// @lc code=end
