/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  for (let cookie of s) {
    let childGreedFactor = g[i];
    if (cookie >= childGreedFactor) {
      i++;
    }
  }
  return i;
};
// @lc code=end
