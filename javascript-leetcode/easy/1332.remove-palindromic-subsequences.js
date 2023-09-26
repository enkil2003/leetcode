/*
 * @lc app=leetcode id=1332 lang=javascript
 *
 * [1332] Remove Palindromic Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const isPalindrome = (l, r, s) => {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
var removePalindromeSub = function (s) {
  if (!s.length) return 0;
  return isPalindrome(0, s.length - 1, s) ? 1 : 2;
};
// @lc code=end
