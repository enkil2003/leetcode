/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const helper = (i, s) => {
  let count1 = 0;
  let count0 = 0;
  for (let start = i; start < s.length; start++) {
    const n1 = +s[start];
    if (n1 === 0) {
      count0++;
    }
    if (n1 === 1) {
      count1++;
    }
    if (count0 === count1) {
      return 1;
    }
  }
  return 0;
};
var countBinarySubstrings = function (s) {
  let count = 0;
  for (let start = 0; start < s.length; start++) {
    count += helper(start, s);
  }
  return count;
};
// countBinarySubstrings("00110011");
// @lc code=end
