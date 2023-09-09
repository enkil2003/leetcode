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
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  let deleted = 0;
  while (l < r) {
    let leftLetter = s[l];
    let rightLetter = s[r];

    if (leftLetter !== rightLetter) {
      deleted++;
      if (s[l + 1] === rightLetter) {
        l--;
        r--;
      }
      if (s[r - 1] === leftLetter) {
        r++;
        l++;
      }
    }

    if (deleted > 1) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
validPalindrome("abc");
// l r
// abc
// @lc code=end
