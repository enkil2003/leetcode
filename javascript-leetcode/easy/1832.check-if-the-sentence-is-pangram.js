/*
 * @lc app=leetcode id=1832 lang=javascript
 *
 * [1832] Check if the Sentence Is Pangram
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const hashSet = new Set();
  for (let i = 0; i < sentence.length; i++) {
    hashSet.add(sentence[i]);
    if (hashSet.size === 26) {
      return true;
    }
  }
  return false;
};
// checkIfPangram("abcdefghijklmnopqrstuvwxyz");
// @lc code=end
