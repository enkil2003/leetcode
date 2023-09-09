/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const setContainer = new Set();
  for (let i = 0; i < paths.length; i++) {
    setContainer.add(paths[i][0]);
  }
  for (let i = 0; i < paths.length; i++) {
    if (!setContainer.has(paths[i][1])) {
      return paths[i][1];
    }
  }
};
// @lc code=end
