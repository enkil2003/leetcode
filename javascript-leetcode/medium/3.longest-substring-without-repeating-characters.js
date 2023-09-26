/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = new Set();
  let max = 0;
  let l = 0;
  let r = 0;

  while (r < s.length) {
    while (ans.has(s[r])) {
      ans.delete(s[l]);
      l++;
    }
    ans.add(s[r]);
    max = Math.max(max, ans.size);
    r++;
  }
  return max;
};
// @lc code=end
