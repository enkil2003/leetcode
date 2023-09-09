/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 0;
  let r = n;

  while (l <= r) {
    const index = Math.floor(l + (r - l) / 2);

    const hint = guess(index);

    if (hint === -1) {
      r = index - 1;
    } else if (hint === 1) {
      l = index + 1;
    } else {
      return index;
    }
  }
};
// @lc code=end
