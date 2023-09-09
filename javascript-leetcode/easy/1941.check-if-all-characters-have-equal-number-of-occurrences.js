/*
 * @lc app=leetcode id=1941 lang=javascript
 *
 * [1941] Check if All Characters Have Equal Number of Occurrences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]]) {
      hashMap[s[i]]++;
    } else {
      hashMap[s[i]] = 1;
    }
  }
  const freq = hashMap[s[0]];
  for (let letterCount of Object.values(hashMap)) {
    if (letterCount !== freq) {
      return false;
    }
  }
  return true;
};
// @lc code=end
