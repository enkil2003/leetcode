/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    hashMap[letter] = (hashMap[letter] ?? 0) + 1;
  }
  return hashMap;
};
longestPalindrome("abccccdd");
// @lc code=end
