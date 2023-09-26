/*
 * @lc app=leetcode id=2697 lang=javascript
 *
 * [2697] Lexicographically Smallest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  s = s.split("");
  for (let i = 0; i < s.length / 2; i++) {
    let j = s.length - 1 - i;
    const letter1 = s[i].charCodeAt(0);
    const letter2 = s[j].charCodeAt(0);

    if (letter1 < letter2) {
      s[j] = s[i];
    } else if (letter1 > letter2) {
      s[i] = s[j];
    }
  }
  return s.join("");
};
// makeSmallestPalindrome("seven");
// @lc code=end
