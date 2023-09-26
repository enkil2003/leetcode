/*
 * @lc app=leetcode id=2108 lang=javascript
 *
 * [2108] Find First Palindromic String in the Array
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
const isPalindrome = (word) => {
  for (let i = 0, j = word.length - 1; i < word.length / 2; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
};
var firstPalindrome = function (words) {
  for (let word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
};
// firstPalindrome(["def", "ghi"]);
// @lc code=end
