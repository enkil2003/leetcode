/*
 * @lc app=leetcode id=2396 lang=javascript
 *
 * [2396] Strictly Palindromic Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPalindrome = (string) => {
  let l = 0;
  let r = string.length - 1;
  while (l < r) {
    if (string[l] !== string[r]) {
      return false;
    }
    l++;
    r--;
  }
};
var isStrictlyPalindromic = function (n) {
  for (let base = 2; base <= n - 2; base++) {
    const num = n.toString(base);
    if (!isPalindrome(num)) {
      return false;
    }
  }
  return true;
};
// isStrictlyPalindromic(8);
// @lc code=end
