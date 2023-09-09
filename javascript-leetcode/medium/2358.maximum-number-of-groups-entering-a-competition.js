/*
 * @lc app=leetcode id=2358 lang=javascript
 *
 * [2358] Maximum Number of Groups Entering a Competition
 */

// @lc code=start
/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function (grades) {
  let n = grades.length;
  let l = 0;
  let r = n;

  const f = (k) => {
    return ((1 + k) * k) / 2;
  };

  while (l < r) {
    mid = Math.floor(l + (r - l) / 2);

    if (f(mid) <= n) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return r;
};
maximumGroups([10, 6, 12, 7, 3, 5]);
// @lc code=end
