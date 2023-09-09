/*
 * @lc app=leetcode id=2744 lang=javascript
 *
 * [2744] Find Maximum Number of String Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const hashMap = {};
  let count = 0;
  for (let word of words) {
    const reversedWord = word[1] + word[0];
    if (hashMap[reversedWord]) {
      count++;
    }
    hashMap[word] = true;
  }
  return count;
};
// @lc code=end
