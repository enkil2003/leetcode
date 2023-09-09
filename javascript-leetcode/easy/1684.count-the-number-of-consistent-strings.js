/*
 * @lc app=leetcode id=1684 lang=javascript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  allowed = new Set(allowed);
  let count = 0;
  for (let word of words) {
    let allowedWord = true;
    for (let letter of word.split("")) {
      if (!allowed.has(letter)) {
        allowedWord = false;
        break;
      }
    }
    if (allowedWord) {
      count++;
    }
  }
  return count;
};
// @lc code=end
