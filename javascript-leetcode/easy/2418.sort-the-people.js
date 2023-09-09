/*
 * @lc app=leetcode id=2418 lang=javascript
 *
 * [2418] Sort the People
 */

// @lc code=start
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const map = {};
  for (let i = 0; i < names.length; i++) {
    map[heights[i]] = names[i];
  }
  heights.sort((a, b) => b - a);
  for (let i = 0; i < heights.length; i++) {
    names[i] = map[heights[i]];
  }
  return names;
};
// @lc code=end
