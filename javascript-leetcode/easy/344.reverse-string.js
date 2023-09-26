/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let tmp = s[l];
    s[l] = s[r];
    s[r] = tmp;
    l++;
    r--;
  }
  return s;
};
// ["h","e","l","l","o"]
// reverseString(["H", "a", "n", "n", "a", "h"]);
// @lc code=end
