/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const helper = (l, r, s) => {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return helper(l + 1, r, s) || helper(l, r - 1, s);
    }
    l++;
    r--;
  }
  return true;
};
validPalindrome("abca");
// @lc code=end
