/*
 * @lc app=leetcode id=2716 lang=javascript
 *
 * [2716] Minimize String Length
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  return new Set(s).size;
};
// @lc code=end
